import React, { useState } from 'react';
import { VocabWord } from '../data/hsk1';
import { Search, X, Volume2, CheckCircle, BookOpen } from 'lucide-react';
import { speakChinese } from '../utils/speech';

interface VocabDictionaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  vocabList: VocabWord[];
  masteredIds: number[];
  currentHskLevel: string;
  onSelectWord: (wordIndex: number) => void;
}

export const VocabDictionaryModal: React.FC<VocabDictionaryModalProps> = ({
  isOpen,
  onClose,
  vocabList,
  masteredIds,
  currentHskLevel,
  onSelectWord
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'unmastered' | 'mastered'>('all');

  if (!isOpen) return null;

  const filteredWords = vocabList.filter((word) => {
    const q = searchQuery.trim().toLowerCase();
    const matchSearch =
      !q ||
      word.hanzi.toLowerCase().includes(q) ||
      word.pinyin.toLowerCase().includes(q) ||
      word.meaning.toLowerCase().includes(q) ||
      word.hanViet.toLowerCase().includes(q);

    const isMastered = masteredIds.includes(word.id);
    if (filterType === 'mastered') return matchSearch && isMastered;
    if (filterType === 'unmastered') return matchSearch && !isMastered;
    return matchSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Từ điển {currentHskLevel}</h3>
              <p className="text-[11px] text-slate-400">Tra cứu nhanh toàn bộ kho từ vựng</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search bar */}
        <div className="p-3 border-b border-slate-800 space-y-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo chữ Hán, Pinyin, Hán-Việt, Nghĩa..."
              className="w-full bg-slate-950 border border-slate-700/80 rounded-2xl pl-9 pr-8 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs p-1"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 text-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded-xl transition ${
                filterType === 'all'
                  ? 'bg-red-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Tất cả ({vocabList.length})
            </button>
            <button
              onClick={() => setFilterType('unmastered')}
              className={`px-3 py-1 rounded-xl transition ${
                filterType === 'unmastered'
                  ? 'bg-amber-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Đang học ({vocabList.length - masteredIds.filter((id) => vocabList.some((w) => w.id === id)).length})
            </button>
            <button
              onClick={() => setFilterType('mastered')}
              className={`px-3 py-1 rounded-xl transition ${
                filterType === 'mastered'
                  ? 'bg-emerald-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Đã thuộc ({masteredIds.filter((id) => vocabList.some((w) => w.id === id)).length})
            </button>
          </div>
        </div>

        {/* Word list */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {filteredWords.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              Không tìm thấy từ vựng nào khớp với từ khóa "{searchQuery}"
            </div>
          ) : (
            filteredWords.map((word) => {
              const originalIndex = vocabList.findIndex((w) => w.id === word.id);
              const isMastered = masteredIds.includes(word.id);

              return (
                <div
                  key={word.id}
                  onClick={() => {
                    onSelectWord(originalIndex);
                    onClose();
                  }}
                  className="bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800/80 rounded-2xl p-3 flex items-center justify-between cursor-pointer transition active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-chinese font-bold text-white min-w-[48px]">
                      {word.hanzi}
                    </span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-mono font-bold text-amber-300">
                          {word.pinyin}
                        </span>
                        <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.2 rounded-md">
                          HV: {word.hanViet}
                        </span>
                        {isMastered && (
                          <span className="flex items-center gap-0.5 text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.2 rounded-md border border-emerald-800/40">
                            <CheckCircle className="w-2.5 h-2.5" /> Đã thuộc
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                        {word.meaning}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakChinese(word.hanzi);
                    }}
                    className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                  >
                    <Volume2 className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
