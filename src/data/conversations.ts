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
  },
  {
    id: 6,
    levelNumber: 6,
    title: "Đặt phòng & Khách sạn",
    subtitle: "Du lịch, nhận phòng & trả phòng",
    icon: "🏨",
    color: "from-blue-500 to-indigo-600",
    xpReward: 60,
    description: "Học cách hỏi phòng trống, giá phòng một đêm, đặt cọc và nhận thẻ phòng.",
    keyVocab: [
      { hanzi: "酒店", pinyin: "Jiǔdiàn", meaning: "Khách sạn" },
      { hanzi: "预订", pinyin: "Yùdìng", meaning: "Đặt trước" },
      { hanzi: "房间", pinyin: "Fángjiān", meaning: "Căn phòng" },
      { hanzi: "护照", pinyin: "Hùzhào", meaning: "Hộ chiếu" }
    ],
    dialogue: [
      {
        id: 1,
        speaker: 'B',
        speakerName: 'Bạn (Khách du lịch)',
        avatar: '🙋🏻‍♂️',
        hanzi: '你好，我有预订房间。',
        pinyin: 'Nǐ hǎo, wǒ yǒu yùdìng fángjiān.',
        hanViet: 'Nhĩ hảo, ngã hữu dự đính phòng gian.',
        vietnamese: 'Xin chào, tôi có đặt phòng trước rồi.'
      },
      {
        id: 2,
        speaker: 'A',
        speakerName: 'Lễ tân khách sạn',
        avatar: '👩🏻‍💼',
        hanzi: '请给我看一下您的护照。',
        pinyin: 'Qǐng gěi wǒ kàn yíxià nín de hùzhào.',
        hanViet: 'Thỉnh cấp ngã khán nhất hạ nâm đích hộ chiếu.',
        vietnamese: 'Xin vui lòng cho tôi xem hộ chiếu của bạn một chút.'
      },
      {
        id: 3,
        speaker: 'B',
        speakerName: 'Bạn (Khách du lịch)',
        avatar: '🙋🏻‍♂️',
        hanzi: '这是我的护照。包含早餐吗？',
        pinyin: 'Zhè shì wǒ de hùzhào. Bāohán zǎocān ma?',
        hanViet: 'Giá thị ngã đích hộ chiếu. Bao hàm tảo xan ma?',
        vietnamese: 'Đây là hộ chiếu của tôi. Có bao gồm bữa sáng không?'
      },
      {
        id: 4,
        speaker: 'A',
        speakerName: 'Lễ tân khách sạn',
        avatar: '👩🏻‍💼',
        hanzi: '有的，早餐在二楼，这是房卡。',
        pinyin: 'Yǒu de, zǎocān zài èr lóu, zhè shì fángkǎ.',
        hanViet: 'Hữu đích, tảo xan tại nhị lâu, giá thị phòng tạp.',
        vietnamese: 'Có ạ, ăn sáng ở tầng 2, đây là thẻ từ phòng của bạn.'
      }
    ]
  },
  {
    id: 7,
    levelNumber: 7,
    title: "Khám bệnh & Hiệu thuốc",
    subtitle: "Sức khỏe, triệu chứng & mua thuốc",
    icon: "💊",
    color: "from-rose-500 to-pink-600",
    xpReward: 60,
    description: "Mô tả triệu chứng đau đầu, sốt, mua thuốc cảm sốt tại hiệu thuốc.",
    keyVocab: [
      { hanzi: "生病", pinyin: "Shēngbìng", meaning: "Bị ốm, bị bệnh" },
      { hanzi: "头疼", pinyin: "Tóuténg", meaning: "Đau đầu" },
      { hanzi: "发烧", pinyin: "Fāshāo", meaning: "Bị sốt" },
      { hanzi: "吃药", pinyin: "Chī yào", meaning: "Uống thuốc" }
    ],
    dialogue: [
      {
        id: 1,
        speaker: 'A',
        speakerName: 'Bác sĩ / Dược sĩ',
        avatar: '👨🏻‍⚕️',
        hanzi: '你哪里不舒服？',
        pinyin: 'Nǐ nǎlǐ bù shūfu?',
        hanViet: 'Nhĩ nả lý bất thư phục?',
        vietnamese: 'Bạn cảm thấy không khỏe ở chỗ nào?'
      },
      {
        id: 2,
        speaker: 'B',
        speakerName: 'Bạn (Bệnh nhân)',
        avatar: '🙋🏻‍♂️',
        hanzi: '我头疼，还有点儿发烧。',
        pinyin: 'Wǒ tóuténg, hái yǒudiǎnr fāshāo.',
        hanViet: 'Ngã đầu thống, hoàn hữu điểm nhi phát thiêu.',
        vietnamese: 'Tôi bị đau đầu, và còn hơi bị sốt nữa.'
      },
      {
        id: 3,
        speaker: 'A',
        speakerName: 'Bác sĩ / Dược sĩ',
        avatar: '👨🏻‍⚕️',
        hanzi: '这个药一天吃三次，每次两片。',
        pinyin: 'Zhège yào yì tiān chī sān cì, měi cì liǎng piàn.',
        hanViet: 'Giá cá dược nhất thiên ngật tam thứ, mỗi thứ lưỡng phiến.',
        vietnamese: 'Thuốc này mỗi ngày uống 3 lần, mỗi lần 2 viên.'
      },
      {
        id: 4,
        speaker: 'B',
        speakerName: 'Bạn (Bệnh nhân)',
        avatar: '🙋🏻‍♂️',
        hanzi: '好的，多谢医生！',
        pinyin: 'Hǎo de, duōxiè yīshēng!',
        hanViet: 'Hảo đích, đa tạ y sinh!',
        vietnamese: 'Vâng tôi hiểu rồi, cảm ơn bác sĩ nhiều!'
      }
    ]
  },
  {
    id: 8,
    levelNumber: 8,
    title: "Công việc & Văn phòng",
    subtitle: "Phỏng vấn & Giao tiếp công sở",
    icon: "💼",
    color: "from-cyan-500 to-blue-600",
    xpReward: 70,
    description: "Giao tiếp trong công việc, họp hành, gửi tài liệu báo cáo và email.",
    keyVocab: [
      { hanzi: "工作", pinyin: "Gōngzuò", meaning: "Làm việc, công việc" },
      { hanzi: "开会", pinyin: "Kāihuì", meaning: "Họp hành" },
      { hanzi: "准备", pinyin: "Zhǔnbèi", meaning: "Chuẩn bị" },
      { hanzi: "经理", pinyin: "Jīnglǐ", meaning: "Giám đốc / Quản lý" }
    ],
    dialogue: [
      {
        id: 1,
        speaker: 'A',
        speakerName: 'Trưởng phòng Vương',
        avatar: '👨🏻‍💼',
        hanzi: '下午两点我们有一个重要会议。',
        pinyin: 'Xiàwǔ liǎng diǎn wǒmen yǒu yí gè zhòngyào huìyì.',
        hanViet: 'Hạ ngọ lưỡng điểm ngã môn hữu nhất cá trọng yếu hội nghị.',
        vietnamese: 'Chiều 2 giờ chúng ta có một cuộc họp quan trọng.'
      },
      {
        id: 2,
        speaker: 'B',
        speakerName: 'Bạn (Nhân viên)',
        avatar: '🙋🏻‍♂️',
        hanzi: '我已经准备好汇报文件了。',
        pinyin: 'Wǒ yǐjīng zhǔnbèi hǎo huìbào wénjiàn le.',
        hanViet: 'Ngã dĩ kinh chuẩn bị hảo hội báo văn kiện liễu.',
        vietnamese: 'Tôi đã chuẩn bị xong xuôi tài liệu báo cáo rồi ạ.'
      },
      {
        id: 3,
        speaker: 'A',
        speakerName: 'Trưởng phòng Vương',
        avatar: '👨🏻‍💼',
        hanzi: '很好，顺便发一份到我的邮箱。',
        pinyin: 'Hěn hǎo, shùnbiàn fā yí fèn dào wǒ de yóuxiāng.',
        hanViet: 'Hẩn hảo, thuận tiện phát nhất phần đáo ngã đích bưu tương.',
        vietnamese: 'Rất tốt, tiện thể gửi một bản vào hòm thư điện tử của tôi nhé.'
      },
      {
        id: 4,
        speaker: 'B',
        speakerName: 'Bạn (Nhân viên)',
        avatar: '🙋🏻‍♂️',
        hanzi: '好的，王经理，我马上发！',
        pinyin: 'Hǎo de, Wáng jīnglǐ, wǒ mǎshàng fā!',
        hanViet: 'Hảo đích, Vương kinh lý, ngã mã thượng phát!',
        vietnamese: 'Vâng thưa Giám đốc Vương, tôi gửi ngay bây giờ ạ!'
      }
    ]
  },
  {
    id: 9,
    levelNumber: 9,
    title: "Hẹn hò & Sở thích",
    subtitle: "Kết bạn, cà phê & cuối tuần",
    icon: "☕",
    color: "from-amber-500 to-orange-600",
    xpReward: 70,
    description: "Hỏi thăm sở thích, mời bạn bè đi uống cà phê, trà sữa, xem phim cuối tuần.",
    keyVocab: [
      { hanzi: "周末", pinyin: "Zhōumò", meaning: "Cuối tuần" },
      { hanzi: "咖啡", pinyin: "Kāfēi", meaning: "Cà phê" },
      { hanzi: "电影", pinyin: "Diànyǐng", meaning: "Phim ảnh" },
      { hanzi: "打算", pinyin: "Dǎsuàn", meaning: "Dự định" }
    ],
    dialogue: [
      {
        id: 1,
        speaker: 'A',
        speakerName: 'Tiểu Vũ',
        avatar: '👱🏻‍♀️',
        hanzi: '周末你打算做什么？',
        pinyin: 'Zhōumò nǐ dǎsuàn zuò shénme?',
        hanViet: 'Chu mạt nhĩ đả toán tác thập ma?',
        vietnamese: 'Cuối tuần này bạn dự định làm gì?'
      },
      {
        id: 2,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '我打算去喝咖啡，你有空吗？',
        pinyin: 'Wǒ dǎsuàn qù hē kāfēi, nǐ yǒu kòng ma?',
        hanViet: 'Ngã đả toán khứ hát gia phi, nhĩ hữu không ma?',
        vietnamese: 'Mình định đi uống cà phê, bạn có rảnh không?'
      },
      {
        id: 3,
        speaker: 'A',
        speakerName: 'Tiểu Vũ',
        avatar: '👱🏻‍♀️',
        hanzi: '有空啊，我知道一家很棒的咖啡馆！',
        pinyin: 'Yǒu kòng a, wǒ zhīdào yì jiā hěn bàng de kāfēiguǎn!',
        hanViet: 'Hữu không a, ngã tri đạo nhất gia hẩn bổng đích gia phi quán!',
        vietnamese: 'Mình rảnh chứ, mình biết một quán cà phê siêu xịn xò!'
      },
      {
        id: 4,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '太好了，那周六下午见！',
        pinyin: 'Tài hǎo le, nà zhōuliù xiàwǔ jiàn!',
        hanViet: 'Thái hảo liễu, na chu lục hạ ngọ kiến!',
        vietnamese: 'Tuyệt quá, vậy chiều thứ Bảy gặp nhau nhé!'
      }
    ]
  },
  {
    id: 10,
    levelNumber: 10,
    title: "Khẩn cấp & Đổi tiền",
    subtitle: "Giúp đỡ, mất đồ & ngân hàng",
    icon: "🚨",
    color: "from-purple-500 to-violet-600",
    xpReward: 80,
    description: "Xử lý tình huống mất đồ, nhờ cảnh sát hỗ trợ, đổi tiền tệ tại ngân hàng.",
    keyVocab: [
      { hanzi: "帮忙", pinyin: "Bāngmáng", meaning: "Giúp đỡ" },
      { hanzi: "钱包", pinyin: "Qiánbāo", meaning: "Ví tiền" },
      { hanzi: "丢了", pinyin: "Diū le", meaning: "Bị mất" },
      { hanzi: "银行", pinyin: "Yínháng", meaning: "Ngân hàng" }
    ],
    dialogue: [
      {
        id: 1,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '请帮帮我，我的钱包丢了！',
        pinyin: 'Qǐng bāngbang wǒ, wǒ de qiánbāo diū le!',
        hanViet: 'Thỉnh bang bang ngã, ngã đích tiền bao đao liễu!',
        vietnamese: 'Xin hãy giúp tôi với, ví tiền của tôi bị rơi mất rồi!'
      },
      {
        id: 2,
        speaker: 'A',
        speakerName: 'Cảnh sát / Nhân viên hỗ trợ',
        avatar: '👮🏻‍♂️',
        hanzi: '别着急，是在哪里丢的？',
        pinyin: 'Bié zháojí, shì zài nǎlǐ diū de?',
        hanViet: 'Biệt trước cấp, thị tại nả lý đao đích?',
        vietnamese: 'Đừng sốt ruột, bạn bị mất ở đâu vậy?'
      },
      {
        id: 3,
        speaker: 'B',
        speakerName: 'Bạn (Người học)',
        avatar: '🙋🏻‍♂️',
        hanzi: '可能在刚才的地铁站里。',
        pinyin: 'Kěnéng zài gāngcái de dìtiězhàn lǐ.',
        hanViet: 'Khả năng tại cương tài đích địa thiết trạm lý.',
        vietnamese: 'Có khả năng là ở trong ga tàu điện ngầm lúc nãy.'
      },
      {
        id: 4,
        speaker: 'A',
        speakerName: 'Cảnh sát / Nhân viên hỗ trợ',
        avatar: '👮🏻‍♂️',
        hanzi: '跟我来，我们去查监控。',
        pinyin: 'Gēn wǒ lái, wǒmen qù chá jiānkòng.',
        hanViet: 'Căn ngã lai, ngã môn khứ tra giam khống.',
        vietnamese: 'Đi theo tôi, chúng ta đi kiểm tra camera an ninh.'
      }
    ]
  }
];
