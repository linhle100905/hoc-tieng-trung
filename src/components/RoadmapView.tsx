import React, { useState } from 'react';
import { CONVERSATION_LEVELS, LearningLevel } from '../data/conversations';
import { Lock, CheckCircle2, Play, Sparkles, MessageSquare, X } from 'lucide-react';

interface RoadmapViewProps {
  unlockedLevel: number;
  onStartInteractiveLesson: (level: LearningLevel) => void;
  onStartDialogue: (level: LearningLevel) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  unlockedLevel,
  onStartInteractiveLesson,
  onStartDialogue
}) => {
  const [selectedPreview, setSelectedPreview] = useState<LearningLevel | null>(null);

  return (
    <div className="relative pt-6 pb-12 px-2 flex flex-col items-center">
      {/* Roadmap Title Banner */}
      <div className="w-full text-center mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
          Cây Lộ Trình Duolingo
        </span>
        <h2 className="text-xl font-bold text-white mt-2">Vượt từng ải bài học</h2>
        <p className="text-xs text-slate-400 mt-0.5">Học từ mới, ghép thẻ chữ, nghe nói và mở khóa ải tiếp theo</p>
      </div>

      {/* Vertical Winding Path of Levels */}
      <div className="relative w-full max-w-xs flex flex-col items-center space-y-8 my-2">
        {/* Connecting decorative SVG line */}
        <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-1.5 bg-slate-800 -z-10 rounded-full" />

        {CONVERSATION_LEVELS.map((level, idx) => {
          const isUnlocked = level.levelNumber <= unlockedLevel;
          const isCompleted = level.levelNumber < unlockedLevel;
          const isCurrent = level.levelNumber === unlockedLevel;

          // Alternating zigzag offset for Duolingo winding feel
          const offsetClass = idx % 2 === 0 ? '-translate-x-6' : 'translate-x-6';

          return (
            <div
              key={level.id}
              className={`flex flex-col items-center transition-all duration-300 ${offsetClass}`}
            >
              {/* Level Circular Button */}
              <button
                onClick={() => {
                  if (isUnlocked) {
                    setSelectedPreview(level);
                  }
                }}
                className={`relative w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-xl active:scale-95 border-4 ${
                  isCurrent
                    ? 'bg-gradient-to-tr ' + level.color + ' border-amber-400 ring-4 ring-amber-400/20 scale-110 shadow-amber-500/30'
                    : isCompleted
                    ? 'bg-gradient-to-tr from-emerald-600 to-teal-700 border-emerald-400/80 shadow-emerald-500/20'
                    : 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed opacity-60'
                }`}
              >
                {/* Level Icon or Lock */}
                {isUnlocked ? (
                  <span className="text-3xl select-none">{level.icon}</span>
                ) : (
                  <Lock className="w-7 h-7 text-slate-500" />
                )}

                {/* Floating Star or Checkmark Badge */}
                {isCompleted && (
                  <div className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 p-1 rounded-full shadow">
                    <CheckCircle2 className="w-4 h-4 fill-amber-400 text-slate-950" />
                  </div>
                )}

                {isCurrent && (
                  <div className="absolute -top-2 bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow animate-bounce">
                    Ải này!
                  </div>
                )}
              </button>

              {/* Title label beneath */}
              <div className="text-center mt-2 max-w-[140px]">
                <h4 className={`text-xs font-bold ${isUnlocked ? 'text-white' : 'text-slate-500'}`}>
                  {level.title}
                </h4>
                <p className="text-[10px] text-slate-400 truncate">{level.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Level Selection Modal */}
      {selectedPreview && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-fade-in relative">
            <button
              onClick={() => setSelectedPreview(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${selectedPreview.color} flex items-center justify-center text-3xl shadow-lg`}>
                {selectedPreview.icon}
              </div>
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  Ải {selectedPreview.levelNumber} • +{selectedPreview.xpReward} XP
                </span>
                <h3 className="text-lg font-bold text-white">{selectedPreview.title}</h3>
                <p className="text-xs text-slate-400">{selectedPreview.subtitle}</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4 bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
              {selectedPreview.description}
            </p>

            {/* Action Buttons: Interactive Lesson vs Roleplay */}
            <div className="space-y-2.5">
              <button
                onClick={() => {
                  const lvl = selectedPreview;
                  setSelectedPreview(null);
                  onStartInteractiveLesson(lvl);
                }}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold rounded-2xl text-sm shadow-xl shadow-green-600/30 flex items-center justify-center gap-2 transition active:scale-95"
              >
                <Play className="w-4 h-4 fill-white" />
                Vào học tương tác (Chuẩn Duolingo)
              </button>

              <button
                onClick={() => {
                  const lvl = selectedPreview;
                  setSelectedPreview(null);
                  onStartDialogue(lvl);
                }}
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-2xl text-xs border border-slate-700 flex items-center justify-center gap-2 transition active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Luyện nói kịch bản hội thoại
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
