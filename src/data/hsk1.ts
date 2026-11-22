export interface VocabWord {
  id: number;
  hanzi: string;
  pinyin: string;
  hanViet: string;
  meaning: string;
  category: string;
  level: string;
  exampleHanzi: string;
  examplePinyin: string;
  exampleMeaning: string;
  radical?: string; // Bộ thủ
  tips?: string; // Mẹo nhớ
}

export const HSK1_VOCAB: VocabWord[] = [
  {
    id: 1,
    hanzi: "你",
    pinyin: "nǐ",
    hanViet: "Nhĩ",
    meaning: "Bạn, anh, chị (ngôi thứ 2 số ít)",
    category: "Đại từ",
    level: "HSK 1",
    exampleHanzi: "你好！",
    examplePinyin: "Nǐ hǎo!",
    exampleMeaning: "Chào bạn!",
    radical: "亻 (Nhân đứng - liên quan đến con người)",
    tips: "Gồm bộ Nhân đứng (người) bên trái, chỉ đối phương đang đứng trước mặt bạn."
  },
  {
    id: 2,
    hanzi: "好",
    pinyin: "hǎo",
    hanViet: "Hảo",
    meaning: "Tốt, đẹp, hay, khỏe",
    category: "Tính từ",
    level: "HSK 1",
    exampleHanzi: "今天天气很好。",
    examplePinyin: "Jīntiān tiānqì hěn hǎo.",
    exampleMeaning: "Thời tiết hôm nay rất tốt.",
    radical: "女 (Nữ) + 子 (Tử)",
    tips: "Ghép từ chữ Nữ (phụ nữ) và Tử (con cái). Người xưa quan niệm phụ nữ sinh được con là điều tốt đẹp (Hảo)."
  },
  {
    id: 3,
    hanzi: "我",
    pinyin: "wǒ",
    hanViet: "Ngã",
    meaning: "Tôi, tao, mình (ngôi thứ 1 số ít)",
    category: "Đại từ",
    level: "HSK 1",
    exampleHanzi: "我是越南人。",
    examplePinyin: "Wǒ shì Yuènán rén.",
    exampleMeaning: "Tôi là người Việt Nam.",
    tips: "Âm Hán Việt là 'Ngã' trong 'bản ngã', 'bản ngã cá nhân'."
  },
  {
    id: 4,
    hanzi: "他",
    pinyin: "tā",
    hanViet: "Tha",
    meaning: "Anh ấy, ông ấy, cậu ấy (nam)",
    category: "Đại từ",
    level: "HSK 1",
    exampleHanzi: "他是我的老师。",
    examplePinyin: "Tā shì wǒ de lǎoshī.",
    exampleMeaning: "Thầy ấy là giáo viên của tôi.",
    radical: "亻 (Nhân đứng)",
    tips: "Âm Hán Việt là 'Tha' trong 'tha nhân' (người khác)."
  },
  {
    id: 5,
    hanzi: "她",
    pinyin: "tā",
    hanViet: "Tha",
    meaning: "Cô ấy, bà ấy, chị ấy (nữ)",
    category: "Đại từ",
    level: "HSK 1",
    exampleHanzi: "她很漂亮。",
    examplePinyin: "Tā hěn piàoliang.",
    exampleMeaning: "Cô ấy rất xinh đẹp.",
    radical: "女 (Nữ - chỉ giới tính nữ)",
    tips: "Khác với chữ 他 (nam) ở chỗ dùng bộ Nữ bên trái."
  },
  {
    id: 6,
    hanzi: "是",
    pinyin: "shì",
    hanViet: "Thị",
    meaning: "Là, phải, đúng",
    category: "Động từ",
    level: "HSK 1",
    exampleHanzi: "这是书。",
    examplePinyin: "Zhè shì shū.",
    exampleMeaning: "Đây là sách.",
    tips: "Trong tiếng Việt hay có từ 'thị phi' (đúng sai) hoặc 'bất tri thị thùy' (không biết là ai)."
  },
  {
    id: 7,
    hanzi: "不",
    pinyin: "bù",
    hanViet: "Bất",
    meaning: "Không, chẳng (phủ định)",
    category: "Phó từ",
    level: "HSK 1",
    exampleHanzi: "我不是学生。",
    examplePinyin: "Wǒ bù shì xuésheng.",
    exampleMeaning: "Tôi không phải là học sinh.",
    tips: "Âm Hán Việt là 'Bất' trong 'bất khả thi', 'bất cần'."
  },
  {
    id: 8,
    hanzi: "谢",
    pinyin: "xiè",
    hanViet: "Tạ",
    meaning: "Cảm ơn, tạ ơn",
    category: "Động từ",
    level: "HSK 1",
    exampleHanzi: "谢谢你！",
    examplePinyin: "Xièxie nǐ!",
    exampleMeaning: "Cảm ơn bạn!",
    radical: "讠(Ngôn - lời nói)",
    tips: "Âm Hán Việt là 'Tạ' trong 'cảm tạ', 'tạ lỗi'."
  },
  {
    id: 9,
    hanzi: "中",
    pinyin: "zhōng",
    hanViet: "Trung",
    meaning: "Giữa, trung tâm, nước Trung Quốc",
    category: "Danh từ",
    level: "HSK 1",
    exampleHanzi: "我在中国学习。",
    examplePinyin: "Wǒ zài Zhōngguó xuéxí.",
    exampleMeaning: "Tôi học tập ở Trung Quốc.",
    tips: "Hình ảnh một đường thẳng xuyên qua giữa một ô chữ nhật."
  },
  {
    id: 10,
    hanzi: "文",
    pinyin: "wén",
    hanViet: "Văn",
    meaning: "Văn tự, ngôn ngữ, văn hóa",
    category: "Danh từ",
    level: "HSK 1",
    exampleHanzi: "我学中文。",
    examplePinyin: "Wǒ xué Zhōngwén.",
    exampleMeaning: "Tôi học tiếng Trung.",
    tips: "Ghép 中 (Trung) + 文 (Văn) = 中文 (Tiếng Trung/Trung Văn)."
  },
  {
    id: 11,
    hanzi: "大",
    pinyin: "dà",
    hanViet: "Đại",
    meaning: "To, lớn",
    category: "Tính từ",
    level: "HSK 1",
    exampleHanzi: "这个西瓜很大。",
    examplePinyin: "Zhège xīguā hěn dà.",
    exampleMeaning: "Quả dưa hấu này rất to.",
    tips: "Hình ảnh một người dang rộng hai tay hai chân hết cỡ để diễn tả sự 'to lớn'."
  },
  {
    id: 12,
    hanzi: "学",
    pinyin: "xué",
    hanViet: "Học",
    meaning: "Học tập, bắt chước",
    category: "Động từ",
    level: "HSK 1",
    exampleHanzi: "我们学习汉语。",
    examplePinyin: "Wǒmen xuéxí Hànyǔ.",
    exampleMeaning: "Chúng tôi học tiếng Hán.",
    tips: "大 (Đại) + 学 (Học) = 大学 (Đại học)."
  },
  {
    id: 13,
    hanzi: "吃",
    pinyin: "chī",
    hanViet: "Ngật",
    meaning: "Ăn",
    category: "Động từ",
    level: "HSK 1",
    exampleHanzi: "你想吃什么？",
    examplePinyin: "Nǐ xiǎng chī shénme?",
    exampleMeaning: "Bạn muốn ăn cái gì?",
    radical: "口 (Khẩu - cái miệng)",
    tips: "Có bộ Khẩu (cái miệng) bên trái vì hành động ăn cần dùng đến miệng."
  },
  {
    id: 14,
    hanzi: "喝",
    pinyin: "hē",
    hanViet: "Hát",
    meaning: "Uống",
    category: "Động từ",
    level: "HSK 1",
    exampleHanzi: "我想喝茶。",
    examplePinyin: "Wǒ xiǎng hē chá.",
    exampleMeaning: "Tôi muốn uống trà.",
    radical: "口 (Khẩu - cái miệng)",
    tips: "Cũng có bộ Khẩu bên trái như chữ Ăn (吃)."
  },
  {
    id: 15,
    hanzi: "水",
    pinyin: "shuǐ",
    hanViet: "Thủy",
    meaning: "Nước",
    category: "Danh từ",
    level: "HSK 1",
    exampleHanzi: "请喝水。",
    examplePinyin: "Qǐng hē shuǐ.",
    exampleMeaning: "Mời uống nước.",
    tips: "Âm Hán Việt là 'Thủy' trong 'thủy triều', 'sơn thủy hữu tình'."
  },
  {
    id: 16,
    hanzi: "人",
    pinyin: "rén",
    hanViet: "Nhân",
    meaning: "Người, con người",
    category: "Danh từ",
    level: "HSK 1",
    exampleHanzi: "中国人很多。",
    examplePinyin: "Zhōngguó rén hěn duō.",
    exampleMeaning: "Người Trung Quốc rất đông.",
    tips: "Hình ảnh hai chân của một người đang bước đi."
  },
  {
    id: 17,
    hanzi: "家",
    pinyin: "jiā",
    hanViet: "Gia",
    meaning: "Nhà, gia đình",
    category: "Danh từ",
    level: "HSK 1",
    exampleHanzi: "我家在北京。",
    examplePinyin: "Wǒ jiā zài Běijīng.",
    exampleMeaning: "Nhà tôi ở Bắc Kinh.",
    radical: "宀 (Miên - mái nhà)",
    tips: "Bên trên là mái nhà 宀, bên dưới là con lợn 豕 (gia súc ngày xưa dưới mái nhà tạo thành tổ ấm)."
  },
  {
    id: 18,
    hanzi: "爱",
    pinyin: "ài",
    hanViet: "Ái",
    meaning: "Yêu, thương, thích",
    category: "Động từ",
    level: "HSK 1",
    exampleHanzi: "我爱你。",
    examplePinyin: "Wǒ ài nǐ.",
    exampleMeaning: "Tôi yêu bạn / Anh yêu em.",
    tips: "Âm Hán Việt là 'Ái' trong 'tình ái', 'ái mộ'."
  },
  {
    id: 19,
    hanzi: "钱",
    pinyin: "qián",
    hanViet: "Tiền",
    meaning: "Tiền bạc",
    category: "Danh từ",
    level: "HSK 1",
    exampleHanzi: "这个多少钱？",
    examplePinyin: "Zhège duōshao qián?",
    exampleMeaning: "Cái này bao nhiêu tiền?",
    radical: "钅(Kim - kim loại)",
    tips: "Có bộ Kim vì ngày xưa tiền tệ đúc bằng kim loại như đồng, bạc, vàng."
  },
  {
    id: 20,
    hanzi: "一",
    pinyin: "yī",
    hanViet: "Nhất",
    meaning: "Số 1",
    category: "Số đếm",
    level: "HSK 1",
    exampleHanzi: "一个苹果。",
    examplePinyin: "Yí gè píngguǒ.",
    exampleMeaning: "Một quả táo.",
    tips: "Một nét gạch ngang đơn giản."
  }
];
