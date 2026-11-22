import React, { useState, useEffect } from 'react';
import { PINYIN_INITIALS, PINYIN_FINALS, PINYIN_TONES } from '../data/pinyinData';
import { Volume2, Music, Sparkles, Headphones, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { speakChinese } from '../utils/speech';
import { soundFx } from '../utils/soundFx';
import confetti from 'canvas-confetti';

interface ToneQuestion {
  soundTarget: string;
  pinyinDisplay: string;
  correctTone: 1 | 2 | 3 | 4;
  meaning: string;
}

const TONE_QUESTIONS: ToneQuestion[] = [
  { soundTarget: '妈', pinyinDisplay: 'mā', correctTone: 1, meaning: 'Mẹ' },
  { soundTarget: '麻', pinyinDisplay: 'má', correctTone: 2, meaning: 'Vừng, cây gai' },
  { soundTarget: '马', pinyinDisplay: 'mǎ', correctTone: 3, meaning: 'Con ngựa' },
  { soundTarget: '骂', pinyinDisplay: 'mà', correctTone: 4, meaning: 'Mắng mỏ' },
  { soundTarget: '八', pinyinDisplay: 'bā', correctTone: 1, meaning: 'Số 8' },
  { soundTarget: '拔', pinyinDisplay: 'bá', correctTone: 2, meaning: 'Nhổ, rút' },
  { soundTarget: '把', pinyinDisplay: 'bǎ', correctTone: 3, meaning: 'Cái, nắm' },
  { soundTarget: '爸', pinyinDisplay: 'bà', correctTone: 4, meaning: 'Bố, ba' },
  { soundTarget: '他', pinyinDisplay: 'tā', correctTone: 1, meaning: 'Anh ấy' },
  { soundTarget: '塔', pinyinDisplay: 'tǎ', correctTone: 3, meaning: 'Ngọn tháp' },
  { soundTarget: '太', pinyinDisplay: 'tài', correctTone: 4, meaning: 'Quá, cực kỳ' },
  { soundTarget: '大', pinyinDisplay: 'dà', correctTone: 4, meaning: 'To lớn' },
  { soundTarget: '高', pinyinDisplay: 'gāo', correctTone: 1, meaning: 'Cao' },
  { soundTarget: '好', pinyinDisplay: 'hǎo', correctTone: 3, meaning: 'Tốt, đẹp' },
  { soundTarget: '号', pinyinDisplay: 'hào', correctTone: 4, meaning: 'Số, ngày' },
  { soundTarget: '冷', pinyinDisplay: 'lěng', correctTone: 3, meaning: 'Lạnh' },
  { soundTarget: '十', pinyinDisplay: 'shí', correctTone: 2, meaning: 'Số 10' },
  { soundTarget: '四', pinyinDisplay: 'sì', correctTone: 4, meaning: 'Số 4' },
  { soundTarget: '看', pinyinDisplay: 'kàn', correctTone: 4, meaning: 'Nhìn, xem' },
  { soundTarget: '中', pinyinDisplay: 'zhōng', correctTone: 1, meaning: 'Trung' }
];

export const PinyinChartView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'initials' | 'finals' | 'tones' | 'quiz'>('initials');
  const [playingItem, setPlayingItem] = useState<string | null>(null);

  // Tone Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedTone, setSelectedTone] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);

  const currentQ = TONE_QUESTIONS[currentQuestionIndex];

  const handlePlaySound = async (text: string) => {
    setPlayingItem(text);
    await speakChinese(text, 0.8);
    setPlayingItem(null);
  };

  const handleNextQuestion = () => {
    setSelectedTone(null);
    const nextIdx = (currentQuestionIndex + 1) % TONE_QUESTIONS.length;
    setCurrentQuestionIndex(nextIdx);
    speakChinese(TONE_QUESTIONS[nextIdx].soundTarget, 0.8);
  };

  const handleSelectTone = (tone: 1 | 2 | 3 | 4) => {
    if (selectedTone !== null) return;
    setSelectedTone(tone);

    if (tone === currentQ.correctTone) {
      setQuizScore((prev) => prev + 10);
      soundFx.playSuccess();
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
    } else {
      soundFx.playWrong();
    }
  };

  return (
    <div className="flex flex-col h-full py-2">
      {/* Title */}
      <div className="text-center mb-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
          Nền móng phát âm
        </span>
        <h2 className="text-xl font-bold text-white mt-1.5 flex items-center justify-center gap-1.5">
          <Music className="w-5 h-5 text-red-400" /> Bảng Ngữ Âm Pinyin
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">Chạm vào bất kỳ âm nào để nghe người bản xứ đọc mẫu</p>
      </div>

      {/* Mode Tabs: 4 Tabs */}
      <div className="grid grid-cols-4 gap-1 p-1 bg-slate-900 border border-slate-800 rounded-2xl mb-3.5">
        <button
          onClick={() => setActiveTab('initials')}
          className={`py-2 rounded-xl text-[11px] font-bold transition active:scale-95 ${
            activeTab === 'initials'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Thanh mẫu
        </button>

        <button
          onClick={() => setActiveTab('finals')}
          className={`py-2 rounded-xl text-[11px] font-bold transition active:scale-95 ${
            activeTab === 'finals'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Vận mẫu
        </button>

        <button
          onClick={() => setActiveTab('tones')}
          className={`py-2 rounded-xl text-[11px] font-bold transition active:scale-95 ${
            activeTab === 'tones'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          4 Thanh điệu
        </button>

        <button
          onClick={() => {
            setActiveTab('quiz');
            speakChinese(currentQ.soundTarget, 0.8);
          }}
          className={`py-2 rounded-xl text-[11px] font-bold transition active:scale-95 flex items-center justify-center gap-1 ${
            activeTab === 'quiz'
              ? 'bg-gradient-to-r from-amber-600 to-red-600 text-white shadow-md'
              : 'text-amber-400 hover:text-white'
          }`}
        >
          <Headphones className="w-3.5 h-3.5" /> Luyện tai
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {/* 1. INITIALS (THANH MẪU) */}
        {activeTab === 'initials' && (
          <div className="space-y-4">
            {PINYIN_INITIALS.map((group, gIdx) => (
              <div key={gIdx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5">
                <div className="mb-2.5">
                  <h4 className="text-xs font-bold text-amber-300">{group.title}</h4>
                  <p className="text-[11px] text-slate-400">{group.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {group.items.map((item, idx) => {
                    const isPlaying = playingItem === item.pinyin;
                    return (
                      <div
                        key={idx}
                        onClick={() => handlePlaySound(item.pinyin)}
                        className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-xl p-2.5 cursor-pointer transition active:scale-[0.98] flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-mono font-bold text-red-400">
                            {item.pinyin}
                          </span>
                          <button className="p-1 rounded-full bg-slate-700 text-slate-300">
                            <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-bounce text-red-400' : ''}`} />
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                          {item.vietnameseGuide}
                        </p>
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlaySound(item.exampleWord);
                          }}
                          className="mt-1.5 pt-1 border-t border-slate-700/50 flex items-center justify-between text-[10px] hover:text-amber-300"
                        >
                          <span className="font-chinese text-amber-200">{item.exampleWord}</span>
                          <span className="text-slate-400">{item.exampleMeaning}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. FINALS (VẬN MẪU) */}
        {activeTab === 'finals' && (
          <div className="space-y-4">
            {PINYIN_FINALS.map((group, gIdx) => (
              <div key={gIdx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5">
                <div className="mb-2.5">
                  <h4 className="text-xs font-bold text-emerald-300">{group.title}</h4>
                  <p className="text-[11px] text-slate-400">{group.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {group.items.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => handlePlaySound(item.pinyin)}
                      className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-xl p-2.5 cursor-pointer transition active:scale-[0.98] flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-mono font-bold text-emerald-400">
                          {item.pinyin}
                        </span>
                        <button className="p-1 rounded-full bg-slate-700 text-slate-300">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                        {item.vietnameseGuide}
                      </p>
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlaySound(item.exampleWord);
                        }}
                        className="mt-1.5 pt-1 border-t border-slate-700/50 flex items-center justify-between text-[10px] hover:text-amber-300"
                      >
                        <span className="font-chinese text-amber-200">{item.exampleWord}</span>
                        <span className="text-slate-400">{item.exampleMeaning}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. TONES (4 THANH ĐIỆU) */}
        {activeTab === 'tones' && (
          <div className="space-y-3">
            <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-2xl text-xs text-amber-200 leading-relaxed">
              💡 <strong>Bí quyết thanh điệu:</strong> Tiếng Trung có 4 thanh điệu chính. Cùng một âm `ma`, nếu đổi thanh điệu sẽ biến thành 4 nghĩa hoàn toàn khác nhau: <strong>Mẹ (mā), Vừng (má), Con ngựa (mǎ), Mắng mỏ (mà)</strong>!
            </div>

            {PINYIN_TONES.map((tone) => (
              <div
                key={tone.toneNumber}
                onClick={() => handlePlaySound((tone as any).soundHanzi || tone.example)}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 cursor-pointer transition active:scale-[0.98]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-red-600/20 border border-red-500/40 text-red-400 flex items-center justify-center font-bold font-mono text-xl">
                      {tone.mark}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">{tone.name}</h4>
                      <p className="text-[11px] text-slate-400 font-mono">Đường biểu diễn: {tone.symbol} • Cao độ: {tone.pitch}</p>
                    </div>
                  </div>
                  <button className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white">
                    <Volume2 className="w-4 h-4 text-red-400" />
                  </button>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                  {tone.guide}
                </p>

                <div className="mt-2.5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Ví dụ minh họa:</span>
                  <span className="font-bold text-amber-300 font-chinese">{tone.example}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. TONE QUIZ (LUYỆN TAI NGHE PHÂN BIỆT 4 THANH ĐIỆU) */}
        {activeTab === 'quiz' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 text-center shadow-xl space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                Câu {currentQuestionIndex + 1}/{TONE_QUESTIONS.length}
              </span>
              <span className="text-xs font-bold text-emerald-400">
                Điểm: +{quizScore} XP
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">Bạn đang nghe thanh điệu số mấy?</h3>
              <p className="text-xs text-slate-400 mt-1">Lắng nghe thật kỹ cao độ và hướng đi của âm thanh</p>
            </div>

            {/* Big Audio Play Button */}
            <div className="py-2">
              <button
                onClick={() => speakChinese(currentQ.soundTarget, 0.8)}
                className="w-20 h-20 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white shadow-xl shadow-red-600/30 flex items-center justify-center mx-auto transition active:scale-95"
              >
                <Volume2 className="w-10 h-10 animate-pulse" />
              </button>
              <p className="text-[11px] text-slate-400 mt-2">Chạm vào loa để nghe lại âm thanh</p>
            </div>

            {/* 4 Tone Buttons */}
            <div className="grid grid-cols-2 gap-2.5 text-left">
              {[
                { num: 1, name: 'Thanh 1 (—)', desc: 'Cao & phẳng (55)' },
                { num: 2, name: 'Thanh 2 (／)', desc: 'Đi lên cao (35)' },
                { num: 3, name: 'Thanh 3 (∨)', desc: 'Trầm & lượn sóng (214)' },
                { num: 4, name: 'Thanh 4 (＼)', desc: 'Rơi dứt khoát (51)' }
              ].map((btn) => {
                const isSelected = selectedTone === btn.num;
                const isCorrect = currentQ.correctTone === btn.num;

                let btnStyle = 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800';
                if (selectedTone !== null) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/90 border-emerald-500 text-emerald-300 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-950/90 border-rose-500 text-rose-300';
                  } else {
                    btnStyle = 'opacity-40 bg-slate-900 border-slate-800 text-slate-500';
                  }
                }

                return (
                  <button
                    key={btn.num}
                    onClick={() => handleSelectTone(btn.num as any)}
                    disabled={selectedTone !== null}
                    className={`p-3 rounded-2xl border transition active:scale-95 flex flex-col justify-between ${btnStyle}`}
                  >
                    <span className="text-sm font-bold">{btn.name}</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">{btn.desc}</span>
                  </button>
                );
              })}
            </div>

            {/* Result feedback & Next Button */}
            {selectedTone !== null && (
              <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 text-center animate-fade-in space-y-2">
                <div className="flex items-center justify-center gap-1.5">
                  {selectedTone === currentQ.correctTone ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-bold text-emerald-400">Chính xác tuyệt đối!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-400" />
                      <span className="text-sm font-bold text-rose-400">
                        Chưa đúng! Đáp án là Thanh {currentQ.correctTone}
                      </span>
                    </>
                  )}
                </div>

                <div className="text-xs text-slate-300">
                  Âm vừa phát là: <strong className="text-amber-300 font-mono text-sm">{currentQ.pinyinDisplay}</strong> ({currentQ.soundTarget}) nghĩa là <em>"{currentQ.meaning}"</em>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="w-full py-2.5 bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold rounded-xl text-xs shadow-lg transition active:scale-95"
                >
                  Câu tiếp theo ➜
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
