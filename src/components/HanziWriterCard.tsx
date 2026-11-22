import React, { useEffect, useRef, useState } from 'react';
import HanziWriter from 'hanzi-writer';
import { Play, RotateCcw, PenTool, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/soundFx';

interface HanziWriterProps {
  character: string;
  pinyin: string;
  hanViet: string;
  meaning: string;
}

export const HanziWriterCard: React.FC<HanziWriterProps> = ({
  character,
  pinyin,
  hanViet,
  meaning
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<any>(null);
  const [mode, setMode] = useState<'view' | 'quiz'>('view');
  const [quizComplete, setQuizComplete] = useState(false);
  const [mistakes, setMistakes] = useState(0);

  // Extract all Chinese characters from string (e.g. "中国" -> ["中", "国"])
  const charList = character.split('').filter((c) => /[\u4e00-\u9fa5]/.test(c));
  const [selectedCharIndex, setSelectedCharIndex] = useState(0);

  // Reset selected char index if word changes
  useEffect(() => {
    setSelectedCharIndex(0);
  }, [character]);

  const activeChar = charList[selectedCharIndex] || charList[0] || character[0] || '你';

  // Initialize or re-create HanziWriter when activeChar changes
  useEffect(() => {
    if (!containerRef.current || !activeChar) return;

    // Clear previous SVG
    containerRef.current.innerHTML = '';
    setQuizComplete(false);
    setMistakes(0);
    setMode('view');

    try {
      writerRef.current = HanziWriter.create(containerRef.current, activeChar, {
        width: 220,
        height: 220,
        padding: 15,
        showOutline: true,
        strokeAnimationSpeed: 1.2,
        delayBetweenStrokes: 180,
        strokeColor: '#ef4444', // Red-500
        radicalColor: '#f59e0b', // Amber-500
        outlineColor: '#334155', // Slate-700
        drawingColor: '#22c55e', // Green-500
        showHintAfterMisses: 2,
        highlightOnComplete: true,
      });

      // Animate character on first load
      writerRef.current.animateCharacter();
    } catch (e) {
      console.error('Error creating HanziWriter:', e);
    }

    return () => {
      if (writerRef.current) {
        writerRef.current.cancelQuiz?.();
      }
    };
  }, [activeChar]);

  const handleAnimate = () => {
    if (!writerRef.current) return;
    setMode('view');
    setQuizComplete(false);
    writerRef.current.animateCharacter();
  };

  const handleStartQuiz = () => {
    if (!writerRef.current) return;
    setMode('quiz');
    setQuizComplete(false);
    setMistakes(0);

    writerRef.current.quiz({
      onMistake: (_strokeData: any) => {
        setMistakes((prev) => prev + 1);
        soundFx.playWrong();
      },
      onComplete: (summary: any) => {
        setQuizComplete(true);
        soundFx.playSuccess();
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    });
  };

  const handleReset = () => {
    if (!writerRef.current) return;
    if (mode === 'quiz') {
      handleStartQuiz();
    } else {
      handleAnimate();
    }
  };

  return (
    <div className="flex flex-col items-center bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-3xl p-5 shadow-2xl w-full max-w-sm mx-auto">
      {/* Header Info */}
      <div className="text-center mb-3">
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl font-bold text-red-400">{pinyin}</span>
          <span className="text-xs bg-red-500/20 text-red-300 font-semibold px-2 py-0.5 rounded-full border border-red-500/30">
            Hán Việt: {hanViet}
          </span>
        </div>
        <p className="text-sm text-slate-300 mt-0.5">{meaning}</p>
      </div>

      {/* Multi-character selector (nếu từ có nhiều hơn 1 chữ Hán như 中国, 谢谢, 再见...) */}
      {charList.length > 1 && (
        <div className="flex items-center justify-center gap-2 mb-3 bg-slate-900/90 px-3 py-1.5 rounded-2xl border border-slate-700">
          <span className="text-[11px] text-slate-400 font-medium">Chọn chữ tập viết:</span>
          <div className="flex gap-1.5">
            {charList.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCharIndex(idx)}
                className={`w-8 h-8 rounded-xl text-base font-chinese font-bold transition active:scale-95 flex items-center justify-center ${
                  selectedCharIndex === idx
                    ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-md shadow-red-500/30 scale-105'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {ch}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid Drawing Canvas Area */}
      <div className="relative p-2 bg-slate-900/90 rounded-2xl border-2 border-slate-700 shadow-inner flex items-center justify-center">
        {/* Mi character grid lines background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#94a3b8" strokeDasharray="4" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#94a3b8" strokeDasharray="4" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#94a3b8" strokeDasharray="4" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#94a3b8" strokeDasharray="4" />
          </svg>
        </div>

        {/* HanziWriter target element */}
        <div ref={containerRef} className="cursor-crosshair relative z-10" />

        {/* Completion Toast Overlay */}
        {quizComplete && (
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center z-20 animate-fade-in p-4 text-center">
            <CheckCircle2 className="w-12 h-12 text-green-400 mb-2 animate-bounce" />
            <h3 className="text-lg font-bold text-white font-chinese">Chữ "{activeChar}" hoàn thành!</h3>
            <p className="text-xs text-slate-300 mt-1">
              {mistakes === 0
                ? 'Tuyệt đỉnh! Viết chuẩn không sai nét nào.'
                : `Rất tốt! Bạn sai ${mistakes} nét.`}
            </p>
            <button
              onClick={handleStartQuiz}
              className="mt-3 px-4 py-1.5 bg-green-600 hover:bg-green-500 text-white rounded-xl text-xs font-bold transition active:scale-95"
            >
              Viết lại
            </button>
          </div>
        )}
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-2.5 mt-4 w-full">
        <button
          onClick={handleAnimate}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl text-xs font-bold transition-all shadow-md active:scale-95 ${
            mode === 'view'
              ? 'bg-red-600 text-white shadow-red-600/30'
              : 'bg-slate-700/80 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Play className="w-4 h-4 fill-current" />
          Xem mẫu
        </button>

        <button
          onClick={handleStartQuiz}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl text-xs font-bold transition-all shadow-md active:scale-95 ${
            mode === 'quiz'
              ? 'bg-amber-600 text-white shadow-amber-600/30'
              : 'bg-slate-700/80 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <PenTool className="w-4 h-4" />
          Tập viết
        </button>

        <button
          onClick={handleReset}
          className="p-2.5 rounded-2xl bg-slate-700/80 hover:bg-slate-700 text-slate-300 transition active:scale-95"
          title="Vẽ lại"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Instructions */}
      <p className="text-[11px] text-slate-400 mt-3 text-center">
        {mode === 'quiz'
          ? '👆 Dùng ngón tay vẽ từng nét theo thứ tự bút thuận'
          : '👀 Quan sát thứ tự các nét bút thuận và hướng vẽ'}
      </p>
    </div>
  );
};
