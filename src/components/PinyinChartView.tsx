import React, { useState } from 'react';
import { PINYIN_INITIALS, PINYIN_FINALS, PINYIN_TONES } from '../data/pinyinData';
import { Volume2, Music, Sparkles } from 'lucide-react';
import { speakChinese } from '../utils/speech';

export const PinyinChartView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'initials' | 'finals' | 'tones'>('initials');
  const [playingItem, setPlayingItem] = useState<string | null>(null);

  const handlePlaySound = async (text: string) => {
    setPlayingItem(text);
    await speakChinese(text, 0.8);
    setPlayingItem(null);
  };

  return (
    <div className="flex flex-col h-full py-2">
      {/* Title */}
      <div className="text-center mb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
          Nền móng phát âm
        </span>
        <h2 className="text-xl font-bold text-white mt-1.5 flex items-center justify-center gap-1.5">
          <Music className="w-5 h-5 text-red-400" /> Bảng Ngữ Âm Pinyin
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">Chạm vào bất kỳ âm nào để nghe người bản xứ đọc mẫu</p>
      </div>

      {/* Mode Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-2xl mb-4">
        <button
          onClick={() => setActiveTab('initials')}
          className={`py-2 rounded-xl text-xs font-bold transition active:scale-95 ${
            activeTab === 'initials'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Thanh mẫu (Phụ âm)
        </button>

        <button
          onClick={() => setActiveTab('finals')}
          className={`py-2 rounded-xl text-xs font-bold transition active:scale-95 ${
            activeTab === 'finals'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Vận mẫu (Nguyên âm)
        </button>

        <button
          onClick={() => setActiveTab('tones')}
          className={`py-2 rounded-xl text-xs font-bold transition active:scale-95 ${
            activeTab === 'tones'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          4 Thanh điệu
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
      </div>
    </div>
  );
};
