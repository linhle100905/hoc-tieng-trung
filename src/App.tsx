import React, { useState, useEffect } from 'react';
import { HSK1_VOCAB, VocabWord } from './data/hsk1';
import { CONVERSATION_LEVELS, LearningLevel } from './data/conversations';
import { ALL_INTERACTIVE_LESSONS, InteractiveLesson } from './data/lessonExercises';
import { Flashcard } from './components/Flashcard';
import { HanziWriterCard } from './components/HanziWriterCard';
import { QuizView } from './components/QuizView';
import { RoadmapView } from './components/RoadmapView';
import { DialogueView } from './components/DialogueView';
import { InteractiveLessonView } from './components/InteractiveLessonView';
import { PinyinChartView } from './components/PinyinChartView';
import {
  Map,
  BookOpen,
  PenTool,
  Award,
  Flame,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle,
  HelpCircle,
  Music
} from 'lucide-react';

type TabType = 'roadmap' | 'pinyin' | 'vocab' | 'write' | 'quiz';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabType>('roadmap');
  
  // Unlocked level progression
  const [unlockedLevel, setUnlockedLevel] = useState<number>(() => {
    const saved = localStorage.getItem('unlocked_level');
    return saved ? parseInt(saved, 10) : 1;
  });

  // State for which mode is running
  const [activeInteractiveLesson, setActiveInteractiveLesson] = useState<InteractiveLesson | null>(null);
  const [activeDialogueLevel, setActiveDialogueLevel] = useState<LearningLevel | null>(null);

  // Vocab card index
  const [wordIndex, setWordIndex] = useState<number>(() => {
    const saved = localStorage.getItem('current_word_index');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [masteredWordIds, setMasteredWordIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('mastered_words');
    return saved ? JSON.parse(saved) : [];
  });

  const [totalXp, setTotalXp] = useState<number>(() => {
    const saved = localStorage.getItem('user_xp');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [streakDays] = useState<number>(1);
  const [showPwaTip, setShowPwaTip] = useState(false);

  const currentWord: VocabWord = HSK1_VOCAB[wordIndex] || HSK1_VOCAB[0];

  useEffect(() => {
    localStorage.setItem('unlocked_level', unlockedLevel.toString());
  }, [unlockedLevel]);

  useEffect(() => {
    localStorage.setItem('current_word_index', wordIndex.toString());
  }, [wordIndex]);

  useEffect(() => {
    localStorage.setItem('mastered_words', JSON.stringify(masteredWordIds));
  }, [masteredWordIds]);

  useEffect(() => {
    localStorage.setItem('user_xp', totalXp.toString());
  }, [totalXp]);

  const handleNextWord = () => {
    if (wordIndex < HSK1_VOCAB.length - 1) {
      setWordIndex((prev) => prev + 1);
    } else {
      setWordIndex(0);
    }
  };

  const handlePrevWord = () => {
    if (wordIndex > 0) {
      setWordIndex((prev) => prev - 1);
    } else {
      setWordIndex(HSK1_VOCAB.length - 1);
    }
  };

  const handleMastered = (id: number) => {
    if (!masteredWordIds.includes(id)) {
      const updated = [...masteredWordIds, id];
      setMasteredWordIds(updated);
      setTotalXp((prev) => prev + 15);
    }
    handleNextWord();
  };

  const handleScoreEarned = (points: number) => {
    setTotalXp((prev) => prev + points);
  };

  const handleInteractiveComplete = (xpEarned: number) => {
    setTotalXp((prev) => prev + xpEarned);
    if (activeInteractiveLesson && activeInteractiveLesson.levelNumber >= unlockedLevel) {
      setUnlockedLevel(activeInteractiveLesson.levelNumber + 1);
    }
  };

  const handleDialogueCompleted = (completedLevelNum: number, xpEarned: number) => {
    setTotalXp((prev) => prev + xpEarned);
    if (completedLevelNum >= unlockedLevel) {
      setUnlockedLevel(completedLevelNum + 1);
    }
  };

  const isFullScreenLesson = activeInteractiveLesson !== null || activeDialogueLevel !== null;

  return (
    <div className="h-[100dvh] h-screen bg-slate-950 text-slate-100 flex flex-col max-w-md mx-auto relative shadow-2xl overflow-hidden border-x border-slate-800 select-none">
      {/* TOP HEADER: CỐ ĐỊNH 100% Ở ĐỈNH, KHÔNG BỊ TRƯỢT KHI CUỘN NỘI DUNG */}
      {!isFullScreenLesson && (
        <header className="shrink-0 px-4 pt-3 pb-2.5 bg-slate-900/95 backdrop-blur z-30 border-b border-slate-800/90 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-red-500/20">
                中
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                  Tiếng Trung Duolingo
                  <span className="text-[10px] bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded-full font-mono border border-red-500/30">
                    Ải {unlockedLevel}/{CONVERSATION_LEVELS.length}
                  </span>
                </h1>
                <p className="text-[11px] text-slate-400">Lộ trình 25 câu tương tác/ải</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Streak */}
              <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 px-2 py-1 rounded-xl text-amber-400 text-xs font-bold">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
                <span>{streakDays}</span>
              </div>

              {/* XP */}
              <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/30 px-2 py-1 rounded-xl text-emerald-400 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{totalXp} XP</span>
              </div>

              {/* Info tooltip */}
              <button
                onClick={() => setShowPwaTip(!showPwaTip)}
                className="p-1 text-slate-400 hover:text-white"
                title="Hướng dẫn"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PWA iPhone Install Tip Banner */}
          {showPwaTip && (
            <div className="mt-2.5 p-3 rounded-2xl bg-gradient-to-r from-red-950/80 to-slate-900 border border-red-500/30 text-xs text-slate-200 animate-fade-in">
              <p className="font-semibold text-red-300 flex items-center gap-1 mb-1">
                📱 Cài app vào màn hình iPhone / Android:
              </p>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Mở link bằng <strong>Safari</strong> $\rightarrow$ Bấm <strong>Chia sẻ (Share)</strong> $\rightarrow$ Chọn <strong>"Thêm vào Màn hình chính" (Add to Home Screen)</strong> là có ngay app độc lập không cần laptop!
              </p>
            </div>
          )}

          {/* Vocab/Writing quick picker bar */}
          {(currentTab === 'vocab' || currentTab === 'write') && (
            <div className="mt-2.5 flex items-center justify-between bg-slate-950/60 p-1.5 rounded-2xl border border-slate-800">
              <button
                onClick={handlePrevWord}
                className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition active:scale-95"
                title="Từ trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 px-2">
                {HSK1_VOCAB.map((w, idx) => {
                  const isCurrent = idx === wordIndex;
                  const isMastered = masteredWordIds.includes(w.id);

                  return (
                    <button
                      key={w.id}
                      onClick={() => setWordIndex(idx)}
                      className={`px-2.5 py-1 rounded-xl text-xs font-chinese transition-all whitespace-nowrap flex items-center gap-1 ${
                        isCurrent
                          ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/30 scale-105'
                          : isMastered
                          ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-800/60'
                          : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {w.hanzi}
                      {isMastered && <CheckCircle className="w-2.5 h-2.5 text-emerald-400" />}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleNextWord}
                className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition active:scale-95"
                title="Từ tiếp theo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </header>
      )}

      {/* KHU VỰC NỘI DUNG: CHỈ DUY NHẤT VÙNG NÀY ĐƯỢC PHÉP CUỘN (SCROLL) */}
      <main className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden smooth-scroll px-4 py-3 flex flex-col">
        {/* Interactive Duolingo Lesson Mode */}
        {activeInteractiveLesson ? (
          <InteractiveLessonView
            lesson={activeInteractiveLesson}
            onExit={() => setActiveInteractiveLesson(null)}
            onComplete={handleInteractiveComplete}
          />
        ) : activeDialogueLevel ? (
          /* Roleplay Dialogue Mode */
          <DialogueView
            level={activeDialogueLevel}
            onBack={() => setActiveDialogueLevel(null)}
            onLevelCompleted={handleDialogueCompleted}
          />
        ) : (
          /* Standard 5 Tabs */
          <div className="flex-1 flex flex-col justify-center">
            {currentTab === 'roadmap' && (
              <RoadmapView
                unlockedLevel={unlockedLevel}
                onStartInteractiveLesson={(lvl) => {
                  const lesson = ALL_INTERACTIVE_LESSONS[lvl.levelNumber] || ALL_INTERACTIVE_LESSONS[1];
                  setActiveInteractiveLesson(lesson);
                }}
                onStartDialogue={(level) => {
                  setActiveDialogueLevel(level);
                }}
              />
            )}

            {currentTab === 'pinyin' && (
              <PinyinChartView />
            )}

            {currentTab === 'vocab' && (
              <Flashcard
                word={currentWord}
                onMastered={handleMastered}
                onNeedReview={handleNextWord}
              />
            )}

            {currentTab === 'write' && (
              <HanziWriterCard
                character={currentWord.hanzi}
                pinyin={currentWord.pinyin}
                hanViet={currentWord.hanViet}
                meaning={currentWord.meaning}
              />
            )}

            {currentTab === 'quiz' && (
              <QuizView
                vocabList={HSK1_VOCAB}
                onScoreEarned={handleScoreEarned}
              />
            )}
          </div>
        )}
      </main>

      {/* BOTTOM NAVIGATION BAR: CỐ ĐỊNH 100% Ở ĐÁY, KHÔNG BAO GIỜ BỊ CUỘN TRÔI */}
      {!isFullScreenLesson && (
        <nav className="shrink-0 bg-slate-900/98 backdrop-blur border-t border-slate-800/90 px-2 py-2 z-30 shadow-lg">
          <div className="grid grid-cols-5 gap-1">
            <button
              onClick={() => setCurrentTab('roadmap')}
              className={`flex flex-col items-center py-1.5 rounded-2xl transition active:scale-95 ${
                currentTab === 'roadmap'
                  ? 'text-amber-400 font-bold bg-amber-500/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Map className="w-4 h-4 mb-0.5" />
              <span className="text-[10px]">Lộ trình</span>
            </button>

            <button
              onClick={() => setCurrentTab('pinyin')}
              className={`flex flex-col items-center py-1.5 rounded-2xl transition active:scale-95 ${
                currentTab === 'pinyin'
                  ? 'text-red-400 font-bold bg-red-500/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Music className="w-4 h-4 mb-0.5" />
              <span className="text-[10px]">Pinyin</span>
            </button>

            <button
              onClick={() => setCurrentTab('vocab')}
              className={`flex flex-col items-center py-1.5 rounded-2xl transition active:scale-95 ${
                currentTab === 'vocab'
                  ? 'text-blue-400 font-bold bg-blue-500/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4 mb-0.5" />
              <span className="text-[10px]">Từ vựng</span>
            </button>

            <button
              onClick={() => setCurrentTab('write')}
              className={`flex flex-col items-center py-1.5 rounded-2xl transition active:scale-95 ${
                currentTab === 'write'
                  ? 'text-emerald-400 font-bold bg-emerald-500/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <PenTool className="w-4 h-4 mb-0.5" />
              <span className="text-[10px]">Tập viết</span>
            </button>

            <button
              onClick={() => setCurrentTab('quiz')}
              className={`flex flex-col items-center py-1.5 rounded-2xl transition active:scale-95 ${
                currentTab === 'quiz'
                  ? 'text-purple-400 font-bold bg-purple-500/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Award className="w-4 h-4 mb-0.5" />
              <span className="text-[10px]">Ôn tập</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default App;
