import React, { useState, useEffect } from 'react';
import { LearningLevel, DialogueTurn } from '../data/conversations';
import {
  Volume2,
  Mic,
  ArrowLeft,
  Sparkles,
  Trophy,
  Play,
  RotateCcw,
  CheckCircle2,
  UserCheck
} from 'lucide-react';
import { speakChinese, ChineseSpeechRecognizer, isSpeechRecognitionSupported } from '../utils/speech';
import confetti from 'canvas-confetti';

interface DialogueViewProps {
  level: LearningLevel;
  onBack: () => void;
  onLevelCompleted: (levelNumber: number, xp: number) => void;
}

export const DialogueView: React.FC<DialogueViewProps> = ({
  level,
  onBack,
  onLevelCompleted
}) => {
  const [activeTurnIndex, setActiveTurnIndex] = useState(0);
  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const [isRolePlayMode, setIsRolePlayMode] = useState(true);
  const [isListeningMic, setIsListeningMic] = useState(false);
  const [spokenTranscript, setSpokenTranscript] = useState('');
  const [completedTurns, setCompletedTurns] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const turns = level.dialogue;
  const currentTurn: DialogueTurn = turns[activeTurnIndex];
  const isUserTurn = currentTurn?.speaker === 'B';

  const handlePlaySentence = async (text: string) => {
    await speakChinese(text, 0.9);
  };

  // Play full dialogue from top to bottom
  const handlePlayAll = async () => {
    setIsPlayingFull(true);
    for (let i = 0; i < turns.length; i++) {
      setActiveTurnIndex(i);
      await speakChinese(turns[i].hanzi, 0.9);
      await new Promise((r) => setTimeout(r, 600));
    }
    setIsPlayingFull(false);
  };

  // Start Mic for User's Turn
  const handleStartSpeakingTurn = () => {
    if (!isSpeechRecognitionSupported()) {
      alert('Vui lòng mở trên trình duyệt Safari (iOS) hoặc Chrome để sử dụng Micro.');
      return;
    }

    setIsListeningMic(true);
    setSpokenTranscript('');

    const recognizer = new ChineseSpeechRecognizer(
      (transcript, isFinal) => {
        setSpokenTranscript(transcript);
        if (isFinal) {
          setIsListeningMic(false);
          checkSpeech(transcript);
        }
      },
      (error) => {
        setIsListeningMic(false);
        console.warn('Lỗi thu âm:', error);
      },
      () => {
        setIsListeningMic(false);
      }
    );

    recognizer.start();
  };

  const checkSpeech = (spoken: string) => {
    const cleanSpoken = spoken.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?!，。！？]/g, '').trim();
    const cleanTarget = currentTurn.hanzi.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?!，。！？]/g, '').trim();

    // Check if spoken contains key target characters
    let isMatch = false;
    if (cleanSpoken.length > 0 && (cleanSpoken.includes(cleanTarget) || cleanTarget.includes(cleanSpoken))) {
      isMatch = true;
    } else {
      // Partial match for longer sentences (at least 50% matched)
      let matches = 0;
      for (const char of cleanSpoken) {
        if (cleanTarget.includes(char)) matches++;
      }
      if (matches >= Math.min(cleanTarget.length, 3)) {
        isMatch = true;
      }
    }

    if (isMatch) {
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
      const newCompleted = [...completedTurns, currentTurn.id];
      setCompletedTurns(newCompleted);

      // Move to next turn
      if (activeTurnIndex < turns.length - 1) {
        setTimeout(() => {
          const nextIndex = activeTurnIndex + 1;
          setActiveTurnIndex(nextIndex);
          // If next is partner, auto speak it!
          if (turns[nextIndex].speaker === 'A') {
            speakChinese(turns[nextIndex].hanzi, 0.9);
          }
        }, 1000);
      } else {
        finishLevel();
      }
    }
  };

  const finishLevel = () => {
    setIsFinished(true);
    confetti({ particleCount: 120, spread: 90, origin: { y: 0.5 } });
    onLevelCompleted(level.levelNumber, level.xpReward);
  };

  const handleSkipOrNext = () => {
    if (activeTurnIndex < turns.length - 1) {
      const nextIndex = activeTurnIndex + 1;
      setActiveTurnIndex(nextIndex);
      if (turns[nextIndex].speaker === 'A') {
        speakChinese(turns[nextIndex].hanzi, 0.9);
      }
    } else {
      finishLevel();
    }
  };

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-slate-900 rounded-3xl border border-slate-700 text-center shadow-2xl my-auto animate-fade-in">
        <div className="w-20 h-20 bg-amber-500/20 border-2 border-amber-500/40 rounded-full flex items-center justify-center mb-4">
          <Trophy className="w-10 h-10 text-amber-400 animate-bounce" />
        </div>
        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Ải {level.levelNumber} Hoàn Thành!</span>
        <h2 className="text-2xl font-bold text-white mt-1">{level.title}</h2>
        <p className="text-xs text-slate-300 mt-1">Bạn đã hoàn thành toàn bộ đoạn hội thoại giao tiếp này!</p>

        <div className="my-5 p-4 bg-slate-800/80 rounded-2xl border border-slate-700 w-full max-w-xs">
          <span className="text-xs text-slate-400">Phần thưởng mở khóa:</span>
          <p className="text-3xl font-extrabold text-amber-400 mt-1">+{level.xpReward} XP</p>
          <p className="text-[11px] text-emerald-400 font-semibold mt-1">🔓 Đã mở khóa ải tiếp theo trên lộ trình!</p>
        </div>

        <button
          onClick={onBack}
          className="w-full max-w-xs py-3.5 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold rounded-2xl text-sm shadow-xl shadow-red-500/25 transition active:scale-95"
        >
          Trở về Lộ trình bài học
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Top Bar for Dialogue */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <button
          onClick={onBack}
          className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="text-center">
          <h3 className="text-xs font-bold text-white flex items-center gap-1.5 justify-center">
            <span>{level.icon}</span> Ải {level.levelNumber}: {level.title}
          </h3>
          <p className="text-[10px] text-slate-400">Đóng vai giao tiếp thực tế</p>
        </div>

        <button
          onClick={handlePlayAll}
          disabled={isPlayingFull}
          className="flex items-center gap-1 px-2.5 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 rounded-xl text-xs font-medium transition"
          title="Nghe toàn bộ bài"
        >
          <Play className="w-3 h-3 fill-red-400 text-red-400" />
          <span className="text-[10px]">Nghe hết</span>
        </button>
      </div>

      {/* Chat Messages Timeline */}
      <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
        {turns.map((turn, index) => {
          const isA = turn.speaker === 'A';
          const isActive = index === activeTurnIndex;
          const isCompleted = completedTurns.includes(turn.id);

          return (
            <div
              key={turn.id}
              onClick={() => {
                setActiveTurnIndex(index);
                handlePlaySentence(turn.hanzi);
              }}
              className={`flex items-start gap-2.5 cursor-pointer transition-all ${
                isA ? 'flex-row' : 'flex-row-reverse'
              } ${isActive ? 'scale-[1.02]' : 'opacity-85'}`}
            >
              {/* Avatar */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-lg shrink-0 shadow-md ${
                  isA ? 'bg-slate-800 border border-slate-700' : 'bg-red-600/30 border border-red-500'
                }`}
              >
                {turn.avatar}
              </div>

              {/* Chat Bubble */}
              <div
                className={`max-w-[78%] p-3.5 rounded-2xl relative shadow-lg ${
                  isA
                    ? 'bg-slate-800/90 text-slate-100 rounded-tl-sm border border-slate-700/80'
                    : 'bg-gradient-to-br from-red-600/90 to-red-700 text-white rounded-tr-sm border border-red-400/30'
                } ${isActive ? 'ring-2 ring-amber-400 shadow-amber-400/20' : ''}`}
              >
                {/* Speaker name */}
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                  <span className={isA ? 'text-slate-400' : 'text-red-200'}>{turn.speakerName}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlaySentence(turn.hanzi);
                    }}
                    className="p-1 hover:text-white"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Hanzi */}
                <p className="text-lg font-chinese font-bold tracking-wide">
                  {turn.hanzi}
                </p>

                {/* Pinyin */}
                <p className="text-xs font-mono text-amber-300 mt-0.5">
                  {turn.pinyin}
                </p>

                {/* Sino-Vietnamese & Meaning */}
                <div className="mt-1.5 pt-1.5 border-t border-white/10 text-[11px] leading-snug">
                  <p className="text-slate-300 opacity-90">Hán Việt: {turn.hanViet}</p>
                  <p className="font-semibold text-white mt-0.5">{turn.vietnamese}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Controller at the bottom */}
      <div className="bg-slate-900/90 backdrop-blur border-t border-slate-800 p-3 rounded-2xl">
        {isUserTurn ? (
          /* User's Turn to Speak into Mic */
          <div className="flex flex-col items-center text-center">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5" /> Đến lượt bạn nói câu này!
            </span>
            <p className="text-xs text-slate-300 mb-2 truncate max-w-xs font-chinese">
              "{currentTurn.hanzi}" ({currentTurn.pinyin})
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={handleStartSpeakingTurn}
                disabled={isListeningMic}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs shadow-lg transition active:scale-95 ${
                  isListeningMic
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-gradient-to-r from-red-600 to-amber-500 text-white hover:scale-105'
                }`}
              >
                <Mic className="w-4 h-4" />
                {isListeningMic ? 'Đang lắng nghe bạn đọc...' : 'Bấm Micro và đọc'}
              </button>

              <button
                onClick={handleSkipOrNext}
                className="px-3 py-2 text-xs text-slate-400 hover:text-white rounded-xl bg-slate-800"
              >
                Bỏ qua →
              </button>
            </div>

            {spokenTranscript && (
              <p className="text-[11px] text-slate-400 mt-2">
                Máy nghe được: <strong className="text-white font-chinese">"{spokenTranscript}"</strong>
              </p>
            )}
          </div>
        ) : (
          /* Partner's Turn (Listen & Proceed) */
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePlaySentence(currentTurn.hanzi)}
                className="p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white"
              >
                <Volume2 className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-300">Nghe bạn học đối thoại</span>
            </div>

            <button
              onClick={handleSkipOrNext}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1"
            >
              Tiếp tục →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
