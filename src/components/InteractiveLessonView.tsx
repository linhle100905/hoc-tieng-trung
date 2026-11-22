import React, { useState, useEffect } from 'react';
import { InteractiveLesson, Exercise } from '../data/lessonExercises';
import {
  X,
  Volume2,
  Mic,
  CheckCircle2,
  XCircle,
  Sparkles,
  Trophy,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Lightbulb
} from 'lucide-react';
import { speakChinese, ChineseSpeechRecognizer, isSpeechRecognitionSupported } from '../utils/speech';
import confetti from 'canvas-confetti';

interface InteractiveLessonViewProps {
  lesson: InteractiveLesson;
  onExit: () => void;
  onComplete: (xpEarned: number) => void;
}

export const InteractiveLessonView: React.FC<InteractiveLessonViewProps> = ({
  lesson,
  onExit,
  onComplete
}) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  
  // For Scramble (Word builder)
  const [selectedWordChips, setSelectedWordChips] = useState<string[]>([]);
  const [availableWordChips, setAvailableWordChips] = useState<{ id: number; text: string; used: boolean }[]>([]);

  // For Speech
  const [isListeningMic, setIsListeningMic] = useState(false);
  const [spokenResult, setSpokenResult] = useState('');

  // Status for current question check
  const [checkStatus, setCheckStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  const currentExercise: Exercise = lesson.exercises[stepIndex];
  const progressPercent = Math.round(((stepIndex + 1) / lesson.exercises.length) * 100);

  // Initialize or reset state when exercise changes
  useEffect(() => {
    setCheckStatus('idle');
    setSelectedChoiceId(null);
    setSpokenResult('');
    setErrorMessage('');

    if (currentExercise.audioText) {
      speakChinese(currentExercise.audioText, 0.85);
    }

    if (currentExercise.type === 'scramble' && currentExercise.scrambleWords) {
      setSelectedWordChips([]);
      setAvailableWordChips(
        currentExercise.scrambleWords.map((w, index) => ({
          id: index,
          text: w,
          used: false
        }))
      );
    }
  }, [stepIndex, currentExercise]);

  const handlePlayAudio = (text?: string) => {
    if (text) speakChinese(text, 0.85);
  };

  // Word chip clicked in Scramble
  const handleChipClick = (chip: { id: number; text: string; used: boolean }) => {
    if (checkStatus !== 'idle') return;
    if (chip.used) return;

    // Add to answer
    setSelectedWordChips([...selectedWordChips, chip.text]);
    // Mark as used
    setAvailableWordChips(
      availableWordChips.map((c) => (c.id === chip.id ? { ...c, used: true } : c))
    );
  };

  // Remove word chip from answer zone
  const handleRemoveChip = (indexToRemove: number) => {
    if (checkStatus !== 'idle') return;
    const removedText = selectedWordChips[indexToRemove];
    const newSelected = selectedWordChips.filter((_, idx) => idx !== indexToRemove);
    setSelectedWordChips(newSelected);

    // Unmark first matching used chip in available
    let unmarked = false;
    setAvailableWordChips(
      availableWordChips.map((c) => {
        if (!unmarked && c.used && c.text === removedText) {
          unmarked = true;
          return { ...c, used: false };
        }
        return c;
      })
    );
  };

  // Speech Recognition handler
  const handleStartMic = () => {
    if (!isSpeechRecognitionSupported()) {
      alert('Vui lòng mở trên Safari (iOS) hoặc Chrome để dùng Micro.');
      return;
    }

    setIsListeningMic(true);
    setSpokenResult('');

    const recognizer = new ChineseSpeechRecognizer(
      (text, isFinal) => {
        setSpokenResult(text);
        if (isFinal) {
          setIsListeningMic(false);
          verifySpeech(text);
        }
      },
      (err) => {
        setIsListeningMic(false);
        setErrorMessage(err);
      },
      () => {
        setIsListeningMic(false);
      }
    );

    recognizer.start();
  };

  const verifySpeech = (text: string) => {
    const cleanSpoken = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?!，。！？]/g, '').trim();
    const cleanTarget = (currentExercise.targetHanzi || '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?!，。！？]/g, '').trim();

    if (cleanSpoken.includes(cleanTarget) || cleanTarget.includes(cleanSpoken)) {
      setCheckStatus('correct');
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } else {
      setCheckStatus('wrong');
    }
  };

  // Check Answer Handler
  const handleCheck = () => {
    if (currentExercise.type === 'intro') {
      goToNextStep();
      return;
    }

    if (currentExercise.type === 'choice' || currentExercise.type === 'listen' || currentExercise.type === 'fill') {
      const selected = currentExercise.options?.find((o) => o.id === selectedChoiceId);
      if (selected?.isCorrect) {
        setCheckStatus('correct');
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
        if (currentExercise.audioText) speakChinese(currentExercise.audioText);
      } else {
        setCheckStatus('wrong');
      }
    } else if (currentExercise.type === 'scramble') {
      const answer = selectedWordChips.join('');
      const correct = currentExercise.correctOrder?.join('') || '';
      if (answer === correct) {
        setCheckStatus('correct');
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
        speakChinese(correct);
      } else {
        setCheckStatus('wrong');
      }
    }
  };

  const goToNextStep = () => {
    if (stepIndex < lesson.exercises.length - 1) {
      setStepIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
      onComplete(50);
    }
  };

  const canCheck =
    currentExercise.type === 'intro' ||
    (currentExercise.type === 'choice' && selectedChoiceId !== null) ||
    (currentExercise.type === 'listen' && selectedChoiceId !== null) ||
    (currentExercise.type === 'fill' && selectedChoiceId !== null) ||
    (currentExercise.type === 'scramble' && selectedWordChips.length > 0) ||
    (currentExercise.type === 'speak' && checkStatus !== 'idle');

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-slate-900 rounded-3xl border border-slate-800 text-center shadow-2xl my-auto animate-fade-in">
        <div className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-500/40 rounded-full flex items-center justify-center mb-4">
          <Trophy className="w-10 h-10 text-amber-400 animate-bounce" />
        </div>
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Hoàn Thành Bài Học!</span>
        <h2 className="text-2xl font-bold text-white mt-1">{lesson.levelTitle}</h2>
        <p className="text-xs text-slate-300 mt-1">Bạn vừa tự tay vượt qua toàn bộ các thử thách giao tiếp này!</p>

        <div className="my-5 p-4 bg-slate-800/80 rounded-2xl border border-slate-700 w-full max-w-xs">
          <span className="text-xs text-slate-400">Phần thưởng đạt được:</span>
          <p className="text-3xl font-extrabold text-amber-400 mt-1">+50 XP</p>
          <p className="text-[11px] text-emerald-400 font-semibold mt-1">🔓 Đã hoàn thành ải 1 và mở ải tiếp theo!</p>
        </div>

        <button
          onClick={onExit}
          className="w-full max-w-xs py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold rounded-2xl text-sm shadow-xl shadow-green-600/30 transition active:scale-95"
        >
          Trở về Lộ trình
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full justify-between">
      {/* TOP PROGRESS BAR (DUOLINGO STYLE) */}
      <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
        <button
          onClick={onExit}
          className="p-1 text-slate-400 hover:text-white"
          title="Thoát bài học"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex-1 bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
          <div
            className="bg-gradient-to-r from-green-500 to-emerald-400 h-full rounded-full transition-all duration-300 shadow-sm"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <span className="text-xs font-mono font-bold text-slate-400">
          {stepIndex + 1}/{lesson.exercises.length}
        </span>
      </div>

      {/* EXERCISE CONTENT AREA */}
      <div className="flex-1 overflow-y-auto py-5 flex flex-col justify-center">
        {/* Prompt title */}
        <h3 className="text-base font-bold text-white mb-4 leading-snug">
          {currentExercise.prompt}
        </h3>

        {/* 1. INTRO TYPE (Học từ mới) */}
        {currentExercise.type === 'intro' && (
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 text-center shadow-xl animate-fade-in">
            <h1 className="text-7xl font-chinese font-bold text-white mb-2">
              {currentExercise.targetHanzi}
            </h1>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-2xl font-bold text-red-400 font-mono">
                {currentExercise.targetPinyin}
              </span>
              <button
                onClick={() => handlePlayAudio(currentExercise.audioText)}
                className="p-2 rounded-full bg-red-500/20 text-red-400 hover:text-white"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <div className="inline-block bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-xs text-amber-300 font-semibold mb-3">
              Hán Việt: {currentExercise.hanViet}
            </div>

            <p className="text-lg font-semibold text-emerald-400 mb-4">
              Nghĩa: {currentExercise.targetVietnamese}
            </p>

            {currentExercise.tips && (
              <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-left text-xs text-slate-300 flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{currentExercise.tips}</span>
              </div>
            )}
          </div>
        )}

        {/* 2. CHOICE & LISTEN TYPE (Trắc nghiệm & Nghe chọn) */}
        {(currentExercise.type === 'choice' || currentExercise.type === 'listen') && (
          <div className="space-y-3">
            {/* Audio button for listen exercise */}
            {currentExercise.type === 'listen' && (
              <div className="flex justify-center mb-4">
                <button
                  onClick={() => handlePlayAudio(currentExercise.audioText)}
                  className="w-20 h-20 rounded-full bg-red-600/30 border-2 border-red-500 flex items-center justify-center text-red-400 hover:text-white transition active:scale-95 shadow-xl shadow-red-600/20 animate-pulse"
                >
                  <Volume2 className="w-10 h-10" />
                </button>
              </div>
            )}

            {currentExercise.targetHanzi && (
              <div className="text-center mb-3">
                <span className="text-5xl font-chinese font-bold text-white">
                  {currentExercise.targetHanzi}
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 gap-2.5">
              {currentExercise.options?.map((opt) => {
                const isSelected = selectedChoiceId === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      if (checkStatus === 'idle') setSelectedChoiceId(opt.id);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between active:scale-[0.98] ${
                      isSelected
                        ? 'bg-slate-800 border-amber-400 ring-2 ring-amber-400/30 shadow-lg'
                        : 'bg-slate-900 border-slate-700 hover:bg-slate-800/80'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-sm text-white block">
                        {opt.text}
                      </span>
                      {opt.subText && (
                        <span className="text-xs text-slate-400">{opt.subText}</span>
                      )}
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 border-amber-400'
                          : 'border-slate-600 text-slate-400'
                      }`}
                    >
                      {opt.id.toUpperCase()}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. SCRAMBLE TYPE (Ghép câu thẻ từ Duolingo - Word Bank) */}
        {currentExercise.type === 'scramble' && (
          <div className="space-y-6">
            {/* Vietnamese Target sentence */}
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Câu cần dịch:</p>
                <p className="text-lg font-bold text-white mt-0.5">
                  "{currentExercise.targetVietnamese}"
                </p>
              </div>
              <button
                onClick={() => handlePlayAudio(currentExercise.audioText)}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* Answer Assembly Drop Zone */}
            <div className="min-h-[64px] p-3 rounded-2xl border-2 border-dashed border-slate-700 bg-slate-950/60 flex flex-wrap gap-2 items-center">
              {selectedWordChips.length === 0 ? (
                <span className="text-xs text-slate-500 italic pl-1">
                  Chạm vào các thẻ từ bên dưới để ghép vào đây...
                </span>
              ) : (
                selectedWordChips.map((word, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleRemoveChip(idx)}
                    className="px-3.5 py-2 bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 text-white rounded-xl font-chinese font-bold text-lg shadow-md hover:border-red-400 active:scale-95 transition"
                  >
                    {word}
                  </button>
                ))
              )}
            </div>

            {/* Available Word Bank */}
            <div className="pt-2">
              <p className="text-xs text-slate-400 mb-2">Ngân hàng thẻ từ:</p>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {availableWordChips.map((chip) => (
                  <button
                    key={chip.id}
                    onClick={() => handleChipClick(chip)}
                    disabled={chip.used || checkStatus !== 'idle'}
                    className={`px-4 py-2.5 rounded-2xl font-chinese font-bold text-xl border transition-all active:scale-95 shadow-md ${
                      chip.used
                        ? 'bg-slate-900/40 border-slate-800 text-slate-700 opacity-40 cursor-not-allowed'
                        : 'bg-slate-800 hover:bg-slate-700 border-slate-600 text-slate-100 hover:border-amber-400'
                    }`}
                  >
                    {chip.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. FILL IN THE BLANK (Điền từ hội thoại) */}
        {currentExercise.type === 'fill' && (
          <div className="space-y-4">
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700">
              <span className="text-xs text-slate-400">{currentExercise.dialogueContext}</span>
              <div className="mt-2 text-xl font-chinese font-bold text-white flex items-center gap-1">
                <span>{currentExercise.dialogueSpeaker}</span>
                <span>{currentExercise.blankPrefix}</span>
                <span className="px-3 py-1 border-b-2 border-amber-400 text-amber-300 font-bold bg-amber-400/10 rounded">
                  {selectedChoiceId
                    ? currentExercise.options?.find((o) => o.id === selectedChoiceId)?.text
                    : '____'}
                </span>
                <span>{currentExercise.blankSuffix}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 pt-2">
              {currentExercise.options?.map((opt) => {
                const isSelected = selectedChoiceId === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      if (checkStatus === 'idle') setSelectedChoiceId(opt.id);
                    }}
                    className={`p-3.5 rounded-2xl border text-center transition-all ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold ring-2 ring-amber-400/30'
                        : 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-2xl font-chinese block">{opt.text}</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">{opt.subText}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 5. SPEAK TYPE (Luyện nói) */}
        {currentExercise.type === 'speak' && (
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-6xl font-chinese font-bold text-white">
              {currentExercise.targetHanzi}
            </h1>
            <p className="text-2xl font-mono font-bold text-red-400">
              {currentExercise.targetPinyin}
            </p>
            <p className="text-xs text-slate-300">"{currentExercise.targetVietnamese}"</p>

            <button
              onClick={() => handlePlayAudio(currentExercise.audioText)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white text-xs border border-slate-700"
            >
              <Volume2 className="w-4 h-4" /> Nghe đọc mẫu
            </button>

            <div className="pt-4 flex flex-col items-center">
              <button
                onClick={handleStartMic}
                disabled={isListeningMic}
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl active:scale-95 ${
                  isListeningMic
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-gradient-to-tr from-red-600 to-amber-500 text-white hover:scale-105'
                }`}
              >
                <Mic className="w-8 h-8" />
              </button>
              <span className="text-xs text-slate-400 mt-2">
                {isListeningMic ? 'Đang lắng nghe...' : 'Bấm micro và đọc to'}
              </span>
            </div>

            {spokenResult && (
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                Máy nghe: <strong className="text-white font-chinese font-bold">"{spokenResult}"</strong>
              </div>
            )}
          </div>
        )}
      </div>

      {/* BOTTOM ACTION DRAWER (CLASSIC DUOLINGO RESULT BAR) */}
      <div className="pt-2">
        {/* Correct Result Banner */}
        {checkStatus === 'correct' && (
          <div className="p-3.5 mb-2 rounded-2xl bg-emerald-950/90 border border-emerald-500/60 flex items-center justify-between text-emerald-300 animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Chính xác! Xuất sắc!</p>
                <p className="text-[11px] text-emerald-400">+10 XP</p>
              </div>
            </div>
            <button
              onClick={goToNextStep}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold rounded-xl text-xs shadow-lg shadow-emerald-500/30 transition active:scale-95"
            >
              Tiếp tục →
            </button>
          </div>
        )}

        {/* Wrong Result Banner */}
        {checkStatus === 'wrong' && (
          <div className="p-3.5 mb-2 rounded-2xl bg-rose-950/90 border border-rose-500/60 flex items-center justify-between text-rose-300 animate-fade-in">
            <div className="flex items-center gap-2">
              <XCircle className="w-6 h-6 text-rose-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Chưa chính xác!</p>
                <p className="text-[11px] text-rose-300">
                  {currentExercise.type === 'scramble'
                    ? `Đáp án: ${currentExercise.correctOrder?.join(' ')}`
                    : 'Hãy thử lại nhé!'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setCheckStatus('idle')}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs transition active:scale-95"
            >
              Thử lại
            </button>
          </div>
        )}

        {/* Main Check Button (When status is idle) */}
        {checkStatus === 'idle' && (
          <button
            onClick={handleCheck}
            disabled={!canCheck}
            className={`w-full py-3.5 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-200 active:scale-[0.98] ${
              canCheck
                ? 'bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white shadow-xl shadow-red-500/25'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50'
            }`}
          >
            {currentExercise.type === 'intro' ? 'Đã hiểu, Tiếp tục' : 'Kiểm tra'}
          </button>
        )}
      </div>
    </div>
  );
};
