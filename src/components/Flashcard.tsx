import React, { useState } from 'react';
import { Volume2, Rotate3D, Check, X, Sparkles, BookOpen, Lightbulb } from 'lucide-react';
import { VocabWord } from '../data/hsk1';
import { speakChinese } from '../utils/speech';

interface FlashcardProps {
  word: VocabWord;
  onMastered: (id: number) => void;
  onNeedReview: (id: number) => void;
}

export const Flashcard: React.FC<FlashcardProps> = ({ word, onMastered, onNeedReview }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleAudio = async (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    setIsPlayingAudio(true);
    await speakChinese(text);
    setIsPlayingAudio(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full max-w-sm mx-auto perspective-1000">
      <div
        onClick={handleFlip}
        className={`relative min-h-[380px] w-full rounded-3xl p-6 transition-all duration-500 cursor-pointer shadow-2xl border ${
          isFlipped
            ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-amber-500/30 shadow-amber-500/10'
            : 'bg-gradient-to-br from-slate-800/95 to-slate-900 border-slate-700/80 shadow-red-500/10'
        } flex flex-col justify-between`}
      >
        {/* Top Badges */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/30 px-2.5 py-1 rounded-full">
            {word.level} • {word.category}
          </span>

          <button
            onClick={(e) => handleAudio(e, word.hanzi)}
            disabled={isPlayingAudio}
            className="p-2.5 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/40 transition active:scale-95"
            title="Nghe phát âm"
          >
            <Volume2 className={`w-5 h-5 ${isPlayingAudio ? 'animate-bounce text-red-300' : ''}`} />
          </button>
        </div>

        {/* Card Main Body */}
        {!isFlipped ? (
          /* FRONT SIDE */
          <div className="flex flex-col items-center justify-center my-6 text-center">
            <h1 className="text-7xl font-chinese font-bold text-white tracking-widest drop-shadow-md">
              {word.hanzi}
            </h1>

            <p className="text-3xl font-bold text-red-400 mt-3 font-mono">
              {word.pinyin}
            </p>

            <div className="mt-4 inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-semibold text-amber-300">
                Hán Việt: <strong className="text-white uppercase">{word.hanViet}</strong>
              </span>
            </div>

            <p className="text-xs text-slate-400 mt-6 flex items-center gap-1.5">
              <Rotate3D className="w-3.5 h-3.5 text-slate-500" />
              Chạm vào thẻ để xem nghĩa & ví dụ
            </p>
          </div>
        ) : (
          /* BACK SIDE */
          <div className="flex flex-col justify-center my-2 text-left space-y-4">
            <div>
              <span className="text-xs text-slate-400 uppercase font-semibold">Nghĩa tiếng Việt</span>
              <h3 className="text-2xl font-bold text-emerald-400 mt-0.5">{word.meaning}</h3>
            </div>

            {word.radical && (
              <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/50">
                <span className="text-[11px] text-slate-400 flex items-center gap-1 font-semibold">
                  <BookOpen className="w-3 h-3 text-red-400" /> Bộ thủ
                </span>
                <p className="text-xs text-slate-200 mt-0.5">{word.radical}</p>
              </div>
            )}

            {word.tips && (
              <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                <span className="text-[11px] text-amber-400 flex items-center gap-1 font-semibold">
                  <Lightbulb className="w-3 h-3 text-amber-400" /> Mẹo ghi nhớ
                </span>
                <p className="text-xs text-amber-200 mt-0.5 leading-relaxed">{word.tips}</p>
              </div>
            )}

            {word.exampleHanzi && (
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/60 flex items-start justify-between">
                <div>
                  <p className="text-xs text-slate-400">Ví dụ minh họa:</p>
                  <p className="text-sm font-chinese font-semibold text-white mt-0.5">
                    {word.exampleHanzi}
                  </p>
                  <p className="text-xs font-mono text-red-300">{word.examplePinyin}</p>
                  <p className="text-xs text-slate-300 mt-0.5">{word.exampleMeaning}</p>
                </div>
                <button
                  onClick={(e) => handleAudio(e, word.exampleHanzi)}
                  className="p-1.5 text-slate-400 hover:text-white transition"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Bottom Review Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-700/50" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => onNeedReview(word.id)}
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600/60 text-slate-300 text-xs font-semibold transition active:scale-95"
          >
            <X className="w-4 h-4 text-rose-400" />
            Cần ôn lại
          </button>

          <button
            onClick={() => onMastered(word.id)}
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-xs font-bold shadow-lg shadow-green-600/20 transition active:scale-95"
          >
            <Check className="w-4 h-4 text-white" />
            Đã thuộc rồi
          </button>
        </div>
      </div>
    </div>
  );
};
