export interface PinyinItem {
  pinyin: string;
  vietnameseGuide: string; // Hướng dẫn phát âm cho người Việt
  exampleWord: string;
  exampleMeaning: string;
}

export interface PinyinCategory {
  title: string;
  description: string;
  items: PinyinItem[];
}

export const PINYIN_INITIALS: PinyinCategory[] = [
  {
    title: "Âm môi (B, P, M, F)",
    description: "Phát âm bằng hai môi khép mở",
    items: [
      { pinyin: "b", vietnameseGuide: "Đọc như 'p' trong tiếng Việt (không bật hơi)", exampleWord: "爸爸 (bàba)", exampleMeaning: "Bố, ba" },
      { pinyin: "p", vietnameseGuide: "Bật hơi mạnh hai môi, đẩy luồng khí ra", exampleWord: "苹果 (píngguǒ)", exampleMeaning: "Quả táo" },
      { pinyin: "m", vietnameseGuide: "Đọc giống âm 'm' tiếng Việt", exampleWord: "妈妈 (māma)", exampleMeaning: "Mẹ" },
      { pinyin: "f", vietnameseGuide: "Răng trên chạm môi dưới, giống 'ph' tiếng Việt", exampleWord: "服务员 (fúwùyuán)", exampleMeaning: "Phục vụ" }
    ]
  },
  {
    title: "Âm đầu lưỡi (D, T, N, L)",
    description: "Đầu lưỡi chạm lợi trên",
    items: [
      { pinyin: "d", vietnameseGuide: "Đọc như âm 't' trong tiếng Việt (không bật hơi)", exampleWord: "大 (dà)", exampleMeaning: "To lớn" },
      { pinyin: "t", vietnameseGuide: "Đọc như âm 'th' tiếng Việt (bật hơi dứt khoát)", exampleWord: "太 (tài)", exampleMeaning: "Quá, cực kỳ" },
      { pinyin: "n", vietnameseGuide: "Đọc giống 'n' tiếng Việt", exampleWord: "你 (nǐ)", exampleMeaning: "Bạn" },
      { pinyin: "l", vietnameseGuide: "Đọc giống 'l' tiếng Việt", exampleWord: "老师 (lǎoshī)", exampleMeaning: "Thầy cô giáo" }
    ]
  },
  {
    title: "Âm cuống lưỡi (G, K, H)",
    description: "Gốc lưỡi nâng lên chạm vòm họng mềm",
    items: [
      { pinyin: "g", vietnameseGuide: "Đọc như âm 'c' hoặc 'k' trong tiếng Việt", exampleWord: "高兴 (gāoxìng)", exampleMeaning: "Vui vẻ" },
      { pinyin: "k", vietnameseGuide: "Bật hơi mạnh từ cổ họng (giống âm 'kh')", exampleWord: "客气 (kèqi)", exampleMeaning: "Khách sáo" },
      { pinyin: "h", vietnameseGuide: "Đọc nhẹ nằm giữa 'h' và 'kh'", exampleWord: "好 (hǎo)", exampleMeaning: "Tốt, khỏe" }
    ]
  },
  {
    title: "Âm mặt lưỡi (J, Q, X) - Âm khó",
    description: "Mặt lưỡi áp sát ngạc cứng, mở miệng mỉm cười",
    items: [
      { pinyin: "j", vietnameseGuide: "Đọc như 'ch' trong tiếng Việt (không bật hơi)", exampleWord: "叫 (jiào)", exampleMeaning: "Tên là" },
      { pinyin: "q", vietnameseGuide: "Đọc như 'ch' nhưng bật hơi cực mạnh xì gió", exampleWord: "钱 (qián)", exampleMeaning: "Tiền bạc" },
      { pinyin: "x", vietnameseGuide: "Đọc như âm 'x' nhẹ trong tiếng Việt", exampleWord: "谢谢 (xièxie)", exampleMeaning: "Cảm ơn" }
    ]
  },
  {
    title: "Âm uốn lưỡi (ZH, CH, SH, R) - Đặc sản Bắc Kinh",
    description: "Đầu lưỡi cong lên chạm ngạc cứng",
    items: [
      { pinyin: "zh", vietnameseGuide: "Uốn lưỡi cong lên đọc như 'tr' (không bật hơi)", exampleWord: "中国 (Zhōngguó)", exampleMeaning: "Trung Quốc" },
      { pinyin: "ch", vietnameseGuide: "Uốn cong lưỡi và bật hơi thật mạnh luồng khí ra", exampleWord: "吃 (chī)", exampleMeaning: "Ăn" },
      { pinyin: "sh", vietnameseGuide: "Uốn cong lưỡi đọc như 's' mạnh (sao/sông)", exampleWord: "是 (shì)", exampleMeaning: "Là, phải" },
      { pinyin: "r", vietnameseGuide: "Uốn lưỡi rung nhẹ, gần giống 'r' tiếng Việt", exampleWord: "人 (rén)", exampleMeaning: "Con người" }
    ]
  },
  {
    title: "Âm đầu lưỡi trước (Z, C, S)",
    description: "Đầu lưỡi áp mặt trong răng cửa trên",
    items: [
      { pinyin: "z", vietnameseGuide: "Đọc như 'ch' dẹp môi, không bật hơi", exampleWord: "再见 (zàijiàn)", exampleMeaning: "Tạm biệt" },
      { pinyin: "c", vietnameseGuide: "Đầu lưỡi chạm răng và bật xì hơi mạnh", exampleWord: "菜 (cài)", exampleMeaning: "Món ăn" },
      { pinyin: "s", vietnameseGuide: "Răng khép nhẹ đọc xì như 'x' tiếng Việt", exampleWord: "四 (sì)", exampleMeaning: "Số 4" }
    ]
  }
];

export const PINYIN_FINALS: PinyinCategory[] = [
  {
    title: "Vận mẫu đơn cốt lõi (Nguyên âm)",
    description: "6 nguyên âm nền tảng của mọi chữ Hán",
    items: [
      { pinyin: "a", vietnameseGuide: "Mở rộng miệng đọc như 'a'", exampleWord: "大 (dà)", exampleMeaning: "To lớn" },
      { pinyin: "o", vietnameseGuide: "Tròn môi đọc như 'ô'", exampleWord: "我 (wǒ)", exampleMeaning: "Tôi" },
      { pinyin: "e", vietnameseGuide: "Đọc như âm 'ơ' hoặc 'ưa'", exampleWord: "喝 (hē)", exampleMeaning: "Uống" },
      { pinyin: "i", vietnameseGuide: "Mỉm cười bè môi đọc như 'i'", exampleWord: "你 (nǐ)", exampleMeaning: "Bạn" },
      { pinyin: "u", vietnameseGuide: "Tròn môi chúm lại đọc như 'u'", exampleWord: "不 (bù)", exampleMeaning: "Không" },
      { pinyin: "ü", vietnameseGuide: "Tròn môi thổi sáo phát âm 'uy' (giữ nguyên khẩu hình)", exampleWord: "去 (qù)", exampleMeaning: "Đi" }
    ]
  },
  {
    title: "Vận mẫu kép thông dụng",
    description: "Ghép 2 nguyên âm",
    items: [
      { pinyin: "ai", vietnameseGuide: "Đọc như 'ai'", exampleWord: "爱 (ài)", exampleMeaning: "Yêu" },
      { pinyin: "ei", vietnameseGuide: "Đọc như 'ây'", exampleWord: "给 (gěi)", exampleMeaning: "Đưa, cho" },
      { pinyin: "ao", vietnameseGuide: "Đọc như 'ao'", exampleWord: "好 (hǎo)", exampleMeaning: "Tốt, đẹp" },
      { pinyin: "ou", vietnameseGuide: "Đọc như 'âu'", exampleWord: "牛肉 (niúròu)", exampleMeaning: "Thịt bò" },
      { pinyin: "an", vietnameseGuide: "Đọc như 'an'", exampleWord: "饭 (fàn)", exampleMeaning: "Cơm" },
      { pinyin: "en", vietnameseGuide: "Đọc như 'ơn'", exampleWord: "很 (hěn)", exampleMeaning: "Rất" },
      { pinyin: "ang", vietnameseGuide: "Đọc như 'ang'", exampleWord: "忙 (máng)", exampleMeaning: "Bận rộn" },
      { pinyin: "eng", vietnameseGuide: "Đọc như 'âng'", exampleWord: "冷 (lěng)", exampleMeaning: "Lạnh" }
    ]
  }
];

export const PINYIN_TONES = [
  {
    toneNumber: 1,
    name: "Thanh 1 (Âm Bình)",
    mark: "ā",
    symbol: "—",
    pitch: "55 (Cao bằng)",
    guide: "Cao, ngân dài và phẳng đều, không lên không xuống.",
    example: "mā (妈 - Mẹ)"
  },
  {
    toneNumber: 2,
    name: "Thanh 2 (Dương Bình)",
    mark: "á",
    symbol: "／",
    pitch: "35 (Đi lên)",
    guide: "Bắt đầu từ mức trung bình rồi vút lên cao như dấu sắc tiếng Việt.",
    example: "má (麻 - Vừng)"
  },
  {
    toneNumber: 3,
    name: "Thanh 3 (Thượng Thanh)",
    mark: "ǎ",
    symbol: "∨",
    pitch: "214 (Lượn sóng)",
    guide: "Hạ giọng xuống trầm rồi hơi vểnh lên như dấu hỏi trầm.",
    example: "mǎ (马 - Con ngựa)"
  },
  {
    toneNumber: 4,
    name: "Thanh 4 (Khứ Thanh)",
    mark: "à",
    symbol: "＼",
    pitch: "51 (Rơi dứt khoát)",
    guide: "Hạ từ đỉnh cao nhất rơi dứt khoát xuống đáy, mạnh mẽ như ra lệnh.",
    example: "mà (骂 - Mắng mỏ)"
  }
];
