// Utility for Native Chinese Speech Synthesis and Recognition

// Mapping pure Pinyin letters to their standard Chinese phonetic Hanzi characters
// In Chinese phonetic pedagogy, initials are taught with carrier vowels (b -> 玻 bō, zh -> 知 zhī, etc.)
// Passing Hanzi ensures the browser/iOS Safari never mistakes Latin letters for English!
const PINYIN_TO_HANZI_MAP: Record<string, string> = {
  // Thanh mẫu (Initials) - Standard Chinese carrier characters
  'b': '玻',   // bō
  'p': '坡',   // pō
  'm': '摸',   // mō
  'f': '佛',   // fó
  'd': '得',   // dé
  't': '特',   // tè
  'n': '讷',   // nè
  'l': '勒',   // lè
  'g': '哥',   // gē
  'k': '科',   // kē
  'h': '喝',   // hē
  'j': '基',   // jī
  'q': '七',   // qī
  'x': '西',   // xī
  'zh': '知',  // zhī
  'ch': '吃',  // chī
  'sh': '诗',  // shī
  'r': '日',   // rì
  'z': '资',   // zī
  'c': '疵',   // cī
  's': '思',   // sī
  'y': '衣',   // yī
  'w': '乌',   // wū

  // Vận mẫu đơn (Single Finals)
  'a': '啊',   // ā
  'o': '喔',   // ō
  'e': '鹅',   // é
  'i': '衣',   // yī
  'u': '乌',   // wū
  'ü': '迂',   // yū
  'v': '迂',   // yū

  // Vận mẫu kép (Compound Finals)
  'ai': '爱',  // ài
  'ei': '诶',  // ēi
  'ao': '奥',  // ào
  'ou': '欧',  // ōu
  'ia': '鸭',  // yā
  'ie': '椰',  // yē
  'iao': '腰', // yāo
  'iu': '优',  // yōu
  'ua': '蛙',  // wā
  'uo': '窝',  // wō
  'uai': '歪', // wāi
  'ui': '微',  // wēi
  'üe': '月',  // yuè
  've': '月',  // yuè

  // Vận mẫu mũi (Nasal Finals)
  'an': '安',  // ān
  'en': '恩',  // ēn
  'in': '因',  // yīn
  'un': '温',  // wēn
  'ün': '晕',  // yūn
  'vn': '晕',  // yūn
  'ian': '烟', // yān
  'uan': '弯', // wān
  'üan': '冤', // yuān
  'van': '冤', // yuān
  'ang': '昂', // áng
  'eng': '鞥', // ēng
  'ing': '英', // yīng
  'ong': '翁', // wēng
  'iang': '央',// yāng
  'iong': '雍',// yōng
  'uang': '汪',// wāng
  'ueng': '翁',// wēng
  'er': '二',  // èr

  // Thanh điệu (Tones on standard carriers)
  'ā': '啊',
  'á': '啊',
  'ǎ': '啊',
  'à': '啊',
  'mā': '妈',
  'má': '麻',
  'mǎ': '马',
  'mà': '骂'
};

// Cached voices for browsers (iOS / Chrome / Safari)
let cachedVoices: SpeechSynthesisVoice[] = [];

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  cachedVoices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

export const speakChinese = (text: string, rate: number = 0.85): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('Trình duyệt không hỗ trợ Web Speech Synthesis');
      resolve();
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // 1. If text contains Chinese characters (Hanzi), extract ONLY the Chinese characters
    // This avoids iOS reading brackets, hyphens or Vietnamese text as English/gibberish
    const hanziMatches = text.match(/[\u4e00-\u9fa5]+/g);
    let speechText = text.trim();

    if (hanziMatches && hanziMatches.length > 0) {
      speechText = hanziMatches.join('');
    } else {
      // 2. If it's a pure Latin Pinyin symbol (e.g. "b", "zh", "ai", "ang"), map to authentic phonetic Hanzi
      const cleanKey = speechText.toLowerCase();
      speechText = PINYIN_TO_HANZI_MAP[cleanKey] || speechText;
    }

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = 'zh-CN';
    utterance.rate = rate;

    // Force Chinese Voice on iOS Safari / macOS / Android / Windows
    const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
    const zhVoice =
      voices.find(v => v.lang === 'zh-CN' || v.lang === 'cmn-Hans-CN' || v.lang === 'zh_CN') ||
      voices.find(v => v.lang.toLowerCase().startsWith('zh')) ||
      voices.find(v => v.name.toLowerCase().includes('chinese') || v.name.toLowerCase().includes('mandarin'));

    if (zhVoice) {
      utterance.voice = zhVoice;
    }

    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();

    window.speechSynthesis.speak(utterance);
  });
};

// Check if browser/device supports Speech Recognition (Luyện nói)
export const isSpeechRecognitionSupported = (): boolean => {
  return typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
};

// Speech Recognition helper
export class ChineseSpeechRecognizer {
  private recognition: any = null;

  constructor(
    private onResult: (text: string, isFinal: boolean) => void,
    private onError: (error: string) => void,
    private onEnd: () => void
  ) {
    if (isSpeechRecognitionSupported()) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'zh-CN';
      this.recognition.continuous = false;
      this.recognition.interimResults = true;

      this.recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        const transcript = finalTranscript || interimTranscript;
        this.onResult(transcript.trim(), !!finalTranscript);
      };

      this.recognition.onerror = (event: any) => {
        this.onError(event.error || 'Lỗi nhận diện âm thanh');
      };

      this.recognition.onend = () => {
        this.onEnd();
      };
    }
  }

  public start() {
    if (this.recognition) {
      try {
        this.recognition.start();
      } catch (e) {
        console.warn('Speech recognition already started or error', e);
      }
    } else {
      this.onError('Trình duyệt chưa bật quyền Micro hoặc chưa hỗ trợ');
    }
  }

  public stop() {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
    }
  }
}
