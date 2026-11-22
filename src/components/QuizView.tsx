import React, { useState, useEffect } from 'react';
import { VocabWord } from '../data/hsk1';
import { Volume2, CheckCircle2, XCircle, RotateCcw, Trophy, Sparkles } from 'lucide-react';
import { speakChinese } from '../utils/speech';
import { soundFx } from '../utils/soundFx';
import confetti from 'canvas-confetti';

interface QuizViewProps {
  vocabList: VocabWord[];
  onScoreEarned: (points: number) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ vocabList, onScoreEarned }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState<VocabWord[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentWord = vocabList[currentIndex];

  // Generate 4 randomized options for current question
  useEffect(() => {
    if (!currentWord) return;

    const incorrect = vocabList
      .filter((w) => w.id !== currentWord.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const pool = [...incorrect, currentWord].sort(() => 0.5 - Math.random());
    setOptions(pool);
    setSelectedOptionId(null);
    setIsAnswered(false);
  }, [currentIndex, vocabList]);

  const handleSelect = (optionId: number) => {
    if (isAnswered) return;

    setSelectedOptionId(optionId);
    setIsAnswered(true);

    if (optionId === currentWord.id) {
      setScore((prev) => prev + 10);
      onScoreEarned(10);
      soundFx.playSuccess();
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 }
      });
      speakChinese(currentWord.hanzi);
    } else {
      soundFx.playWrong();
    }
  };

  const handleNext = () => {
    if (currentIndex < vocabList.length - 1 && currentIndex < 9) {
      // 10 questions per quiz session
      setCurrentIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
      soundFx.playLevelUp();
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 }
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-800/90 rounded-3xl border border-slate-700 text-center shadow-2xl">
        <div className="w-20 h-20 bg-amber-500/20 border-2 border-amber-500/40 rounded-full flex items-center justify-center mb-4">
          <Trophy className="w-10 h-10 text-amber-400 animate-bounce" />
        </div>
        <h2 className="text-2xl font-bold text-white">Xuất Sắc!</h2>
        <p className="text-sm text-slate-300 mt-1">Bạn đã hoàn thành phiên luyện tập hôm nay.</p>
        <div className="my-5 p-4 bg-slate-900/80 rounded-2xl border border-slate-800 w-full max-w-xs">
          <span className="text-xs text-slate-400">Điểm số đạt được:</span>
          <p className="text-4xl font-extrabold text-amber-400 mt-1">+{score} XP</p>
        </div>
        <button
          onClick={handleRestart}
          className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-2xl text-sm shadow-lg shadow-red-600/30 transition active:scale-95"
        >
          <RotateCcw className="w-4 h-4" />
          Luyện tập lại
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-3xl p-5 shadow-2xl w-full max-w-sm mx-auto">
      {/* Progress header */}
      <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-4">
        <span>Câu hỏi {currentIndex + 1}/10</span>
        <span className="text-amber-400 font-semibold flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> +{score} XP
        </span>
      </div>

      {/* Target Question */}
      <div className="w-full bg-slate-900/90 rounded-2xl p-5 border border-slate-700 text-center mb-5">
        <p className="text-xs text-slate-400 mb-1">Chữ Hán này có nghĩa là gì?</p>
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-5xl font-chinese font-bold text-white tracking-wider">
            {currentWord.hanzi}
          </h1>
          <button
            onClick={() => speakChinese(currentWord.hanzi)}
            className="p-2 rounded-full bg-red-500/20 text-red-400 hover:text-white"
            title="Nghe âm"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>
        <p className="text-base text-red-400 font-mono font-medium mt-1">
          {currentWord.pinyin}
        </p>
      </div>

      {/* Options List */}
      <div className="w-full space-y-2.5">
        {options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrect = option.id === currentWord.id;

          let btnClass = 'bg-slate-700/60 border-slate-600/60 text-slate-200 hover:bg-slate-700';

          if (isAnswered) {
            if (isCorrect) {
              btnClass = 'bg-emerald-600/30 border-emerald-500 text-emerald-300 font-bold';
            } else if (isSelected && !isCorrect) {
              btnClass = 'bg-rose-600/30 border-rose-500 text-rose-300';
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={isAnswered}
              className={`w-full p-3.5 rounded-2xl border text-left text-sm transition-all duration-200 flex items-center justify-between active:scale-[0.98] ${btnClass}`}
            >
              <div>
                <span className="font-semibold block">{option.meaning}</span>
                <span className="text-[11px] text-slate-400">Hán Việt: {option.hanViet}</span>
              </div>

              {isAnswered && isCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              )}
              {isAnswered && isSelected && !isCorrect && (
                <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Next Question Button */}
      {isAnswered && (
        <button
          onClick={handleNext}
          className="mt-5 w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-2xl text-sm shadow-lg shadow-red-600/30 transition active:scale-95 animate-fade-in"
        >
          Câu tiếp theo →
        </button>
      )}
    </div>
  );
};
