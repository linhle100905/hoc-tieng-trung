import React, { useEffect, useRef, useState } from 'react';
import HanziWriter from 'hanzi-writer';
import { Play, RotateCcw, PenTool, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

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

  // Initialize or re-create HanziWriter when character changes
  useEffect(() => {
    if (!containerRef.current || !character) return;

    // Clear previous SVG
    containerRef.current.innerHTML = '';
    setQuizComplete(false);
    setMistakes(0);
    setMode('view');

    // Only render the first character if it's a compound word
    const singleChar = character[0];

    try {
      writerRef.current = HanziWriter.create(containerRef.current, singleChar, {
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
  }, [character]);

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
      },
      onComplete: (summary: any) => {
        setQuizComplete(true);
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
    <div className="flex flex-col items-center bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-3xl p-5 shadow-2xl">
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
            <h4 className="text-lg font-bold text-white">Viết rất đẹp!</h4>
            <p className="text-xs text-slate-300 mt-1">
              {mistakes === 0 ? 'Xuất sắc! Đúng 100% nét bút thuận.' : `Hoàn thành với ${mistakes} lần sửa nét.`}
            </p>
            <button
              onClick={handleStartQuiz}
              className="mt-3 px-4 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xs font-semibold shadow-lg shadow-green-500/30 transition active:scale-95"
            >
              Tập viết lại
            </button>
          </div>
        )}
      </div>

      {/* Helper instruction */}
      <p className="text-xs text-slate-400 mt-3 flex items-center gap-1.5">
        {mode === 'view' ? (
          <>
            <span className="w-2 h-2 rounded-full bg-red-400 animate-ping inline-block" />
            Đang hiển thị mẫu thứ tự nét chuẩn
          </>
        ) : (
          <>
            <PenTool className="w-3.5 h-3.5 text-green-400" />
            Dùng ngón tay / chuột tô theo chữ trên ô
          </>
        )}
      </p>

      {/* Interactive Control Buttons */}
      <div className="grid grid-cols-3 gap-2 w-full mt-4">
        <button
          onClick={handleAnimate}
          className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-medium text-xs transition active:scale-95 ${
            mode === 'view'
              ? 'bg-red-500/20 text-red-300 border border-red-500/40'
              : 'bg-slate-700/60 hover:bg-slate-700 text-slate-300'
          }`}
        >
          <Play className="w-3.5 h-3.5" />
          Xem nét
        </button>

        <button
          onClick={handleStartQuiz}
          className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-medium text-xs transition active:scale-95 ${
            mode === 'quiz'
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/30 font-bold'
              : 'bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/40'
          }`}
        >
          <PenTool className="w-3.5 h-3.5" />
          Tự viết
        </button>

        <button
          onClick={handleReset}
          className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-700/60 hover:bg-slate-700 text-slate-300 rounded-xl font-medium text-xs transition active:scale-95"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Làm lại
        </button>
      </div>
    </div>
  );
};
