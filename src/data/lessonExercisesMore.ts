import { InteractiveLesson } from './lessonExercises';

// =========================================================================
// BÀI 6: ĐẶT PHÒNG & KHÁCH SẠN (25 CÂU)
// =========================================================================
export const LEVEL_6_LESSON: InteractiveLesson = {
  levelNumber: 6,
  levelTitle: "Đặt phòng & Khách sạn",
  description: "Trọn bộ 25 bài tập tương tác: Khách sạn, đặt phòng, hộ chiếu, chìa khóa/thẻ phòng, bữa sáng và trả phòng.",
  exercises: [
    {
      id: 1,
      type: 'intro',
      prompt: 'Học từ mới: Khách sạn',
      targetHanzi: '酒店',
      targetPinyin: 'jiǔdiàn',
      hanViet: 'Tửu điếm',
      targetVietnamese: 'Khách sạn',
      audioText: '酒店',
      tips: 'Ghép từ Tửu (酒 - rượu) và Điếm (店 - quán). Ngày xưa là quán rượu, ngày nay là khách sạn.'
    },
    {
      id: 2,
      type: 'choice',
      prompt: 'Từ "酒店" (jiǔdiàn) nghĩa là gì?',
      targetHanzi: '酒店',
      audioText: '酒店',
      options: [
        { id: 'a', text: 'Nhà hàng', subText: 'fànguǎn', isCorrect: false },
        { id: 'b', text: 'Khách sạn', subText: 'jiǔdiàn', isCorrect: true },
        { id: 'c', text: 'Sân bay', subText: 'jīchǎng', isCorrect: false },
        { id: 'd', text: 'Ngân hàng', subText: 'yínháng', isCorrect: false }
      ]
    },
    {
      id: 3,
      type: 'intro',
      prompt: 'Học từ mới: Đặt trước / Book phòng',
      targetHanzi: '预订',
      targetPinyin: 'yùdìng',
      hanViet: 'Dự đính',
      targetVietnamese: 'Đặt trước (phòng, vé)',
      audioText: '预订',
      tips: 'Dự (预 - trước) + Đính (订 - đặt).'
    },
    {
      id: 4,
      type: 'scramble',
      prompt: 'Ghép câu: "Tôi có đặt phòng trước rồi"',
      targetVietnamese: 'Tôi có đặt phòng trước rồi',
      correctOrder: ['我', '预订', '了', '房间'],
      scrambleWords: ['房间', '我', '了', '预订', '酒店'],
      audioText: '我预订了房间'
    },
    {
      id: 5,
      type: 'intro',
      prompt: 'Học từ mới: Căn phòng',
      targetHanzi: '房间',
      targetPinyin: 'fángjiān',
      hanViet: 'Phòng gian',
      targetVietnamese: 'Căn phòng',
      audioText: '房间',
      tips: 'Phòng (房 - nhà/buồng) + Gian (间 - khoảng không).'
    },
    {
      id: 6,
      type: 'choice',
      prompt: 'Khi muốn nói "phòng của tôi", bạn nói thế nào?',
      options: [
        { id: 'a', text: '我的房间', subText: 'wǒ de fángjiān', isCorrect: true },
        { id: 'b', text: '他是房间', subText: 'tā shì fángjiān', isCorrect: false },
        { id: 'c', text: '我有酒店', subText: 'wǒ yǒu jiǔdiàn', isCorrect: false },
        { id: 'd', text: '房间很好', subText: 'fángjiān hěn hǎo', isCorrect: false }
      ],
      audioText: '我的房间'
    },
    {
      id: 7,
      type: 'intro',
      prompt: 'Học từ mới: Hộ chiếu',
      targetHanzi: '护照',
      targetPinyin: 'hùzhào',
      hanViet: 'Hộ chiếu',
      targetVietnamese: 'Hộ chiếu (Passport)',
      audioText: '护照',
      tips: 'Hộ (护 - bảo vệ) + Chiếu (照 - soi sáng/giấy phép).'
    },
    {
      id: 8,
      type: 'listen',
      prompt: 'Lắng nghe xem nhân viên lễ tân yêu cầu giấy tờ gì:',
      audioText: '请给我护照',
      options: [
        { id: 'a', text: 'Xin cho tôi xem tiền mặt', isCorrect: false },
        { id: 'b', text: 'Xin cho tôi xem hộ chiếu', isCorrect: true },
        { id: 'c', text: 'Xin cho tôi xem vé máy bay', isCorrect: false },
        { id: 'd', text: 'Xin cho tôi số điện thoại', isCorrect: false }
      ]
    },
    {
      id: 9,
      type: 'intro',
      prompt: 'Học từ mới: Thẻ phòng / Chìa khóa',
      targetHanzi: '房卡',
      targetPinyin: 'fángkǎ',
      hanViet: 'Phòng tạp',
      targetVietnamese: 'Thẻ phòng (mở khóa từ)',
      audioText: '房卡',
      tips: 'Phòng (房) + Tạp (卡 - thẻ card).'
    },
    {
      id: 10,
      type: 'scramble',
      prompt: 'Ghép câu: "Đây là thẻ phòng của bạn"',
      targetVietnamese: 'Đây là thẻ phòng của bạn',
      correctOrder: ['这是', '您的', '房卡'],
      scrambleWords: ['房卡', '这是', '您的', '护照'],
      audioText: '这是您的房卡'
    },
    {
      id: 11,
      type: 'intro',
      prompt: 'Học từ mới: Bữa ăn sáng',
      targetHanzi: '早餐',
      targetPinyin: 'zǎocān',
      hanViet: 'Tảo xan',
      targetVietnamese: 'Bữa sáng',
      audioText: '早餐',
      tips: 'Tảo (早 - sớm) + Xan (餐 - bữa ăn).'
    },
    {
      id: 12,
      type: 'choice',
      prompt: 'Muốn hỏi: "Có bao gồm bữa sáng không?", bạn nói:',
      options: [
        { id: 'a', text: '有早餐吗？', subText: 'Yǒu zǎocān ma?', isCorrect: true },
        { id: 'b', text: '你吃早餐吗？', subText: 'Nǐ chī zǎocān ma?', isCorrect: false },
        { id: 'c', text: '早餐多少钱？', subText: 'Zǎocān duōshao qián?', isCorrect: false },
        { id: 'd', text: '这是早餐吗？', subText: 'Zhè shì zǎocān ma?', isCorrect: false }
      ],
      audioText: '有早餐吗'
    },
    {
      id: 13,
      type: 'intro',
      prompt: 'Học từ mới: Trả phòng (Check-out)',
      targetHanzi: '退房',
      targetPinyin: 'tuì fáng',
      hanViet: 'Thoái phòng',
      targetVietnamese: 'Trả phòng (Check-out)',
      audioText: '退房',
      tips: 'Thoái (退 - lui/trả lại) + Phòng (房).'
    },
    {
      id: 14,
      type: 'choice',
      prompt: 'Từ "退房" (tuì fáng) đối nghĩa với hành động nào?',
      options: [
        { id: 'a', text: 'Nhận phòng (Check-in)', subText: 'rùzhù (入住)', isCorrect: true },
        { id: 'b', text: 'Ăn cơm', subText: 'chīfàn', isCorrect: false },
        { id: 'c', text: 'Đi ngủ', subText: 'shuìjiào', isCorrect: false },
        { id: 'd', text: 'Hỏi đường', subText: 'wènlù', isCorrect: false }
      ]
    },
    {
      id: 15,
      type: 'scramble',
      prompt: 'Ghép câu: "Xin chào, tôi muốn trả phòng"',
      targetVietnamese: 'Xin chào, tôi muốn trả phòng',
      correctOrder: ['你好', '我想', '退房'],
      scrambleWords: ['退房', '我想', '你好', '房间', '预订'],
      audioText: '你好我想退房'
    },
    {
      id: 16,
      type: 'intro',
      prompt: 'Học từ mới: Tầng / Lầu',
      targetHanzi: '楼',
      targetPinyin: 'lóu',
      hanViet: 'Lâu (trong cao lâu, nhà lầu)',
      targetVietnamese: 'Tầng, lầu, tòa nhà',
      audioText: '楼'
    },
    {
      id: 17,
      type: 'choice',
      prompt: '"Nhà hàng ở tầng 2" nói thế nào trong tiếng Trung?',
      options: [
        { id: 'a', text: '餐厅在二楼', subText: 'Cāntīng zài èr lóu', isCorrect: true },
        { id: 'b', text: '二楼是酒店', subText: 'Èr lóu shì jiǔdiàn', isCorrect: false },
        { id: 'c', text: '餐厅在三楼', subText: 'Cāntīng zài sān lóu', isCorrect: false },
        { id: 'd', text: '我想去二楼', subText: 'Wǒ xiǎng qù èr lóu', isCorrect: false }
      ],
      audioText: '餐厅在二楼'
    },
    {
      id: 18,
      type: 'fill',
      prompt: 'Điền vào chỗ trống: "请给我看您的____ (hộ chiếu)"',
      dialogueContext: 'Nhân viên lễ tân cần kiểm tra hộ chiếu của khách',
      blankPrefix: '请给我看您的',
      blankSuffix: '。',
      options: [
        { id: 'a', text: '护照', subText: 'hùzhào (Hộ chiếu)', isCorrect: true },
        { id: 'b', text: '房卡', subText: 'fángkǎ (Thẻ phòng)', isCorrect: false },
        { id: 'c', text: '早餐', subText: 'zǎocān (Bữa sáng)', isCorrect: false }
      ],
      audioText: '请给我看您的护照'
    },
    {
      id: 19,
      type: 'intro',
      prompt: 'Học từ mới: Wi-Fi / Mạng không dây',
      targetHanzi: '无线网',
      targetPinyin: 'wúxiàn wǎng',
      hanViet: 'Vô tuyến võng',
      targetVietnamese: 'Mạng Wi-Fi (hoặc gọi là WiFi)',
      audioText: '无线网'
    },
    {
      id: 20,
      type: 'choice',
      prompt: 'Muốn hỏi mật khẩu Wi-Fi, bạn nói:',
      options: [
        { id: 'a', text: 'WiFi密码是多少？', subText: 'WiFi mìmǎ shì duōshao?', isCorrect: true },
        { id: 'b', text: '这是WiFi吗？', subText: 'Zhè shì WiFi ma?', isCorrect: false },
        { id: 'c', text: '我想买WiFi', subText: 'Wǒ xiǎng mǎi WiFi', isCorrect: false },
        { id: 'd', text: 'WiFi多少钱？', subText: 'WiFi duōshao qián?', isCorrect: false }
      ],
      audioText: 'WiFi密码是多少'
    },
    {
      id: 21,
      type: 'scramble',
      prompt: 'Ghép câu: "Phòng này rất sạch sẽ"',
      targetVietnamese: 'Phòng này rất sạch sẽ',
      correctOrder: ['这个房间', '很干净'],
      scrambleWords: ['很干净', '这个房间', '太大', '退房'],
      audioText: '这个房间很干净'
    },
    {
      id: 22,
      type: 'listen',
      prompt: 'Lắng nghe xem khách sạn phục vụ bữa sáng lúc mấy giờ:',
      audioText: '早餐七点开始',
      options: [
        { id: 'a', text: 'Bữa sáng 6 giờ bắt đầu', isCorrect: false },
        { id: 'b', text: 'Bữa sáng 7 giờ bắt đầu', isCorrect: true },
        { id: 'c', text: 'Bữa sáng 8 giờ bắt đầu', isCorrect: false },
        { id: 'd', text: 'Bữa sáng 9 giờ bắt đầu', isCorrect: false }
      ]
    },
    {
      id: 23,
      type: 'choice',
      prompt: 'Từ "密码" (mìmǎ) trong tiếng Trung nghĩa là gì?',
      options: [
        { id: 'a', text: 'Mật khẩu / Mật mã', isCorrect: true },
        { id: 'b', text: 'Số phòng', isCorrect: false },
        { id: 'c', text: 'Họ tên', isCorrect: false },
        { id: 'd', text: 'Số điện thoại', isCorrect: false }
      ]
    },
    {
      id: 24,
      type: 'scramble',
      prompt: 'Ghép câu: "Khách sạn ở đâu?"',
      targetVietnamese: 'Khách sạn ở đâu?',
      correctOrder: ['酒店', '在', '哪儿'],
      scrambleWords: ['在', '哪儿', '酒店', '这儿', '请问'],
      audioText: '酒店在哪儿'
    },
    {
      id: 25,
      type: 'speak',
      prompt: 'Thử thách cuối bài: Bấm micro và nói câu nhận phòng:',
      targetHanzi: '你好，我有预订房间',
      targetPinyin: 'Nǐ hǎo, wǒ yǒu yùdìng fángjiān!',
      targetVietnamese: 'Xin chào, tôi có đặt phòng trước!',
      audioText: '你好我有预订房间'
    }
  ]
};

// =========================================================================
// BÀI 7: KHÁM BỆNH & HIỆU THUỐC (25 CÂU)
// =========================================================================
export const LEVEL_7_LESSON: InteractiveLesson = {
  levelNumber: 7,
  levelTitle: "Khám bệnh & Hiệu thuốc",
  description: "Trọn bộ 25 bài tập tương tác: Bệnh viện, triệu chứng ốm, sốt, đau đầu, bác sĩ, mua thuốc và dặn dò liều lượng.",
  exercises: [
    {
      id: 1,
      type: 'intro',
      prompt: 'Học từ mới: Bệnh viện',
      targetHanzi: '医院',
      targetPinyin: 'yīyuàn',
      hanViet: 'Y viện',
      targetVietnamese: 'Bệnh viện',
      audioText: '医院'
    },
    {
      id: 2,
      type: 'choice',
      prompt: 'Từ "医生" (yīshēng) nghĩa là gì?',
      options: [
        { id: 'a', text: 'Y tá', isCorrect: false },
        { id: 'b', text: 'Bác sĩ', isCorrect: true },
        { id: 'c', text: 'Bệnh nhân', isCorrect: false },
        { id: 'd', text: 'Thầy giáo', isCorrect: false }
      ],
      audioText: '医生'
    },
    {
      id: 3,
      type: 'intro',
      prompt: 'Học từ mới: Bị ốm / Sinh bệnh',
      targetHanzi: '生病',
      targetPinyin: 'shēngbìng',
      hanViet: 'Sinh bệnh',
      targetVietnamese: 'Bị ốm, bị ốm đau',
      audioText: '生病'
    },
    {
      id: 4,
      type: 'scramble',
      prompt: 'Ghép câu: "Hôm nay tôi bị ốm rồi"',
      targetVietnamese: 'Hôm nay tôi bị ốm rồi',
      correctOrder: ['今天', '我', '生病了'],
      scrambleWords: ['生病了', '今天', '我', '很', '医生'],
      audioText: '今天我生病了'
    },
    {
      id: 5,
      type: 'intro',
      prompt: 'Học từ mới: Đau đầu',
      targetHanzi: '头疼',
      targetPinyin: 'tóuténg',
      hanViet: 'Đầu thống',
      targetVietnamese: 'Đau đầu, nhức đầu',
      audioText: '头疼'
    },
    {
      id: 6,
      type: 'choice',
      prompt: 'Khi muốn nói "Tôi rất đau đầu", bạn nói:',
      options: [
        { id: 'a', text: '我很头疼', subText: 'Wǒ hěn tóuténg', isCorrect: true },
        { id: 'b', text: '我没有头', subText: '', isCorrect: false },
        { id: 'c', text: '头疼很好', subText: '', isCorrect: false },
        { id: 'd', text: '他是头疼', subText: '', isCorrect: false }
      ],
      audioText: '我很头疼'
    },
    {
      id: 7,
      type: 'intro',
      prompt: 'Học từ mới: Bị sốt',
      targetHanzi: '发烧',
      targetPinyin: 'fāshāo',
      hanViet: 'Phát thiêu',
      targetVietnamese: 'Bị sốt, phát sốt',
      audioText: '发烧'
    },
    {
      id: 8,
      type: 'listen',
      prompt: 'Lắng nghe bác sĩ hỏi gì:',
      audioText: '你哪里不舒服',
      options: [
        { id: 'a', text: 'Bạn muốn đi đâu ăn?', isCorrect: false },
        { id: 'b', text: 'Bạn cảm thấy khó chịu ở đâu?', isCorrect: true },
        { id: 'c', text: 'Bạn mua thuốc gì?', isCorrect: false },
        { id: 'd', text: 'Bạn có bảo hiểm không?', isCorrect: false }
      ]
    },
    {
      id: 9,
      type: 'intro',
      prompt: 'Học từ mới: Thuốc men',
      targetHanzi: '药',
      targetPinyin: 'yào',
      hanViet: 'Dược (trong đông dược, tân dược)',
      targetVietnamese: 'Thuốc',
      audioText: '药'
    },
    {
      id: 10,
      type: 'scramble',
      prompt: 'Ghép câu: "Nhớ uống thuốc đúng giờ nhé"',
      targetVietnamese: 'Nhớ uống thuốc đúng giờ nhé',
      correctOrder: ['记得', '吃药'],
      scrambleWords: ['吃药', '记得', '生病', '头疼'],
      audioText: '记得吃药'
    },
    {
      id: 11,
      type: 'intro',
      prompt: 'Học từ mới: Uống thuốc (người Trung nói là "Ăn thuốc")',
      targetHanzi: '吃药',
      targetPinyin: 'chī yào',
      hanViet: 'Ngật dược',
      targetVietnamese: 'Uống thuốc (dùng chữ 吃 = ăn)',
      audioText: '吃药',
      tips: 'Lưu ý người Hán dùng "ăn thuốc" (吃药), không dùng 喝药 trừ thuốc nước!'
    },
    {
      id: 12,
      type: 'choice',
      prompt: 'Người Trung Quốc nói hành động "Uống thuốc" bằng cụm từ nào?',
      options: [
        { id: 'a', text: '吃药 (chī yào)', subText: 'Dùng từ ĂN thuốc', isCorrect: true },
        { id: 'b', text: '喝水 (hē shuǐ)', subText: '', isCorrect: false },
        { id: 'c', text: '看药 (kàn yào)', subText: '', isCorrect: false },
        { id: 'd', text: '买水 (mǎi shuǐ)', subText: '', isCorrect: false }
      ]
    },
    {
      id: 13,
      type: 'intro',
      prompt: 'Học từ mới: Cảm cúm',
      targetHanzi: '感冒',
      targetPinyin: 'gǎnmào',
      hanViet: 'Cảm mạo',
      targetVietnamese: 'Cảm cúm, bị nhiễm lạnh',
      audioText: '感冒'
    },
    {
      id: 14,
      type: 'scramble',
      prompt: 'Ghép câu: "Tôi bị cảm cúm rồi"',
      targetVietnamese: 'Tôi bị cảm cúm rồi',
      correctOrder: ['我', '感冒了'],
      scrambleWords: ['感冒了', '我', '很', '医生'],
      audioText: '我感冒了'
    },
    {
      id: 15,
      type: 'intro',
      prompt: 'Học từ mới: Hiệu thuốc',
      targetHanzi: '药店',
      targetPinyin: 'yàodiàn',
      hanViet: 'Dược điếm',
      targetVietnamese: 'Hiệu thuốc / Nhà thuốc',
      audioText: '药店'
    },
    {
      id: 16,
      type: 'choice',
      prompt: 'Muốn hỏi: "Gần đây có hiệu thuốc không?", bạn nói:',
      options: [
        { id: 'a', text: '附近有药店吗？', subText: 'Fùjìn yǒu yàodiàn ma?', isCorrect: true },
        { id: 'b', text: '我想去医院', subText: '', isCorrect: false },
        { id: 'c', text: '药店多少钱？', subText: '', isCorrect: false },
        { id: 'd', text: '这是药店吗？', subText: '', isCorrect: false }
      ],
      audioText: '附近有药店吗'
    },
    {
      id: 17,
      type: 'intro',
      prompt: 'Học từ mới: Khỏe lại / Bình phục',
      targetHanzi: '康复',
      targetPinyin: 'kāngfù',
      hanViet: 'Khang phục',
      targetVietnamese: 'Hồi phục sức khỏe',
      audioText: '康复'
    },
    {
      id: 18,
      type: 'fill',
      prompt: 'Điền vào chỗ trống: "祝你早日____ (chúc bạn sớm bình phục)"',
      dialogueContext: 'Thăm người ốm',
      blankPrefix: '祝你早日',
      blankSuffix: '！',
      options: [
        { id: 'a', text: '康复', subText: 'kāngfù (Hồi phục)', isCorrect: true },
        { id: 'b', text: '发烧', subText: 'fāshāo (Sốt)', isCorrect: false },
        { id: 'c', text: '生病', subText: 'shēngbìng (Ốm)', isCorrect: false }
      ],
      audioText: '祝你早日康复'
    },
    {
      id: 19,
      type: 'intro',
      prompt: 'Học từ mới: Nghỉ ngơi',
      targetHanzi: '休息',
      targetPinyin: 'xiūxi',
      hanViet: 'Hưu tức',
      targetVietnamese: 'Nghỉ ngơi',
      audioText: '休息'
    },
    {
      id: 20,
      type: 'choice',
      prompt: 'Câu "多喝水，多休息" khuyên điều gì?',
      options: [
        { id: 'a', text: 'Uống nhiều nước, nghỉ ngơi nhiều', isCorrect: true },
        { id: 'b', text: 'Ăn nhiều cơm, đi ngủ sớm', isCorrect: false },
        { id: 'c', text: 'Uống thuốc ngay lập tức', isCorrect: false },
        { id: 'd', text: 'Đi bệnh viện ngay', isCorrect: false }
      ],
      audioText: '多喝水多休息'
    },
    {
      id: 21,
      type: 'scramble',
      prompt: 'Ghép câu: "Mỗi ngày uống 3 lần"',
      targetVietnamese: 'Mỗi ngày uống 3 lần',
      correctOrder: ['一天', '吃三次'],
      scrambleWords: ['吃三次', '一天', '两次', '四次'],
      audioText: '一天吃三次'
    },
    {
      id: 22,
      type: 'listen',
      prompt: 'Lắng nghe bác sĩ dặn liều lượng thuốc:',
      audioText: '一次吃两片',
      options: [
        { id: 'a', text: 'Mỗi lần uống 1 viên', isCorrect: false },
        { id: 'b', text: 'Mỗi lần uống 2 viên', isCorrect: true },
        { id: 'c', text: 'Mỗi lần uống 3 viên', isCorrect: false },
        { id: 'd', text: 'Mỗi lần uống 4 viên', isCorrect: false }
      ]
    },
    {
      id: 23,
      type: 'choice',
      prompt: 'Từ "舒服" (shūfu) trong tiếng Trung nghĩa là:',
      options: [
        { id: 'a', text: 'Dễ chịu / Khỏe khoắn', isCorrect: true },
        { id: 'b', text: 'Đau đớn', isCorrect: false },
        { id: 'c', text: 'Mệt mỏi', isCorrect: false },
        { id: 'd', text: 'Lo lắng', isCorrect: false }
      ]
    },
    {
      id: 24,
      type: 'scramble',
      prompt: 'Ghép câu: "Tôi cảm thấy không được khỏe"',
      targetVietnamese: 'Tôi cảm thấy không được khỏe',
      correctOrder: ['我觉得', '不舒服'],
      scrambleWords: ['不舒服', '我觉得', '很舒服', '生病'],
      audioText: '我觉得不舒服'
    },
    {
      id: 25,
      type: 'speak',
      prompt: 'Thử thách cuối bài: Bấm micro và miêu tả triệu chứng:',
      targetHanzi: '我头疼，还有点儿发烧',
      targetPinyin: 'Wǒ tóuténg, hái yǒudiǎnr fāshāo!',
      targetVietnamese: 'Tôi bị đau đầu, và còn hơi sốt nữa!',
      audioText: '我头疼还有点儿发烧'
    }
  ]
};

// =========================================================================
// BÀI 8: CÔNG VIỆC & VĂN PHÒNG (25 CÂU)
// =========================================================================
export const LEVEL_8_LESSON: InteractiveLesson = {
  levelNumber: 8,
  levelTitle: "Công việc & Văn phòng",
  description: "Trọn bộ 25 bài tập tương tác: Công ty, họp hành, báo cáo, đồng nghiệp, giám đốc và giao tiếp nơi công sở.",
  exercises: [
    {
      id: 1,
      type: 'intro',
      prompt: 'Học từ mới: Công ty',
      targetHanzi: '公司',
      targetPinyin: 'gōngsī',
      hanViet: 'Công ty',
      targetVietnamese: 'Công ty, doanh nghiệp',
      audioText: '公司'
    },
    {
      id: 2,
      type: 'choice',
      prompt: 'Từ "经理" (jīnglǐ) trong công ty nghĩa là chức vụ gì?',
      options: [
        { id: 'a', text: 'Giám đốc / Quản lý', isCorrect: true },
        { id: 'b', text: 'Nhân viên bảo vệ', isCorrect: false },
        { id: 'c', text: 'Thực tập sinh', isCorrect: false },
        { id: 'd', text: 'Kế toán', isCorrect: false }
      ],
      audioText: '经理'
    },
    {
      id: 3,
      type: 'intro',
      prompt: 'Học từ mới: Họp hành / Mở cuộc họp',
      targetHanzi: '开会',
      targetPinyin: 'kāihuì',
      hanViet: 'Khai hội',
      targetVietnamese: 'Họp hành',
      audioText: '开会'
    },
    {
      id: 4,
      type: 'scramble',
      prompt: 'Ghép câu: "Buổi chiều chúng ta có cuộc họp"',
      targetVietnamese: 'Buổi chiều chúng ta có cuộc họp',
      correctOrder: ['下午', '我们', '开会'],
      scrambleWords: ['开会', '我们', '下午', '明天', '工作'],
      audioText: '下午我们开会'
    },
    {
      id: 5,
      type: 'intro',
      prompt: 'Học từ mới: Đồng nghiệp',
      targetHanzi: '同事',
      targetPinyin: 'tóngshì',
      hanViet: 'Đồng sự',
      targetVietnamese: 'Đồng nghiệp cùng công ty',
      audioText: '同事'
    },
    {
      id: 6,
      type: 'choice',
      prompt: 'Khi muốn giới thiệu "Đây là đồng nghiệp của tôi", bạn nói:',
      options: [
        { id: 'a', text: '这是我的同事', subText: 'Zhè shì wǒ de tóngshì', isCorrect: true },
        { id: 'b', text: '这是我的公司', subText: '', isCorrect: false },
        { id: 'c', text: '他是经理', subText: '', isCorrect: false },
        { id: 'd', text: '同事很好', subText: '', isCorrect: false }
      ],
      audioText: '这是我的同事'
    },
    {
      id: 7,
      type: 'intro',
      prompt: 'Học từ mới: Chuẩn bị',
      targetHanzi: '准备',
      targetPinyin: 'zhǔnbèi',
      hanViet: 'Chuẩn bị',
      targetVietnamese: 'Chuẩn bị xong xuôi',
      audioText: '准备'
    },
    {
      id: 8,
      type: 'listen',
      prompt: 'Lắng nghe xem người nói đã chuẩn bị xong chưa:',
      audioText: '我已经准备好了',
      options: [
        { id: 'a', text: 'Tôi chưa chuẩn bị xong', isCorrect: false },
        { id: 'b', text: 'Tôi đã chuẩn bị xong xuôi rồi', isCorrect: true },
        { id: 'c', text: 'Tôi không muốn chuẩn bị', isCorrect: false },
        { id: 'd', text: 'Tôi đang chuẩn bị', isCorrect: false }
      ]
    },
    {
      id: 9,
      type: 'intro',
      prompt: 'Học từ mới: Tài liệu / Văn kiện',
      targetHanzi: '文件',
      targetPinyin: 'wénjiàn',
      hanViet: 'Văn kiện',
      targetVietnamese: 'Tài liệu, hồ sơ',
      audioText: '文件'
    },
    {
      id: 10,
      type: 'scramble',
      prompt: 'Ghép câu: "Gửi tài liệu cho tôi nhé"',
      targetVietnamese: 'Gửi tài liệu cho tôi nhé',
      correctOrder: ['把文件', '发给我'],
      scrambleWords: ['发给我', '把文件', '开会', '公司'],
      audioText: '把文件发给我'
    },
    {
      id: 11,
      type: 'intro',
      prompt: 'Học từ mới: Đi làm / Vào ca',
      targetHanzi: '上班',
      targetPinyin: 'shàngbān',
      hanViet: 'Thượng ban',
      targetVietnamese: 'Đi làm việc',
      audioText: '上班'
    },
    {
      id: 12,
      type: 'choice',
      prompt: 'Từ "下班" (xiàbān) nghĩa là gì?',
      options: [
        { id: 'a', text: 'Tan ca / Tan sở làm', isCorrect: true },
        { id: 'b', text: 'Vào ca làm', isCorrect: false },
        { id: 'c', text: 'Nghỉ trưa', isCorrect: false },
        { id: 'd', text: 'Đi công tác', isCorrect: false }
      ],
      audioText: '下班'
    },
    {
      id: 13,
      type: 'intro',
      prompt: 'Học từ mới: Tăng ca',
      targetHanzi: '加班',
      targetPinyin: 'jiābān',
      hanViet: 'Gia ban',
      targetVietnamese: 'Làm thêm giờ, tăng ca',
      audioText: '加班'
    },
    {
      id: 14,
      type: 'scramble',
      prompt: 'Ghép câu: "Tối nay tôi phải tăng ca"',
      targetVietnamese: 'Tối nay tôi phải tăng ca',
      correctOrder: ['今晚', '我要', '加班'],
      scrambleWords: ['加班', '我要', '今晚', '下班', '开会'],
      audioText: '今晚我要加班'
    },
    {
      id: 15,
      type: 'intro',
      prompt: 'Học từ mới: Hòm thư / Email',
      targetHanzi: '邮箱',
      targetPinyin: 'yóuxiāng',
      hanViet: 'Bưu tương',
      targetVietnamese: 'Hòm thư điện tử, Email',
      audioText: '邮箱'
    },
    {
      id: 16,
      type: 'choice',
      prompt: 'Câu "发到我的邮箱" nghĩa là gì?',
      options: [
        { id: 'a', text: 'Gửi vào hòm thư email của tôi', isCorrect: true },
        { id: 'b', text: 'Gọi điện thoại cho tôi', isCorrect: false },
        { id: 'c', text: 'Mang giấy tờ đến công ty', isCorrect: false },
        { id: 'd', text: 'Xem tin nhắn của tôi', isCorrect: false }
      ],
      audioText: '发到我的邮箱'
    },
    {
      id: 17,
      type: 'intro',
      prompt: 'Học từ mới: Dự án / Hạng mục',
      targetHanzi: '项目',
      targetPinyin: 'xiàngmù',
      hanViet: 'Hạng mục',
      targetVietnamese: 'Dự án (Project)',
      audioText: '项目'
    },
    {
      id: 18,
      type: 'fill',
      prompt: 'Điền vào chỗ trống: "这个____很重要 (dự án này rất quan trọng)"',
      dialogueContext: 'Giám đốc nhấn mạnh công việc',
      blankPrefix: '这个',
      blankSuffix: '很重要。',
      options: [
        { id: 'a', text: '项目', subText: 'xiàngmù (Dự án)', isCorrect: true },
        { id: 'b', text: '咖啡', subText: '', isCorrect: false },
        { id: 'c', text: '周末', subText: '', isCorrect: false }
      ],
      audioText: '这个项目很重要'
    },
    {
      id: 19,
      type: 'intro',
      prompt: 'Học từ mới: Thành công',
      targetHanzi: '成功',
      targetPinyin: 'chénggōng',
      hanViet: 'Thành công',
      targetVietnamese: 'Thành công, thắng lợi',
      audioText: '成功'
    },
    {
      id: 20,
      type: 'choice',
      prompt: 'Câu chúc "祝你工作顺利" nghĩa là:',
      options: [
        { id: 'a', text: 'Chúc công việc của bạn thuận buồm xuôi gió', isCorrect: true },
        { id: 'b', text: 'Chúc bạn sinh nhật vui vẻ', isCorrect: false },
        { id: 'c', text: 'Chúc bạn lên chức giám đốc', isCorrect: false },
        { id: 'd', text: 'Chúc bạn năm mới phát tài', isCorrect: false }
      ],
      audioText: '祝你工作顺利'
    },
    {
      id: 21,
      type: 'scramble',
      prompt: 'Ghép câu: "Hợp tác vui vẻ nhé"',
      targetVietnamese: 'Hợp tác vui vẻ nhé',
      correctOrder: ['合作', '愉快'],
      scrambleWords: ['愉快', '合作', '开会', '成功'],
      audioText: '合作愉快'
    },
    {
      id: 22,
      type: 'listen',
      prompt: 'Lắng nghe xem giờ họp là mấy giờ:',
      audioText: '下午两点开会',
      options: [
        { id: 'a', text: 'Chiều 1 giờ họp', isCorrect: false },
        { id: 'b', text: 'Chiều 2 giờ họp', isCorrect: true },
        { id: 'c', text: 'Chiều 3 giờ họp', isCorrect: false },
        { id: 'd', text: 'Chiều 4 giờ họp', isCorrect: false }
      ]
    },
    {
      id: 23,
      type: 'choice',
      prompt: 'Từ "电脑" (diànnǎo) nơi công sở nghĩa là vật dụng gì?',
      options: [
        { id: 'a', text: 'Máy vi tính (Laptop / PC)', isCorrect: true },
        { id: 'b', text: 'Máy in giấy', isCorrect: false },
        { id: 'c', text: 'Điện thoại bàn', isCorrect: false },
        { id: 'd', text: 'Máy chiếu slide', isCorrect: false }
      ],
      audioText: '电脑'
    },
    {
      id: 24,
      type: 'scramble',
      prompt: 'Ghép câu: "Tôi đi làm đây"',
      targetVietnamese: 'Tôi đi làm đây',
      correctOrder: ['我去', '上班了'],
      scrambleWords: ['上班了', '我去', '回家', '开会'],
      audioText: '我去上班了'
    },
    {
      id: 25,
      type: 'speak',
      prompt: 'Thử thách cuối bài: Bấm micro và báo cáo với giám đốc:',
      targetHanzi: '我已经准备好文件了',
      targetPinyin: 'Wǒ yǐjīng zhǔnbèi hǎo wénjiàn le!',
      targetVietnamese: 'Tôi đã chuẩn bị xong tài liệu rồi ạ!',
      audioText: '我已经准备好文件了'
    }
  ]
};

// =========================================================================
// BÀI 9: HẸN HÒ & SỞ THÍCH (25 CÂU)
// =========================================================================
export const LEVEL_9_LESSON: InteractiveLesson = {
  levelNumber: 9,
  levelTitle: "Hẹn hò & Sở thích",
  description: "Trọn bộ 25 bài tập tương tác: Cuối tuần, rảnh rỗi, cà phê, xem phim, nghe nhạc, mời bạn bè đi chơi.",
  exercises: [
    {
      id: 1,
      type: 'intro',
      prompt: 'Học từ mới: Cuối tuần',
      targetHanzi: '周末',
      targetPinyin: 'zhōumò',
      hanViet: 'Chu mạt',
      targetVietnamese: 'Cuối tuần (Thứ 7 & Chủ Nhật)',
      audioText: '周末'
    },
    {
      id: 2,
      type: 'choice',
      prompt: 'Từ "周末愉快" (zhōumò yúkuài) có nghĩa là gì?',
      options: [
        { id: 'a', text: 'Chúc cuối tuần vui vẻ!', isCorrect: true },
        { id: 'b', text: 'Cuối tuần này tôi bận', isCorrect: false },
        { id: 'c', text: 'Cuối tuần bạn đi đâu?', isCorrect: false },
        { id: 'd', text: 'Hẹn gặp thứ hai', isCorrect: false }
      ],
      audioText: '周末愉快'
    },
    {
      id: 3,
      type: 'intro',
      prompt: 'Học từ mới: Cà phê',
      targetHanzi: '咖啡',
      targetPinyin: 'kāfēi',
      hanViet: 'Gia phi',
      targetVietnamese: 'Cà phê',
      audioText: '咖啡'
    },
    {
      id: 4,
      type: 'scramble',
      prompt: 'Ghép câu: "Chúng ta đi uống cà phê nhé"',
      targetVietnamese: 'Chúng ta đi uống cà phê nhé',
      correctOrder: ['我们去', '喝咖啡吧'],
      scrambleWords: ['喝咖啡吧', '我们去', '看电影', '周末'],
      audioText: '我们去喝咖啡吧'
    },
    {
      id: 5,
      type: 'intro',
      prompt: 'Học từ mới: Phim ảnh',
      targetHanzi: '电影',
      targetPinyin: 'diànyǐng',
      hanViet: 'Điện ảnh',
      targetVietnamese: 'Phim ảnh / Xem phim',
      audioText: '电影'
    },
    {
      id: 6,
      type: 'choice',
      prompt: 'Cụm từ "看电影" (kàn diànyǐng) nghĩa là hành động gì?',
      options: [
        { id: 'a', text: 'Xem phim', isCorrect: true },
        { id: 'b', text: 'Nghe nhạc', isCorrect: false },
        { id: 'c', text: 'Đọc sách', isCorrect: false },
        { id: 'd', text: 'Chụp ảnh', isCorrect: false }
      ],
      audioText: '看电影'
    },
    {
      id: 7,
      type: 'intro',
      prompt: 'Học từ mới: Có thời gian rảnh',
      targetHanzi: '有空',
      targetPinyin: 'yǒu kòng',
      hanViet: 'Hữu không',
      targetVietnamese: 'Có rảnh rỗi / Rảnh thời gian',
      audioText: '有空'
    },
    {
      id: 8,
      type: 'listen',
      prompt: 'Lắng nghe xem người bạn hỏi gì:',
      audioText: '明天你有空吗',
      options: [
        { id: 'a', text: 'Ngày mai bạn có đi học không?', isCorrect: false },
        { id: 'b', text: 'Ngày mai bạn có rảnh không?', isCorrect: true },
        { id: 'c', text: 'Ngày mai bạn đi đâu chơi?', isCorrect: false },
        { id: 'd', text: 'Ngày mai bạn mấy giờ dậy?', isCorrect: false }
      ]
    },
    {
      id: 9,
      type: 'intro',
      prompt: 'Học từ mới: Dự định / Lên kế hoạch',
      targetHanzi: '打算',
      targetPinyin: 'dǎsuàn',
      hanViet: 'Đả toán',
      targetVietnamese: 'Dự định, tính toán làm gì',
      audioText: '打算'
    },
    {
      id: 10,
      type: 'scramble',
      prompt: 'Ghép câu: "Cuối tuần bạn định làm gì?"',
      targetVietnamese: 'Cuối tuần bạn định làm gì?',
      correctOrder: ['周末', '你打算', '做什么'],
      scrambleWords: ['做什么', '你打算', '周末', '喝咖啡'],
      audioText: '周末你打算做什么'
    },
    {
      id: 11,
      type: 'intro',
      prompt: 'Học từ mới: Âm nhạc',
      targetHanzi: '音乐',
      targetPinyin: 'yīnyuè',
      hanViet: 'Âm nhạc',
      targetVietnamese: 'Âm nhạc',
      audioText: '音乐'
    },
    {
      id: 12,
      type: 'choice',
      prompt: 'Cụm từ "听音乐" (tīng yīnyuè) nghĩa là gì?',
      options: [
        { id: 'a', text: 'Nghe nhạc', isCorrect: true },
        { id: 'b', text: 'Hát bài hát', isCorrect: false },
        { id: 'c', text: 'Chơi đàn', isCorrect: false },
        { id: 'd', text: 'Xem kịch', isCorrect: false }
      ],
      audioText: '听音乐'
    },
    {
      id: 13,
      type: 'intro',
      prompt: 'Học từ mới: Đi dạo phố / Shopping',
      targetHanzi: '逛街',
      targetPinyin: 'guàngjiē',
      hanViet: 'Cuống nhai',
      targetVietnamese: 'Đi dạo phố, lượn lờ mua sắm',
      audioText: '逛街'
    },
    {
      id: 14,
      type: 'scramble',
      prompt: 'Ghép câu: "Tôi thích đi dạo phố"',
      targetVietnamese: 'Tôi thích đi dạo phố',
      correctOrder: ['我喜欢', '逛街'],
      scrambleWords: ['逛街', '我喜欢', '工作', '开会'],
      audioText: '我喜欢逛街'
    },
    {
      id: 15,
      type: 'intro',
      prompt: 'Học từ mới: Sở thích',
      targetHanzi: '爱好',
      targetPinyin: 'àihào',
      hanViet: 'Ái hảo',
      targetVietnamese: 'Sở thích, đam mê',
      audioText: '爱好'
    },
    {
      id: 16,
      type: 'choice',
      prompt: 'Muốn hỏi "Sở thích của bạn là gì?", bạn nói:',
      options: [
        { id: 'a', text: '你的爱好是什么？', subText: 'Nǐ de àihào shì shénme?', isCorrect: true },
        { id: 'b', text: '你喜欢谁？', subText: '', isCorrect: false },
        { id: 'c', text: '你有空吗？', subText: '', isCorrect: false },
        { id: 'd', text: '你想买什么？', subText: '', isCorrect: false }
      ],
      audioText: '你的爱好是什么'
    },
    {
      id: 17,
      type: 'intro',
      prompt: 'Học từ mới: Tuyệt vời / Rất cừ',
      targetHanzi: '太棒了',
      targetPinyin: 'tài bàng le',
      hanViet: 'Thái bổng liễu',
      targetVietnamese: 'Quá đỉnh, tuyệt vời ông mặt trời!',
      audioText: '太棒了'
    },
    {
      id: 18,
      type: 'fill',
      prompt: 'Điền vào chỗ trống: "听到这个消息，真的____ (quá tuyệt)！"',
      dialogueContext: 'Được bạn rủ đi chơi đúng chỗ mình thích',
      blankPrefix: '听到这个消息，真的',
      blankSuffix: '！',
      options: [
        { id: 'a', text: '太棒了', subText: 'tài bàng le (Quá tuyệt)', isCorrect: true },
        { id: 'b', text: '头疼', subText: '', isCorrect: false },
        { id: 'c', text: '开会', subText: '', isCorrect: false }
      ],
      audioText: '太棒了'
    },
    {
      id: 19,
      type: 'intro',
      prompt: 'Học từ mới: Cùng nhau / Với nhau',
      targetHanzi: '一起',
      targetPinyin: 'yìqǐ',
      hanViet: 'Nhất khởi',
      targetVietnamese: 'Cùng nhau, chung một chỗ',
      audioText: '一起'
    },
    {
      id: 20,
      type: 'choice',
      prompt: 'Câu "我们一起去吧" có nghĩa là gì?',
      options: [
        { id: 'a', text: 'Chúng mình cùng nhau đi nhé!', isCorrect: true },
        { id: 'b', text: 'Tôi đi một mình thôi', isCorrect: false },
        { id: 'c', text: 'Bạn đi trước đi nhé', isCorrect: false },
        { id: 'd', text: 'Ngày mai không đi nữa', isCorrect: false }
      ],
      audioText: '我们一起去吧'
    },
    {
      id: 21,
      type: 'scramble',
      prompt: 'Ghép câu: "Chiều thứ Bảy gặp nhau nhé"',
      targetVietnamese: 'Chiều thứ Bảy gặp nhau nhé',
      correctOrder: ['周六下午', '见'],
      scrambleWords: ['见', '周六下午', '周日', '咖啡'],
      audioText: '周六下午见'
    },
    {
      id: 22,
      type: 'listen',
      prompt: 'Lắng nghe xem hai bạn hẹn gặp ở đâu:',
      audioText: '在咖啡馆见',
      options: [
        { id: 'a', text: 'Gặp nhau ở rạp chiếu phim', isCorrect: false },
        { id: 'b', text: 'Gặp nhau ở quán cà phê', isCorrect: true },
        { id: 'c', text: 'Gặp nhau ở cổng công ty', isCorrect: false },
        { id: 'd', text: 'Gặp nhau ở nhà ga', isCorrect: false }
      ]
    },
    {
      id: 23,
      type: 'choice',
      prompt: 'Từ "奶茶" (nǎichá) mà giới trẻ vô cùng yêu thích nghĩa là gì?',
      options: [
        { id: 'a', text: 'Trà sữa', isCorrect: true },
        { id: 'b', text: 'Nước ép hoa quả', isCorrect: false },
        { id: 'c', text: 'Sinh tố xoài', isCorrect: false },
        { id: 'd', text: 'Trà đào', isCorrect: false }
      ],
      audioText: '奶茶'
    },
    {
      id: 24,
      type: 'scramble',
      prompt: 'Ghép câu: "Tôi mời bạn uống trà sữa"',
      targetVietnamese: 'Tôi mời bạn uống trà sữa',
      correctOrder: ['我请你', '喝奶茶'],
      scrambleWords: ['喝奶茶', '我请你', '看电影', '咖啡'],
      audioText: '我请你喝奶茶'
    },
    {
      id: 25,
      type: 'speak',
      prompt: 'Thử thách cuối bài: Bấm micro rủ bạn đi uống cà phê:',
      targetHanzi: '我们去喝咖啡吧',
      targetPinyin: 'Wǒmen qù hē kāfēi ba!',
      targetVietnamese: 'Chúng mình cùng đi uống cà phê nhé!',
      audioText: '我们去喝咖啡吧'
    }
  ]
};

// =========================================================================
// BÀI 10: KHẨN CẤP & ĐỔI TIỀN (25 CÂU)
// =========================================================================
export const LEVEL_10_LESSON: InteractiveLesson = {
  levelNumber: 10,
  levelTitle: "Khẩn cấp & Đổi tiền",
  description: "Trọn bộ 25 bài tập tương tác: Giúp đỡ, cảnh sát, mất đồ/ví tiền, ngân hàng, tỷ giá và đổi Nhân dân tệ.",
  exercises: [
    {
      id: 1,
      type: 'intro',
      prompt: 'Học từ mới: Giúp đỡ / Cứu giúp',
      targetHanzi: '帮忙',
      targetPinyin: 'bāngmáng',
      hanViet: 'Bang mang',
      targetVietnamese: 'Giúp đỡ, tương trợ',
      audioText: '帮忙'
    },
    {
      id: 2,
      type: 'choice',
      prompt: 'Khi muốn kêu cứu hoặc nhờ giúp gấp, bạn nói:',
      options: [
        { id: 'a', text: '请帮帮我！', subText: 'Qǐng bāngbang wǒ!', isCorrect: true },
        { id: 'b', text: '你好吗？', subText: '', isCorrect: false },
        { id: 'c', text: '谢谢你！', subText: '', isCorrect: false },
        { id: 'd', text: '再见！', subText: '', isCorrect: false }
      ],
      audioText: '请帮帮我'
    },
    {
      id: 3,
      type: 'intro',
      prompt: 'Học từ mới: Cảnh sát',
      targetHanzi: '警察',
      targetPinyin: 'jǐngchá',
      hanViet: 'Cảnh sát',
      targetVietnamese: 'Cảnh sát, công an',
      audioText: '警察'
    },
    {
      id: 4,
      type: 'scramble',
      prompt: 'Ghép câu: "Mau báo cảnh sát đi!"',
      targetVietnamese: 'Mau báo cảnh sát đi!',
      correctOrder: ['快点', '报警'],
      scrambleWords: ['报警', '快点', '警察', '帮忙'],
      audioText: '快点报警'
    },
    {
      id: 5,
      type: 'intro',
      prompt: 'Học từ mới: Ví tiền',
      targetHanzi: '钱包',
      targetPinyin: 'qiánbāo',
      hanViet: 'Tiền bao',
      targetVietnamese: 'Ví tiền, bóp tiền',
      audioText: '钱包'
    },
    {
      id: 6,
      type: 'choice',
      prompt: 'Từ "丢了" (diū le) trong tiếng Trung nghĩa là gì?',
      options: [
        { id: 'a', text: 'Bị mất / Thất lạc rồi', isCorrect: true },
        { id: 'b', text: 'Tìm thấy rồi', isCorrect: false },
        { id: 'c', text: 'Rất nhiều tiền', isCorrect: false },
        { id: 'd', text: 'Mua mới rồi', isCorrect: false }
      ],
      audioText: '丢了'
    },
    {
      id: 7,
      type: 'intro',
      prompt: 'Học từ mới: Bị mất ví tiền',
      targetHanzi: '钱包丢了',
      targetPinyin: 'qiánbāo diū le',
      hanViet: 'Tiền bao đao liễu',
      targetVietnamese: 'Ví tiền bị đánh rơi mất rồi',
      audioText: '钱包丢了'
    },
    {
      id: 8,
      type: 'listen',
      prompt: 'Lắng nghe xem người gặp nạn bị rơi mất đồ gì:',
      audioText: '我的护照丢了',
      options: [
        { id: 'a', text: 'Hộ chiếu của tôi bị mất rồi', isCorrect: true },
        { id: 'b', text: 'Ví tiền của tôi bị mất rồi', isCorrect: false },
        { id: 'c', text: 'Điện thoại của tôi bị mất rồi', isCorrect: false },
        { id: 'd', text: 'Thẻ phòng của tôi bị mất rồi', isCorrect: false }
      ]
    },
    {
      id: 9,
      type: 'intro',
      prompt: 'Học từ mới: Ngân hàng',
      targetHanzi: '银行',
      targetPinyin: 'yínháng',
      hanViet: 'Ngân hàng',
      targetVietnamese: 'Ngân hàng',
      audioText: '银行'
    },
    {
      id: 10,
      type: 'scramble',
      prompt: 'Ghép câu: "Ngân hàng ở đâu?"',
      targetVietnamese: 'Ngân hàng ở đâu?',
      correctOrder: ['银行', '在', '哪儿'],
      scrambleWords: ['在', '哪儿', '银行', '多少钱'],
      audioText: '银行在哪儿'
    },
    {
      id: 11,
      type: 'intro',
      prompt: 'Học từ mới: Đổi tiền',
      targetHanzi: '换钱',
      targetPinyin: 'huàn qián',
      hanViet: 'Hoán tiền',
      targetVietnamese: 'Đổi tiền (ngoại tệ)',
      audioText: '换钱'
    },
    {
      id: 12,
      type: 'choice',
      prompt: 'Muốn nói "Tôi muốn đổi tiền", bạn chọn câu nào?',
      options: [
        { id: 'a', text: '我想换钱', subText: 'Wǒ xiǎng huàn qián', isCorrect: true },
        { id: 'b', text: '我有钱包', subText: '', isCorrect: false },
        { id: 'c', text: '银行很好', subText: '', isCorrect: false },
        { id: 'd', text: '钱丢了', subText: '', isCorrect: false }
      ],
      audioText: '我想换钱'
    },
    {
      id: 13,
      type: 'intro',
      prompt: 'Học từ mới: Nhân dân tệ (Đơn vị tiền TQ)',
      targetHanzi: '人民币',
      targetPinyin: 'rénmínbì',
      hanViet: 'Nhân dân tệ',
      targetVietnamese: 'Đồng Nhân dân tệ (RMB / tệ)',
      audioText: '人民币'
    },
    {
      id: 14,
      type: 'scramble',
      prompt: 'Ghép câu: "Đổi sang Nhân dân tệ"',
      targetVietnamese: 'Đổi sang Nhân dân tệ',
      correctOrder: ['换成', '人民币'],
      scrambleWords: ['人民币', '换成', '银行', '多少钱'],
      audioText: '换成人民币'
    },
    {
      id: 15,
      type: 'intro',
      prompt: 'Học từ mới: Tỷ giá hối đoái',
      targetHanzi: '汇率',
      targetPinyin: 'huìlǜ',
      hanViet: 'Hối suất',
      targetVietnamese: 'Tỷ giá hối đoái',
      audioText: '汇率'
    },
    {
      id: 16,
      type: 'choice',
      prompt: 'Muốn hỏi "Hôm nay tỷ giá là bao nhiêu?", bạn nói:',
      options: [
        { id: 'a', text: '今天的汇率是多少？', subText: 'Jīntiān de huìlǜ shì duōshao?', isCorrect: true },
        { id: 'b', text: '你换多少钱？', subText: '', isCorrect: false },
        { id: 'c', text: '这是人民币吗？', subText: '', isCorrect: false },
        { id: 'd', text: '银行开门了吗？', subText: '', isCorrect: false }
      ],
      audioText: '今天的汇率是多少'
    },
    {
      id: 17,
      type: 'intro',
      prompt: 'Học từ mới: Đừng lo lắng / Đừng cuống',
      targetHanzi: '别着急',
      targetPinyin: 'bié zháojí',
      hanViet: 'Biệt trước cấp',
      targetVietnamese: 'Bình tĩnh, đừng nóng vội lo lắng',
      audioText: '别着急'
    },
    {
      id: 18,
      type: 'fill',
      prompt: 'Điền vào chỗ trống: "____，警察会帮你的 (Đừng lo, cảnh sát sẽ giúp bạn)！"',
      dialogueContext: 'Trấn an người gặp nạn',
      blankPrefix: '',
      blankSuffix: '，警察会帮你的。',
      options: [
        { id: 'a', text: '别着急', subText: 'bié zháojí (Đừng lo)', isCorrect: true },
        { id: 'b', text: '太好了', subText: '', isCorrect: false },
        { id: 'c', text: '再见', subText: '', isCorrect: false }
      ],
      audioText: '别着急警察会帮你的'
    },
    {
      id: 19,
      type: 'intro',
      prompt: 'Học từ mới: Camera giám sát',
      targetHanzi: '监控',
      targetPinyin: 'jiānkòng',
      hanViet: 'Giam khống',
      targetVietnamese: 'Camera giám sát an ninh',
      audioText: '监控'
    },
    {
      id: 20,
      type: 'choice',
      prompt: 'Cảnh sát bảo "我们去查监控" nghĩa là:',
      options: [
        { id: 'a', text: 'Chúng ta đi kiểm tra camera an ninh', isCorrect: true },
        { id: 'b', text: 'Chúng ta đi đồn cảnh sát', isCorrect: false },
        { id: 'c', text: 'Chúng ta đi về khách sạn', isCorrect: false },
        { id: 'd', text: 'Chúng ta đi ngân hàng', isCorrect: false }
      ],
      audioText: '我们去查监控'
    },
    {
      id: 21,
      type: 'scramble',
      prompt: 'Ghép câu: "Đừng lo lắng nhé"',
      targetVietnamese: 'Đừng lo lắng nhé',
      correctOrder: ['你', '别着急'],
      scrambleWords: ['别着急', '你', '帮忙', '丢了'],
      audioText: '你别着急'
    },
    {
      id: 22,
      type: 'listen',
      prompt: 'Lắng nghe xem người nói đã tìm thấy đồ chưa:',
      audioText: '找到了太好了',
      options: [
        { id: 'a', text: 'Bị mất rồi, buồn quá', isCorrect: false },
        { id: 'b', text: 'Tìm thấy rồi, tuyệt quá!', isCorrect: true },
        { id: 'c', text: 'Chưa tìm thấy', isCorrect: false },
        { id: 'd', text: 'Đang đi tìm', isCorrect: false }
      ]
    },
    {
      id: 23,
      type: 'choice',
      prompt: 'Số điện thoại khẩn cấp gọi cảnh sát ở Trung Quốc là số mấy?',
      options: [
        { id: 'a', text: '110 (Số gọi cảnh sát Trung Quốc)', isCorrect: true },
        { id: 'b', text: '113', isCorrect: false },
        { id: 'c', text: '911', isCorrect: false },
        { id: 'd', text: '115', isCorrect: false }
      ]
    },
    {
      id: 24,
      type: 'scramble',
      prompt: 'Ghép câu: "Cảm ơn cảnh sát nhiều lắm!"',
      targetVietnamese: 'Cảm ơn cảnh sát nhiều lắm!',
      correctOrder: ['太感谢', '警察了'],
      scrambleWords: ['警察了', '太感谢', '帮帮我', '丢了'],
      audioText: '太感谢警察了'
    },
    {
      id: 25,
      type: 'speak',
      prompt: 'Thử thách cuối bài: Bấm micro và hô nhờ giúp đỡ:',
      targetHanzi: '请帮帮我，我的钱包丢了',
      targetPinyin: 'Qǐng bāngbang wǒ, wǒ de qiánbāo diū le!',
      targetVietnamese: 'Xin hãy giúp tôi với, ví tiền của tôi bị rơi mất rồi!',
      audioText: '请帮帮我我的钱包丢了'
    }
  ]
};
