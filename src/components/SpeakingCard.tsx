import React, { useState } from 'react';
import { Mic, MicOff, Volume2, Sparkles, AlertCircle } from 'lucide-react';
import { speakChinese, ChineseSpeechRecognizer, isSpeechRecognitionSupported } from '../utils/speech';
import confetti from 'canvas-confetti';
import { VocabWord } from '../data/hsk1';

interface SpeakingCardProps {
  word: VocabWord;
  onSuccess?: () => void;
}

export const SpeakingCard: React.FC<SpeakingCardProps> = ({ word, onSuccess }) => {
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'retry' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const supported = isSpeechRecognitionSupported();

  const handlePlayAudio = async (text: string, rate: number = 0.85) => {
    setIsPlayingAudio(true);
    await speakChinese(text, rate);
    setIsPlayingAudio(false);
  };

  const handleStartSpeaking = () => {
    if (!supported) {
      setErrorMessage('Trình duyệt chưa bật quyền Micro hoặc cần mở trên Safari/Chrome.');
      setStatus('error');
      return;
    }

    setStatus('idle');
    setSpokenText('');
    setErrorMessage('');
    setIsListening(true);

    const recognizer = new ChineseSpeechRecognizer(
      (resultText, isFinal) => {
        setSpokenText(resultText);
        if (isFinal) {
          setIsListening(false);
          evaluateSpeech(resultText);
        }
      },
      (error) => {
        setIsListening(false);
        setErrorMessage(`Lỗi: ${error}`);
        setStatus('error');
      },
      () => {
        setIsListening(false);
      }
    );

    recognizer.start();
  };

  const evaluateSpeech = (recognized: string) => {
    const cleanRecognized = recognized.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?!，。！？]/g, '').trim();
    const cleanTarget = word.hanzi.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?!，。！？]/g, '').trim();

    if (cleanRecognized.includes(cleanTarget) || cleanTarget.includes(cleanRecognized)) {
      setStatus('success');
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
      onSuccess?.();
    } else {
      setStatus('retry');
    }
  };

  return (
    <div className="flex flex-col items-center bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-3xl p-6 shadow-2xl text-center">
      {/* Target Word Display */}
      <div className="mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
          Luyện Phát Âm
        </span>
      </div>

      <h2 className="text-6xl font-chinese font-bold text-white mt-2 mb-1 tracking-wider">
        {word.hanzi}
      </h2>

      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-2xl font-bold text-red-400">{word.pinyin}</span>
        <button
          onClick={() => handlePlayAudio(word.hanzi, 0.8)}
          disabled={isPlayingAudio}
          className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 transition active:scale-95"
          title="Nghe mẫu"
        >
          <Volume2 className={`w-5 h-5 ${isPlayingAudio ? 'animate-pulse text-red-300' : ''}`} />
        </button>
      </div>

      <div className="bg-slate-900/60 rounded-2xl p-3 border border-slate-700/50 w-full max-w-xs mb-6">
        <p className="text-xs text-slate-400">Âm Hán Việt: <span className="text-slate-200 font-semibold">{word.hanViet}</span></p>
        <p className="text-sm text-slate-200 font-medium mt-0.5">{word.meaning}</p>
        {word.exampleHanzi && (
          <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-left">
            <div>
              <p className="text-xs text-red-300 font-chinese">{word.exampleHanzi}</p>
              <p className="text-[11px] text-slate-400">{word.exampleMeaning}</p>
            </div>
            <button
              onClick={() => handlePlayAudio(word.exampleHanzi, 0.85)}
              className="p-1.5 text-slate-400 hover:text-white"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Mic Button & Status */}
      <div className="flex flex-col items-center">
        <button
          onClick={handleStartSpeaking}
          disabled={isListening}
          className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl active:scale-95 ${
            isListening
              ? 'bg-red-500 text-white shadow-red-500/50 scale-105'
              : status === 'success'
              ? 'bg-green-500 text-white shadow-green-500/40'
              : 'bg-gradient-to-tr from-red-600 to-amber-500 text-white shadow-red-600/30 hover:scale-105'
          }`}
        >
          {isListening ? (
            <>
              <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
              <Mic className="w-9 h-9 relative z-10 animate-pulse" />
            </>
          ) : (
            <Mic className="w-9 h-9" />
          )}
        </button>

        <p className="text-xs text-slate-300 mt-3 font-medium">
          {isListening
            ? 'Đang lắng nghe bạn nói tiếng Trung...'
            : 'Bấm micro và đọc to chữ trên'}
        </p>
      </div>

      {/* Recognition Results */}
      {spokenText && (
        <div className="mt-4 p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 w-full max-w-xs animate-fade-in">
          <p className="text-xs text-slate-400">Máy vừa nghe được:</p>
          <p className="text-xl font-chinese font-bold text-white mt-0.5">"{spokenText}"</p>
        </div>
      )}

      {/* Status Feedback Alerts */}
      {status === 'success' && (
        <div className="mt-4 flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-xl text-xs font-semibold animate-bounce">
          <Sparkles className="w-4 h-4 text-green-400" />
          Phát âm chuẩn tuyệt vời! +10 Điểm
        </div>
      )}

      {status === 'retry' && (
        <div className="mt-4 text-amber-300 bg-amber-500/10 border border-amber-500/30 px-4 py-2.5 rounded-xl text-xs text-left w-full max-w-xs">
          <p className="font-semibold">Chưa khớp với từ mẫu!</p>
          <p className="text-[11px] text-slate-300 mt-0.5">
            Gợi ý: Bấm nút loa để nghe lại mẫu thanh điệu rồi bấm micro thử lại nhé.
          </p>
        </div>
      )}

      {status === 'error' && errorMessage && (
        <div className="mt-4 flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/30 px-3 py-2 rounded-xl text-xs text-left max-w-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
