export interface DialogueTurn {
  id: number;
  speaker: 'A' | 'B';
  speakerName: string;
  avatar: string;
  hanzi: string;
  pinyin: string;
  hanViet: string;
  vietnamese: string;
}

export interface LearningLevel {
  id: number;
  levelNumber: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string; // Tailwind color theme
  xpReward: number;
  description: string;
  dialogue: DialogueTurn[];
  keyVocab: { hanzi: string; pinyin: string; meaning: string }[];
}

export const CONVERSATION_LEVELS: LearningLevel[] = [
  {
    id: 1,
    levelNumber: 1,
    title: "Chào hỏi & Làm quen",
    subtitle: "Bài học vỡ lòng căn bản nhất",
    icon: "👋",
    color: "from-emerald-500 to-teal-600",
    xpReward: 50,
    description: "Học cách chào hỏi lịch sự, hỏi thăm sức khỏe và cảm ơn người khác.",
    keyVocab: [
      { hanzi: "你好", pinyin: "Nǐ hǎo", meaning: "Xin chào" },
      { hanzi: "你好吗", pinyin: "Nǐ hǎo ma", meaning: "Bạn khỏe không?" },
      { hanzi: "谢谢", pinyin: "Xièxie", meaning: "Cảm ơn" },
      { hanzi: "再见", pinyin: "Zàijiàn", meaning: "Tạm biệt" }
    ],
    dialogue: [
      {
        id: 1,
        speaker: 'A',
        speakerName: 'Lý Hoa',
        avatar: '👩🏻',
        hanzi: '你好！',
        pinyin: 'Nǐ hǎo!',
        hanViet: 'Nhĩ hảo!',
        vietnamese: 'Xin chào bạn!'
      },
      {
        id: 2,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '你好！',
        pinyin: 'Nǐ hǎo!',
        hanViet: 'Nhĩ hảo!',
        vietnamese: 'Chào bạn!'
      },
      {
        id: 3,
        speaker: 'A',
        speakerName: 'Lý Hoa',
        avatar: '👩🏻',
        hanzi: '你好吗？',
        pinyin: 'Nǐ hǎo ma?',
        hanViet: 'Nhĩ hảo ma?',
        vietnamese: 'Bạn có khỏe không?'
      },
      {
        id: 4,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '我很好，谢谢！你呢？',
        pinyin: 'Wǒ hěn hǎo, xièxie! Nǐ ne?',
        hanViet: 'Ngã hấn hảo, tạ tạ! Nhĩ ni?',
        vietnamese: 'Tôi rất khỏe, cảm ơn bạn! Còn bạn?'
      },
      {
        id: 5,
        speaker: 'A',
        speakerName: 'Lý Hoa',
        avatar: '👩🏻',
        hanzi: '我也很好。再见！',
        pinyin: 'Wǒ yě hěn hǎo. Zàijiàn!',
        hanViet: 'Ngã dã hấn hảo. Tái kiến!',
        vietnamese: 'Tôi cũng rất khỏe. Tạm biệt nhé!'
      }
    ]
  },
  {
    id: 2,
    levelNumber: 2,
    title: "Giới thiệu Tên & Quốc tịch",
    subtitle: "Tôi là người Việt Nam",
    icon: "🌏",
    color: "from-blue-500 to-indigo-600",
    xpReward: 60,
    description: "Hỏi và trả lời về họ tên, bạn đến từ quốc gia nào.",
    keyVocab: [
      { hanzi: "叫", pinyin: "Jiào", meaning: "Tên là, gọi là" },
      { hanzi: "名字", pinyin: "Míngzi", meaning: "Tên gọi" },
      { hanzi: "越南人", pinyin: "Yuènán rén", meaning: "Người Việt Nam" },
      { hanzi: "中国人", pinyin: "Zhōngguó rén", meaning: "Người Trung Quốc" }
    ],
    dialogue: [
      {
        id: 1,
        speaker: 'A',
        speakerName: 'Vương Vĩ',
        avatar: '👨🏻',
        hanzi: '请问，你叫什么名字？',
        pinyin: 'Qǐngwèn, nǐ jiào shénme míngzi?',
        hanViet: 'Thỉnh vấn, nhĩ khiếu thập ma danh tự?',
        vietnamese: 'Xin hỏi, bạn tên là gì vậy?'
      },
      {
        id: 2,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '我叫李明。你呢？',
        pinyin: 'Wǒ jiào Lǐ Míng. Nǐ ne?',
        hanViet: 'Ngã khiếu Lý Minh. Nhĩ ni?',
        vietnamese: 'Tôi tên là Lý Minh. Còn bạn?'
      },
      {
        id: 3,
        speaker: 'A',
        speakerName: 'Vương Vĩ',
        avatar: '👨🏻',
        hanzi: '我叫王伟。你是哪国人？',
        pinyin: 'Wǒ jiào Wáng Wěi. Nǐ shì nǎ guó rén?',
        hanViet: 'Ngã khiếu Vương Vĩ. Nhĩ thị na quốc nhân?',
        vietnamese: 'Tôi tên là Vương Vĩ. Bạn là người nước nào?'
      },
      {
        id: 4,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '我是越南人。你也是学生吗？',
        pinyin: 'Wǒ shì Yuènán rén. Nǐ yě shì xuésheng ma?',
        hanViet: 'Ngã thị Việt Nam nhân. Nhĩ dã thị học sinh ma?',
        vietnamese: 'Tôi là người Việt Nam. Bạn cũng là học sinh à?'
      },
      {
        id: 5,
        speaker: 'A',
        speakerName: 'Vương Vĩ',
        avatar: '👨🏻',
        hanzi: '是的，很高兴认识你！',
        pinyin: 'Shì de, hěn gāoxìng rènshi nǐ!',
        hanViet: 'Thị đích, hấn cao hứng nhận thức nhĩ!',
        vietnamese: 'Đúng vậy, rất vui được làm quen với bạn!'
      }
    ]
  },
  {
    id: 3,
    levelNumber: 3,
    title: "Đi ăn quán & Gọi món",
    subtitle: "Muốn ăn gì, muốn uống gì?",
    icon: "🍜",
    color: "from-amber-500 to-orange-600",
    xpReward: 70,
    description: "Giao tiếp với bồi bàn, gọi đồ ăn, gọi trà và nước ngọt.",
    keyVocab: [
      { hanzi: "服务员", pinyin: "Fúwùyuán", meaning: "Bồi bàn, phục vụ" },
      { hanzi: "想吃", pinyin: "Xiǎng chī", meaning: "Muốn ăn" },
      { hanzi: "米饭", pinyin: "Mǐfàn", meaning: "Cơm trắng" },
      { hanzi: "水", pinyin: "Shuǐ", meaning: "Nước uống" }
    ],
    dialogue: [
      {
        id: 1,
        speaker: 'A',
        speakerName: 'Phục vụ quán',
        avatar: '👨🏻‍🍳',
        hanzi: '服务员来了！你想吃什么？',
        pinyin: 'Fúwùyuán lái le! Nǐ xiǎng chī shénme?',
        hanViet: 'Phục vụ viên lai liễu! Nhĩ tưởng ngật thập ma?',
        vietnamese: 'Phục vụ đây ạ! Bạn muốn ăn món gì?'
      },
      {
        id: 2,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '我想吃牛肉和米饭。',
        pinyin: 'Wǒ xiǎng chī niúròu hé mǐfàn.',
        hanViet: 'Ngã tưởng ngật ngưu nhục hòa mễ phạn.',
        vietnamese: 'Tôi muốn ăn thịt bò và cơm trắng.'
      },
      {
        id: 3,
        speaker: 'A',
        speakerName: 'Phục vụ quán',
        avatar: '👨🏻‍🍳',
        hanzi: '好的，你想喝什么？',
        pinyin: 'Hǎo de, nǐ xiǎng hē shénme?',
        hanViet: 'Hảo đích, nhĩ tưởng hát thập ma?',
        vietnamese: 'Vâng ạ, bạn muốn uống đồ uống gì?'
      },
      {
        id: 4,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '请给我一杯茶，谢谢。',
        pinyin: 'Qǐng gěi wǒ yì bēi chá, xièxie.',
        hanViet: 'Thỉnh cấp ngã nhất bôi trà, tạ tạ.',
        vietnamese: 'Xin cho tôi một cốc trà, cảm ơn nhé.'
      }
    ]
  },
  {
    id: 4,
    levelNumber: 4,
    title: "Đi chợ & Hỏi giá tiền",
    subtitle: "Bao nhiêu tiền một cân?",
    icon: "🛍️",
    color: "from-rose-500 to-pink-600",
    xpReward: 80,
    description: "Hỏi giá, mặc cả đắt rẻ và thanh toán tiền.",
    keyVocab: [
      { hanzi: "多少钱", pinyin: "Duōshao qián", meaning: "Bao nhiêu tiền?" },
      { hanzi: "太贵了", pinyin: "Tài guì le", meaning: "Đắt quá rồi!" },
      { hanzi: "便宜", pinyin: "Piányi", meaning: "Rẻ, bớt giá" },
      { hanzi: "块", pinyin: "Kuài", meaning: "Đồng (Tệ)" }
    ],
    dialogue: [
      {
        id: 1,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '老板，这个苹果多少钱一斤？',
        pinyin: 'Lǎobǎn, zhège píngguǒ duōshao qián yì jīn?',
        hanViet: 'Lão bản, giá cá bình quả đa thiểu tiền nhất cân?',
        vietnamese: 'Ông chủ ơi, táo này bao nhiêu tiền một cân vậy?'
      },
      {
        id: 2,
        speaker: 'A',
        speakerName: 'Chủ tiệm',
        avatar: '🧔🏻',
        hanzi: '五块钱一斤，很甜的！',
        pinyin: 'Wǔ kuài qián yì jīn, hěn tián de!',
        hanViet: 'Ngũ khối tiền nhất cân, hấn điềm đích!',
        vietnamese: '5 tệ một cân, ngọt lắm đấy!'
      },
      {
        id: 3,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '太贵了！四块可以吗？',
        pinyin: 'Tài guì le! Sì kuài kěyǐ ma?',
        hanViet: 'Thái quý liễu! Tứ khối khả dĩ ma?',
        vietnamese: 'Đắt quá! 4 tệ được không ông chủ?'
      },
      {
        id: 4,
        speaker: 'A',
        speakerName: 'Chủ tiệm',
        avatar: '🧔🏻',
        hanzi: '行吧，买两斤给你。',
        pinyin: 'Xíng ba, mǎi liǎng jīn gěi nǐ.',
        hanViet: 'Hành ba, mãi lưỡng cân cấp nhĩ.',
        vietnamese: 'Được rồi, mua hai cân thì bán cho bạn nhé.'
      }
    ]
  },
  {
    id: 5,
    levelNumber: 5,
    title: "Hỏi đường & Đi Taxi",
    subtitle: "Đi thẳng rồi rẽ phải",
    icon: "🚕",
    color: "from-purple-500 to-violet-600",
    xpReward: 100,
    description: "Hỏi đường người đi đường, chỉ dẫn phương hướng đi lại.",
    keyVocab: [
      { hanzi: "怎么走", pinyin: "Zěnme zǒu", meaning: "Đi như thế nào?" },
      { hanzi: "一直走", pinyin: "Yìzhí zǒu", meaning: "Đi thẳng" },
      { hanzi: "向右拐", pinyin: "Xiàng yòu guǎi", meaning: "Rẽ phải" },
      { hanzi: "远", pinyin: "Yuǎn", meaning: "Xa" }
    ],
    dialogue: [
      {
        id: 1,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '请问，去故宫怎么走？',
        pinyin: 'Qǐngwèn, qù Gùgōng zěnme zǒu?',
        hanViet: 'Thỉnh vấn, khứ Cố Cung chẩm ma tẩu?',
        vietnamese: 'Xin hỏi, muốn đi đến Cố Cung thì đi như thế nào?'
      },
      {
        id: 2,
        speaker: 'A',
        speakerName: 'Người đi đường',
        avatar: '🚶🏻‍♂️',
        hanzi: '一直向前走，然后向右拐。',
        pinyin: 'Yìzhí xiàng qián zǒu, ránhòu xiàng yòu guǎi.',
        hanViet: 'Nhất trực hướng tiền tẩu, nhiên hậu hướng hữu quải.',
        vietnamese: 'Đi thẳng về phía trước, sau đó rẽ sang bên phải.'
      },
      {
        id: 3,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '离这里远不远？',
        pinyin: 'Lí zhèlǐ yuǎn bù yuǎn?',
        hanViet: 'Ly giá lý viễn bất viễn?',
        vietnamese: 'Có cách đây xa không ạ?'
      },
      {
        id: 4,
        speaker: 'A',
        speakerName: 'Người đi đường',
        avatar: '🚶🏻‍♂️',
        hanzi: '不远，走五分钟就到了。',
        pinyin: 'Bù yuǎn, zǒu wǔ fēnzhōng jiù dào le.',
        hanViet: 'Bất viễn, tẩu ngũ phân chung tựu đáo liễu.',
        vietnamese: 'Không xa đâu, đi bộ 5 phút là tới nơi rồi.'
      }
    ]
  }
];
