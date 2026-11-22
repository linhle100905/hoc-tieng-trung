export interface PinyinItem {
  pinyin: string;
  vietnameseGuide: string;
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
    title: "1. Âm hai môi & Răng môi (B, P, M, F)",
    description: "Phát âm bằng môi khép mở hoặc răng trên chạm môi dưới",
    items: [
      { pinyin: "b", vietnameseGuide: "Đọc như 'p' tiếng Việt (không bật hơi)", exampleWord: "爸爸 (bàba)", exampleMeaning: "Bố, ba" },
      { pinyin: "p", vietnameseGuide: "Mím môi và bật hơi cực mạnh đẩy luồng khí ra", exampleWord: "苹果 (píngguǒ)", exampleMeaning: "Quả táo" },
      { pinyin: "m", vietnameseGuide: "Đọc giống âm 'm' tiếng Việt", exampleWord: "妈妈 (māma)", exampleMeaning: "Mẹ" },
      { pinyin: "f", vietnameseGuide: "Răng trên chạm môi dưới, giống 'ph' tiếng Việt", exampleWord: "服务员 (fúwùyuán)", exampleMeaning: "Phục vụ" }
    ]
  },
  {
    title: "2. Âm đầu lưỡi giữa (D, T, N, L)",
    description: "Đầu lưỡi chạm chân răng hàm trên",
    items: [
      { pinyin: "d", vietnameseGuide: "Đọc như âm 't' trong tiếng Việt (không bật hơi)", exampleWord: "大 (dà)", exampleMeaning: "To lớn" },
      { pinyin: "t", vietnameseGuide: "Đọc như âm 'th' tiếng Việt (bật hơi dứt khoát)", exampleWord: "太 (tài)", exampleMeaning: "Quá, cực kỳ" },
      { pinyin: "n", vietnameseGuide: "Đọc giống âm 'n' tiếng Việt", exampleWord: "你 (nǐ)", exampleMeaning: "Bạn" },
      { pinyin: "l", vietnameseGuide: "Đọc giống âm 'l' tiếng Việt", exampleWord: "老师 (lǎoshī)", exampleMeaning: "Thầy cô giáo" }
    ]
  },
  {
    title: "3. Âm cuống lưỡi (G, K, H)",
    description: "Gốc lưỡi nâng lên chạm vòm họng mềm phía trong",
    items: [
      { pinyin: "g", vietnameseGuide: "Đọc như âm 'c' hoặc 'k' trong tiếng Việt", exampleWord: "高兴 (gāoxìng)", exampleMeaning: "Vui vẻ" },
      { pinyin: "k", vietnameseGuide: "Bật hơi mạnh từ cổ họng (giống âm 'kh')", exampleWord: "客气 (kèqi)", exampleMeaning: "Khách sáo" },
      { pinyin: "h", vietnameseGuide: "Đọc nhẹ nằm giữa 'h' và 'kh' từ cuống họng", exampleWord: "好 (hǎo)", exampleMeaning: "Tốt, khỏe" }
    ]
  },
  {
    title: "4. Âm mặt lưỡi (J, Q, X) - Nhóm âm khó",
    description: "Mặt lưỡi áp sát ngạc cứng, mở miệng mỉm cười",
    items: [
      { pinyin: "j", vietnameseGuide: "Đọc như 'ch' trong tiếng Việt (không bật hơi)", exampleWord: "叫 (jiào)", exampleMeaning: "Tên là" },
      { pinyin: "q", vietnameseGuide: "Đọc như 'ch' nhưng nén hơi và bật mạnh xì gió", exampleWord: "钱 (qián)", exampleMeaning: "Tiền bạc" },
      { pinyin: "x", vietnameseGuide: "Đọc như âm 'x' nhẹ xì hơi trong tiếng Việt", exampleWord: "谢谢 (xièxie)", exampleMeaning: "Cảm ơn" }
    ]
  },
  {
    title: "5. Âm uốn lưỡi (ZH, CH, SH, R) - Đặc sản Bắc Kinh",
    description: "Đầu lưỡi cong lên chạm ngạc cứng phía trên",
    items: [
      { pinyin: "zh", vietnameseGuide: "Uốn lưỡi cong lên đọc như 'tr' (không bật hơi)", exampleWord: "中国 (Zhōngguó)", exampleMeaning: "Trung Quốc" },
      { pinyin: "ch", vietnameseGuide: "Uốn cong lưỡi và bật luồng hơi thật mạnh ra ngoài", exampleWord: "吃 (chī)", exampleMeaning: "Ăn" },
      { pinyin: "sh", vietnameseGuide: "Uốn cong lưỡi đọc như 's' mạnh (sao/sông)", exampleWord: "是 (shì)", exampleMeaning: "Là, phải" },
      { pinyin: "r", vietnameseGuide: "Uốn lưỡi rung nhẹ, gần giống âm 'r' tiếng Việt", exampleWord: "人 (rén)", exampleMeaning: "Con người" }
    ]
  },
  {
    title: "6. Âm đầu lưỡi trước (Z, C, S)",
    description: "Đầu lưỡi áp mặt trong răng cửa trên",
    items: [
      { pinyin: "z", vietnameseGuide: "Đọc như 'ch' dẹp môi, không bật hơi", exampleWord: "再见 (zàijiàn)", exampleMeaning: "Tạm biệt" },
      { pinyin: "c", vietnameseGuide: "Đầu lưỡi chạm răng và bật xì hơi mạnh", exampleWord: "菜 (cài)", exampleMeaning: "Món ăn" },
      { pinyin: "s", vietnameseGuide: "Răng khép nhẹ đọc xì như 'x' tiếng Việt", exampleWord: "四 (sì)", exampleMeaning: "Số 4" }
    ]
  },
  {
    title: "7. Bán nguyên âm (Y, W)",
    description: "Đóng vai trò phụ âm đứng đầu âm tiết",
    items: [
      { pinyin: "y", vietnameseGuide: "Đọc như 'd/gi' (âm i đứng đầu)", exampleWord: "一 (yī)", exampleMeaning: "Số 1" },
      { pinyin: "w", vietnameseGuide: "Đọc như 'u/qu' (âm u đứng đầu)", exampleWord: "我 (wǒ)", exampleMeaning: "Tôi" }
    ]
  }
];

export const PINYIN_FINALS: PinyinCategory[] = [
  {
    title: "1. Vận mẫu đơn (6 nguyên âm gốc)",
    description: "Nền tảng của toàn bộ hệ thống phát âm tiếng Hán",
    items: [
      { pinyin: "a", vietnameseGuide: "Mở rộng khẩu hình đọc như 'a'", exampleWord: "大 (dà)", exampleMeaning: "To lớn" },
      { pinyin: "o", vietnameseGuide: "Tròn môi đọc như 'ô'", exampleWord: "我 (wǒ)", exampleMeaning: "Tôi" },
      { pinyin: "e", vietnameseGuide: "Đọc như âm 'ơ' hoặc 'ưa'", exampleWord: "喝 (hē)", exampleMeaning: "Uống" },
      { pinyin: "i", vietnameseGuide: "Mỉm cười dẹp môi đọc như 'i'", exampleWord: "你 (nǐ)", exampleMeaning: "Bạn" },
      { pinyin: "u", vietnameseGuide: "Tròn môi chúm lại đọc như 'u'", exampleWord: "不 (bù)", exampleMeaning: "Không" },
      { pinyin: "ü", vietnameseGuide: "Tròn môi thổi sáo phát âm 'uy' (giữ nguyên môi)", exampleWord: "去 (qù)", exampleMeaning: "Đi" }
    ]
  },
  {
    title: "2. Vận mẫu kép (Ghép nguyên âm)",
    description: "Chuyển khẩu hình từ nguyên âm trước sang sau",
    items: [
      { pinyin: "ai", vietnameseGuide: "Đọc như 'ai'", exampleWord: "爱 (ài)", exampleMeaning: "Yêu" },
      { pinyin: "ei", vietnameseGuide: "Đọc như 'ây'", exampleWord: "给 (gěi)", exampleMeaning: "Đưa, cho" },
      { pinyin: "ao", vietnameseGuide: "Đọc như 'ao'", exampleWord: "好 (hǎo)", exampleMeaning: "Tốt, đẹp" },
      { pinyin: "ou", vietnameseGuide: "Đọc như 'âu'", exampleWord: "肉 (ròu)", exampleMeaning: "Thịt" },
      { pinyin: "ia", vietnameseGuide: "Đọc như 'ia' (nhanh)", exampleWord: "家 (jiā)", exampleMeaning: "Nhà" },
      { pinyin: "ie", vietnameseGuide: "Đọc như 'iê'", exampleWord: "谢 (xiè)", exampleMeaning: "Tạ ơn" },
      { pinyin: "iao", vietnameseGuide: "Đọc như 'ieo'", exampleWord: "叫 (jiào)", exampleMeaning: "Tên là" },
      { pinyin: "iu", vietnameseGuide: "Viết tắt của iou, đọc như 'iêu'", exampleWord: "九 (jiǔ)", exampleMeaning: "Số 9" },
      { pinyin: "ua", vietnameseGuide: "Đọc như 'oa'", exampleWord: "瓜 (guā)", exampleMeaning: "Dưa" },
      { pinyin: "uo", vietnameseGuide: "Đọc như 'ua/uô'", exampleWord: "国 (guó)", exampleMeaning: "Nước, quốc gia" },
      { pinyin: "uai", vietnameseGuide: "Đọc như 'oai'", exampleWord: "快 (kuài)", exampleMeaning: "Nhanh" },
      { pinyin: "ui", vietnameseGuide: "Viết tắt của uei, đọc như 'uây'", exampleWord: "水 (shuǐ)", exampleMeaning: "Nước" },
      { pinyin: "üe", vietnameseGuide: "Tròn môi đọc như 'uy-ê'", exampleWord: "月 (yuè)", exampleMeaning: "Mặt trăng" }
    ]
  },
  {
    title: "3. Vận mẫu mũi trước - Đuôi N",
    description: "Kết thúc bằng đầu lưỡi chạm lợi trên (âm n)",
    items: [
      { pinyin: "an", vietnameseGuide: "Đọc như 'an'", exampleWord: "饭 (fàn)", exampleMeaning: "Cơm" },
      { pinyin: "en", vietnameseGuide: "Đọc như 'ơn'", exampleWord: "很 (hěn)", exampleMeaning: "Rất" },
      { pinyin: "in", vietnameseGuide: "Đọc như 'in'", exampleWord: "斤 (jīn)", exampleMeaning: "Cân (500g)" },
      { pinyin: "un", vietnameseGuide: "Đọc như 'uân'", exampleWord: "问 (wèn)", exampleMeaning: "Hỏi" },
      { pinyin: "ün", vietnameseGuide: "Tròn môi đọc như 'uyn'", exampleWord: "云 (yún)", exampleMeaning: "Mây" },
      { pinyin: "ian", vietnameseGuide: "Đọc như 'i-en'", exampleWord: "钱 (qián)", exampleMeaning: "Tiền" },
      { pinyin: "uan", vietnameseGuide: "Đọc như 'oan'", exampleWord: "关 (guān)", exampleMeaning: "Đóng" },
      { pinyin: "üan", vietnameseGuide: "Tròn môi đọc như 'uy-en'", exampleWord: "远 (yuǎn)", exampleMeaning: "Xa" }
    ]
  },
  {
    title: "4. Vận mẫu mũi sau - Đuôi NG",
    description: "Cuống lưỡi nâng lên chạm ngạc mềm (âm ng)",
    items: [
      { pinyin: "ang", vietnameseGuide: "Đọc như 'ang'", exampleWord: "忙 (máng)", exampleMeaning: "Bận" },
      { pinyin: "eng", vietnameseGuide: "Đọc như 'âng'", exampleWord: "冷 (lěng)", exampleMeaning: "Lạnh" },
      { pinyin: "ing", vietnameseGuide: "Đọc như 'inh'", exampleWord: "名 (míng)", exampleMeaning: "Tên" },
      { pinyin: "ong", vietnameseGuide: "Đọc như 'ung'", exampleWord: "中 (zhōng)", exampleMeaning: "Trung" },
      { pinyin: "iang", vietnameseGuide: "Đọc như 'iang'", exampleWord: "想 (xiǎng)", exampleMeaning: "Muốn, nhớ" },
      { pinyin: "iong", vietnameseGuide: "Đọc như 'i-ung'", exampleWord: "穷 (qióng)", exampleMeaning: "Nghèo" },
      { pinyin: "uang", vietnameseGuide: "Đọc như 'oang'", exampleWord: "黄 (huáng)", exampleMeaning: "Vàng" }
    ]
  },
  {
    title: "5. Vận mẫu cuộn lưỡi đặc biệt (ER)",
    description: "Âm tiết uốn lưỡi đặc trưng của tiếng Bắc Kinh",
    items: [
      { pinyin: "er", vietnameseGuide: "Phát âm 'ơ' đồng thời cong vút đầu lưỡi lên", exampleWord: "二 (èr)", exampleMeaning: "Số 2" }
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
    example: "mā (妈 - Mẹ)",
    soundHanzi: "妈"
  },
  {
    toneNumber: 2,
    name: "Thanh 2 (Dương Bình)",
    mark: "á",
    symbol: "／",
    pitch: "35 (Đi lên)",
    guide: "Bắt đầu từ mức trung bình rồi vút lên cao như dấu sắc tiếng Việt.",
    example: "má (麻 - Vừng/Gai)",
    soundHanzi: "麻"
  },
  {
    toneNumber: 3,
    name: "Thanh 3 (Thượng Thanh)",
    mark: "ǎ",
    symbol: "∨",
    pitch: "214 (Lượn sóng)",
    guide: "Hạ giọng xuống trầm rồi hơi vểnh lên như dấu hỏi trầm.",
    example: "mǎ (马 - Con ngựa)",
    soundHanzi: "马"
  },
  {
    toneNumber: 4,
    name: "Thanh 4 (Khứ Thanh)",
    mark: "à",
    symbol: "＼",
    pitch: "51 (Rơi dứt khoát)",
    guide: "Hạ từ đỉnh cao nhất rơi dứt khoát xuống đáy, mạnh mẽ như ra lệnh.",
    example: "mà (骂 - Mắng mỏ)",
    soundHanzi: "骂"
  }
];
