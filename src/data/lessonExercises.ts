export type ExerciseType = 'intro' | 'choice' | 'scramble' | 'listen' | 'speak' | 'fill';

export interface Exercise {
  id: number;
  type: ExerciseType;
  prompt: string;
  audioText?: string;
  targetHanzi?: string;
  targetPinyin?: string;
  targetVietnamese?: string;
  hanViet?: string;
  tips?: string;
  options?: { id: string; text: string; subText?: string; isCorrect: boolean }[];
  scrambleWords?: string[];
  correctOrder?: string[];
  dialogueSpeaker?: string;
  dialogueContext?: string;
  blankPrefix?: string;
  blankSuffix?: string;
}

export interface InteractiveLesson {
  levelNumber: number;
  levelTitle: string;
  description: string;
  exercises: Exercise[];
}

// =========================================================================
// BÀI 1: CHÀO HỎI & LỊCH SỰ CĂN BẢN (25 CÂU)
// =========================================================================
export const LEVEL_1_LESSON: InteractiveLesson = {
  levelNumber: 1,
  levelTitle: "Chào hỏi & Lịch sự cơ bản",
  description: "Trọn bộ 25 bài tập tương tác: Chào hỏi, đại từ nhân xưng, hỏi thăm sức khỏe, cảm ơn, xin lỗi, không có chi và tạm biệt.",
  exercises: [
    {
      id: 1,
      type: 'intro',
      prompt: 'Học từ mới: Ngôi thứ 2 (Bạn / Anh / Chị)',
      targetHanzi: '你',
      targetPinyin: 'nǐ',
      hanViet: 'Nhĩ',
      targetVietnamese: 'Bạn, anh, chị (ngôi thứ 2)',
      audioText: '你',
      tips: 'Bộ Nhân đứng (亻) bên trái chỉ người đối diện.'
    },
    {
      id: 2,
      type: 'choice',
      prompt: 'Từ "你" (nǐ) trong tiếng Trung có nghĩa là gì?',
      targetHanzi: '你',
      audioText: '你',
      options: [
        { id: 'a', text: 'Tôi, mình', subText: 'Ngôi thứ 1', isCorrect: false },
        { id: 'b', text: 'Bạn, anh, chị', subText: 'Ngôi thứ 2', isCorrect: true },
        { id: 'c', text: 'Cảm ơn', subText: '', isCorrect: false },
        { id: 'd', text: 'Tạm biệt', subText: '', isCorrect: false }
      ]
    },
    {
      id: 3,
      type: 'intro',
      prompt: 'Học từ mới: Tốt, Khỏe, Đẹp',
      targetHanzi: '好',
      targetPinyin: 'hǎo',
      hanViet: 'Hảo (trong "tuyệt hảo")',
      targetVietnamese: 'Tốt, đẹp, hay, khỏe mạnh',
      audioText: '好',
      tips: 'Ghép từ bộ Nữ (女) và bộ Tử (子). Người phụ nữ có con là điều tốt lành.'
    },
    {
      id: 4,
      type: 'scramble',
      prompt: 'Ghép câu: "Xin chào bạn!"',
      targetVietnamese: 'Xin chào bạn!',
      correctOrder: ['你', '好'],
      scrambleWords: ['好', '我', '你', '是', '不'],
      audioText: '你好'
    },
    {
      id: 5,
      type: 'listen',
      prompt: 'Nghe phát âm và chọn chữ Hán tương ứng:',
      audioText: '好',
      options: [
        { id: 'a', text: '你', subText: 'nǐ (bạn)', isCorrect: false },
        { id: 'b', text: '好', subText: 'hǎo (tốt, khỏe)', isCorrect: true },
        { id: 'c', text: '我', subText: 'wǒ (tôi)', isCorrect: false },
        { id: 'd', text: '不', subText: 'bù (không)', isCorrect: false }
      ]
    },
    {
      id: 6,
      type: 'intro',
      prompt: 'Học kính ngữ trang trọng: "Ngài / Bác / Thầy"',
      targetHanzi: '您',
      targetPinyin: 'nín',
      hanViet: 'Nẫm',
      targetVietnamese: 'Ngài, bác, thầy cô (dạng tôn kính của 你)',
      audioText: '您',
      tips: 'Chữ 你 ở trên, thêm bộ Tâm (心 = trái tim) ở dưới.'
    },
    {
      id: 7,
      type: 'choice',
      prompt: 'Khi gặp người lớn tuổi hoặc thầy cô, bạn nên chào bằng câu nào?',
      options: [
        { id: 'a', text: '您好！(Nín hǎo)', subText: 'Kính cẩn, lễ phép', isCorrect: true },
        { id: 'b', text: '你好！(Nǐ hǎo)', subText: 'Chào bạn bè thông thường', isCorrect: false },
        { id: 'c', text: '再见！(Zàijiàn)', subText: 'Tạm biệt', isCorrect: false }
      ]
    },
    {
      id: 8,
      type: 'intro',
      prompt: 'Học cách biến câu kể thành câu hỏi với từ "吗"',
      targetHanzi: '吗',
      targetPinyin: 'ma',
      hanViet: 'Mã',
      targetVietnamese: '...không? (đặt ở cuối câu để hỏi)',
      audioText: '吗',
      tips: 'Có bộ Khẩu (口) bên trái vì dùng miệng để cất tiếng hỏi.'
    },
    {
      id: 9,
      type: 'scramble',
      prompt: 'Dịch câu hỏi thăm sức khỏe: "Bạn có khỏe không?"',
      targetVietnamese: 'Bạn có khỏe không?',
      correctOrder: ['你', '好', '吗'],
      scrambleWords: ['吗', '我', '好', '不', '你'],
      audioText: '你好吗'
    },
    {
      id: 10,
      type: 'intro',
      prompt: 'Học đại từ "Tôi" và phó từ "Rất"',
      targetHanzi: '我 / 很',
      targetPinyin: 'wǒ (Tôi) - hěn (Rất)',
      hanViet: 'Ngã & Hẩn',
      targetVietnamese: 'Tôi, mình & Rất, quá',
      audioText: '我很',
      tips: '我 (Ngã = Tôi) + 很 (Rất) + 好 (Khỏe) = Tôi rất khỏe!'
    },
    {
      id: 11,
      type: 'choice',
      prompt: 'Câu "我很好" (Wǒ hěn hǎo) có nghĩa là gì?',
      targetHanzi: '我很好',
      audioText: '我很好',
      options: [
        { id: 'a', text: 'Bạn khỏe không?', isCorrect: false },
        { id: 'b', text: 'Tôi rất khỏe / Tôi rất tốt', subText: 'Tôi + Rất + Khỏe', isCorrect: true },
        { id: 'c', text: 'Tôi không khỏe', isCorrect: false }
      ]
    },
    {
      id: 12,
      type: 'intro',
      prompt: 'Học cách nói Cảm ơn',
      targetHanzi: '谢谢',
      targetPinyin: 'xièxie',
      hanViet: 'Tạ tạ (cảm tạ)',
      targetVietnamese: 'Cảm ơn bạn',
      audioText: '谢谢',
      tips: 'Có bộ Ngôn (讠) bên trái vì cảm ơn là dùng lời nói.'
    },
    {
      id: 13,
      type: 'scramble',
      prompt: 'Ghép câu đáp lại đầy đủ: "Tôi rất khỏe, cảm ơn!"',
      targetVietnamese: 'Tôi rất khỏe, cảm ơn!',
      correctOrder: ['我', '很', '好', '谢谢'],
      scrambleWords: ['好', '谢谢', '你', '我', '很', '不'],
      audioText: '我很好，谢谢'
    },
    {
      id: 14,
      type: 'intro',
      prompt: 'Học câu đáp lại khi người khác cảm ơn bạn',
      targetHanzi: '不客气',
      targetPinyin: 'bú kèqi',
      hanViet: 'Bất khách khí',
      targetVietnamese: 'Không có chi, đừng khách sáo',
      audioText: '不客气',
      tips: 'Bất (Không) + Khách khí (Khách sáo) = Đừng khách sáo nhé!'
    },
    {
      id: 15,
      type: 'choice',
      prompt: 'Khi ai đó nói: "谢谢你！", câu đáp lại lịch sự nhất là:',
      options: [
        { id: 'a', text: '不客气！(Bú kèqi)', subText: 'Không có chi / Đừng khách sáo', isCorrect: true },
        { id: 'b', text: '我很好！', subText: 'Tôi rất khỏe', isCorrect: false },
        { id: 'c', text: '对不起！', subText: 'Xin lỗi', isCorrect: false }
      ]
    },
    {
      id: 16,
      type: 'scramble',
      prompt: 'Ghép câu đáp lại lời cảm ơn: "Không có chi!"',
      targetVietnamese: 'Không có chi / Đừng khách sáo!',
      correctOrder: ['不', '客气'],
      scrambleWords: ['客气', '谢谢', '不', '很好', '对'],
      audioText: '不客气'
    },
    {
      id: 17,
      type: 'intro',
      prompt: 'Học bộ đôi: Xin lỗi và Không sao đâu',
      targetHanzi: '对不起 / 没关系',
      targetPinyin: 'duìbuqǐ (Xin lỗi) - méi guānxi (Không sao)',
      hanViet: 'Đối bất khởi & Một quan hệ',
      targetVietnamese: 'Xin lỗi & Không sao đâu / Không có gì',
      audioText: '对不起没关系',
      tips: 'Khi lỡ va chạm, bạn nói "对不起！", đối phương đáp "没关系！"'
    },
    {
      id: 18,
      type: 'listen',
      prompt: 'Nghe phát âm và chọn cụm từ xin lỗi:',
      audioText: '对不起',
      options: [
        { id: 'a', text: '没关系', subText: 'méi guānxi (Không sao)', isCorrect: false },
        { id: 'b', text: '对不起', subText: 'duìbuqǐ (Xin lỗi)', isCorrect: true },
        { id: 'c', text: '不客气', subText: 'bú kèqi (Không có chi)', isCorrect: false }
      ]
    },
    {
      id: 19,
      type: 'fill',
      prompt: 'Điền từ còn thiếu để an ủi người vừa xin lỗi bạn:',
      dialogueContext: 'Người kia áy náy: "对不起！"',
      dialogueSpeaker: 'Bạn mỉm cười đáp:',
      blankPrefix: '',
      blankSuffix: '关系！',
      options: [
        { id: 'a', text: '没', subText: 'méi (Không có)', isCorrect: true },
        { id: 'b', text: '不', subText: 'bù (Không)', isCorrect: false },
        { id: 'c', text: '很', subText: 'hěn (Rất)', isCorrect: false }
      ],
      audioText: '没关系'
    },
    {
      id: 20,
      type: 'intro',
      prompt: 'Học từ "Cũng" để đối đáp sự tương đồng',
      targetHanzi: '也',
      targetPinyin: 'yě',
      hanViet: 'Dã',
      targetVietnamese: 'Cũng (đứng trước tính từ hoặc động từ)',
      audioText: '也',
      tips: '我也很好 = Tôi CŨNG rất khỏe!'
    },
    {
      id: 21,
      type: 'scramble',
      prompt: 'Ghép câu: "Tôi cũng rất khỏe!"',
      targetVietnamese: 'Tôi cũng rất khỏe!',
      correctOrder: ['我', '也', '很', '好'],
      scrambleWords: ['好', '也', '我', '很', '吗', '你'],
      audioText: '我也很好'
    },
    {
      id: 22,
      type: 'intro',
      prompt: 'Học cách chào tạm biệt',
      targetHanzi: '再见',
      targetPinyin: 'zàijiàn',
      hanViet: 'Tái kiến (Hẹn gặp lại)',
      targetVietnamese: 'Tạm biệt (Hẹn gặp lại lần sau)',
      audioText: '再见',
      tips: '再 = Lại, lần nữa. 见 = Gặp mặt. Tái kiến nghĩa là sẽ gặp lại nhau!'
    },
    {
      id: 23,
      type: 'choice',
      prompt: 'Từ "再见" (zàijiàn) có ý nghĩa đen là gì?',
      targetHanzi: '再见',
      audioText: '再见',
      options: [
        { id: 'a', text: 'Hẹn gặp lại lần nữa (Tái kiến)', subText: '再 (lại) + 见 (gặp)', isCorrect: true },
        { id: 'b', text: 'Không bao giờ gặp lại', isCorrect: false },
        { id: 'c', text: 'Chúc ngủ ngon', isCorrect: false }
      ]
    },
    {
      id: 24,
      type: 'fill',
      prompt: 'Điền từ để chào tạm biệt người bạn:',
      dialogueContext: 'Người bạn vẫy tay: "再见！"',
      dialogueSpeaker: 'Bạn vẫy tay đáp:',
      blankPrefix: '再',
      blankSuffix: '！',
      options: [
        { id: 'a', text: '见', subText: 'jiàn (Gặp)', isCorrect: true },
        { id: 'b', text: '好', subText: 'hǎo (Khỏe)', isCorrect: false },
        { id: 'c', text: '吗', subText: 'ma (Không?)', isCorrect: false }
      ],
      audioText: '再见'
    },
    {
      id: 25,
      type: 'speak',
      prompt: 'Thử thách cuối bài: Bấm micro và đọc to câu giao tiếp đầy đủ:',
      targetHanzi: '你好，我很好',
      targetPinyin: 'Nǐ hǎo, wǒ hěn hǎo!',
      targetVietnamese: 'Xin chào, tôi rất khỏe!',
      audioText: '你好，我很好'
    }
  ]
};

// =========================================================================
// BÀI 2: GIỚI THIỆU TÊN, QUỐC TỊCH & NGHỀ NGHIỆP (25 CÂU)
// =========================================================================
export const LEVEL_2_LESSON: InteractiveLesson = {
  levelNumber: 2,
  levelTitle: "Giới thiệu Tên & Quốc tịch",
  description: "Trọn bộ 25 bài tập tương tác: Hỏi họ tên, giới thiệu bản thân là người Việt Nam, phân biệt nghề nghiệp và kết bạn.",
  exercises: [
    {
      id: 1,
      type: 'intro',
      prompt: 'Học từ dùng để nói họ tên của bạn',
      targetHanzi: '叫',
      targetPinyin: 'jiào',
      hanViet: 'Khiếu',
      targetVietnamese: 'Tên là, gọi là',
      audioText: '叫',
      tips: 'Có bộ Khẩu (口) bên trái vì gọi tên cần mở miệng.'
    },
    {
      id: 2,
      type: 'choice',
      prompt: 'Động từ "叫" (jiào) thường dùng để làm gì?',
      targetHanzi: '叫',
      audioText: '叫',
      options: [
        { id: 'a', text: 'Xưng tên (Tên là, gọi là)', subText: '我叫... (Tôi tên là...)', isCorrect: true },
        { id: 'b', text: 'Ăn cơm', isCorrect: false },
        { id: 'c', text: 'Đi ngủ', isCorrect: false }
      ]
    },
    {
      id: 3,
      type: 'intro',
      prompt: 'Học từ để hỏi: "Cái gì / Gì?"',
      targetHanzi: '什么',
      targetPinyin: 'shénme',
      hanViet: 'Thập ma',
      targetVietnamese: 'Cái gì? / Gì?',
      audioText: '什么',
      tips: 'Từ để hỏi phổ biến nhất trong tiếng Trung.'
    },
    {
      id: 4,
      type: 'intro',
      prompt: 'Học danh từ "Họ tên"',
      targetHanzi: '名字',
      targetPinyin: 'míngzi',
      hanViet: 'Danh tự',
      targetVietnamese: 'Tên, tên gọi',
      audioText: '名字',
      tips: 'Danh tự = Danh tính, tên tuổi.'
    },
    {
      id: 5,
      type: 'scramble',
      prompt: 'Ghép câu hỏi: "Bạn tên là gì?"',
      targetVietnamese: 'Bạn tên là gì?',
      correctOrder: ['你', '叫', '什么', '名字'],
      scrambleWords: ['名字', '我', '叫', '你', '什么', '是'],
      audioText: '你叫什么名字'
    },
    {
      id: 6,
      type: 'choice',
      prompt: 'Khi ai đó hỏi: "你叫什么名字？", câu trả lời chuẩn là:',
      options: [
        { id: 'a', text: '我叫李明。(Tôi tên là Lý Minh)', isCorrect: true },
        { id: 'b', text: '我很好。(Tôi rất khỏe)', isCorrect: false },
        { id: 'c', text: '谢谢你。(Cảm ơn bạn)', isCorrect: false }
      ]
    },
    {
      id: 7,
      type: 'intro',
      prompt: 'Học động từ "Là" và danh từ "Người"',
      targetHanzi: '是 / 人',
      targetPinyin: 'shì (Là) - rén (Người)',
      hanViet: 'Thị & Nhân',
      targetVietnamese: 'Là (to-be) & Người, con người',
      audioText: '是人',
      tips: '人 tượng hình hai chân người đang sải bước.'
    },
    {
      id: 8,
      type: 'intro',
      prompt: 'Học tên gọi 2 quốc gia thân thuộc',
      targetHanzi: '越南 / 中国',
      targetPinyin: 'Yuènán (Việt Nam) - Zhōngguó (Trung Quốc)',
      hanViet: 'Việt Nam & Trung Quốc',
      targetVietnamese: 'Nước Việt Nam & Nước Trung Quốc',
      audioText: '越南中国',
      tips: 'Ghép 越南 + 人 = 越南人 (Người Việt Nam).'
    },
    {
      id: 9,
      type: 'scramble',
      prompt: 'Ghép câu: "Tôi là người Việt Nam"',
      targetVietnamese: 'Tôi là người Việt Nam',
      correctOrder: ['我', '是', '越南人'],
      scrambleWords: ['中国人', '是', '我', '越南人', '叫', '不'],
      audioText: '我是越南人'
    },
    {
      id: 10,
      type: 'listen',
      prompt: 'Nghe phát âm xem nhắc tới quốc gia nào:',
      audioText: '中国',
      options: [
        { id: 'a', text: '越南', subText: 'Yuènán (Việt Nam)', isCorrect: false },
        { id: 'b', text: '中国', subText: 'Zhōngguó (Trung Quốc)', isCorrect: true },
        { id: 'c', text: '美国', subText: 'Měiguó (Mỹ)', isCorrect: false }
      ]
    },
    {
      id: 11,
      type: 'intro',
      prompt: 'Học cách hỏi quốc tịch',
      targetHanzi: '哪国人',
      targetPinyin: 'nǎ guó rén',
      hanViet: 'Na quốc nhân',
      targetVietnamese: 'Người nước nào?',
      audioText: '哪国人',
      tips: '你是哪国人？ = Bạn là người nước nào?'
    },
    {
      id: 12,
      type: 'scramble',
      prompt: 'Dịch câu: "Bạn là người nước nào?"',
      targetVietnamese: 'Bạn là người nước nào?',
      correctOrder: ['你', '是', '哪', '国', '人'],
      scrambleWords: ['国', '哪', '人', '是', '你', '叫'],
      audioText: '你是哪国人'
    },
    {
      id: 13,
      type: 'intro',
      prompt: 'Phân biệt ngôi thứ 3: Nam (他) và Nữ (她)',
      targetHanzi: '他 (Nam) / 她 (Nữ)',
      targetPinyin: 'Đều đọc là tā',
      hanViet: 'Tha (người khác)',
      targetVietnamese: 'Anh ấy, cậu ấy & Cô ấy, chị ấy',
      audioText: '他她',
      tips: 'Chữ 他 dùng bộ Nhân đứng (nam); chữ 她 dùng bộ Nữ (nữ).'
    },
    {
      id: 14,
      type: 'choice',
      prompt: 'Muốn viết về "Cô ấy / Chị ấy (phái nữ)", bạn chọn chữ nào?',
      options: [
        { id: 'a', text: '她 (tā)', subText: 'Có bộ Nữ bên trái', isCorrect: true },
        { id: 'b', text: '他 (tā)', subText: 'Có bộ Nhân bên trái', isCorrect: false },
        { id: 'c', text: '你 (nǐ)', subText: 'Bạn', isCorrect: false }
      ]
    },
    {
      id: 15,
      type: 'scramble',
      prompt: 'Ghép câu: "Anh ấy là người Trung Quốc"',
      targetVietnamese: 'Anh ấy là người Trung Quốc',
      correctOrder: ['他', '是', '中国人'],
      scrambleWords: ['越南人', '他', '中国人', '是', '她', '叫'],
      audioText: '他是中国人'
    },
    {
      id: 16,
      type: 'intro',
      prompt: 'Học 2 danh từ chỉ nghề nghiệp trường học',
      targetHanzi: '学生 / 老师',
      targetPinyin: 'xuésheng (Học sinh) - lǎoshī (Thầy cô)',
      hanViet: 'Học sinh & Lão sư',
      targetVietnamese: 'Học sinh, sinh viên & Thầy cô giáo',
      audioText: '学生老师',
      tips: 'Lão sư = Người thầy dạy học. Học sinh = Người học.'
    },
    {
      id: 17,
      type: 'intro',
      prompt: 'Học cách phủ định: 不是 (Không phải là)',
      targetHanzi: '不是',
      targetPinyin: 'bú shì',
      hanViet: 'Bất thị',
      targetVietnamese: 'Không phải là / Không phải',
      audioText: '不是',
      tips: '我不是... = Tôi không phải là...'
    },
    {
      id: 18,
      type: 'choice',
      prompt: 'Câu "我不是老师，我是学生。" có nghĩa là gì?',
      targetHanzi: '我不是老师，我是学生。',
      audioText: '我不是老师，我是学生',
      options: [
        { id: 'a', text: 'Tôi là giáo viên, tôi không phải học sinh.', isCorrect: false },
        { id: 'b', text: 'Tôi không phải giáo viên, tôi là học sinh.', isCorrect: true },
        { id: 'c', text: 'Thầy giáo tôi là học sinh.', isCorrect: false }
      ]
    },
    {
      id: 19,
      type: 'scramble',
      prompt: 'Ghép câu: "Tôi không phải là giáo viên"',
      targetVietnamese: 'Tôi không phải là giáo viên',
      correctOrder: ['我', '不是', '老师'],
      scrambleWords: ['学生', '老师', '我', '不是', '是', '很'],
      audioText: '我不是老师'
    },
    {
      id: 20,
      type: 'intro',
      prompt: 'Học 2 từ tạo nên câu làm quen kết bạn',
      targetHanzi: '高兴 / 认识',
      targetPinyin: 'gāoxìng (Vui vẻ) - rènshi (Quen biết)',
      hanViet: 'Cao hứng & Nhận thức',
      targetVietnamese: 'Vui mừng, phấn khởi & Quen biết, nhận ra',
      audioText: '高兴认识',
      tips: '很高兴 = Rất vui mừng. 认识你 = Quen biết bạn.'
    },
    {
      id: 21,
      type: 'intro',
      prompt: 'Câu cửa miệng số 1 khi kết bạn mới',
      targetHanzi: '很高兴认识你',
      targetPinyin: 'hěn gāoxìng rènshi nǐ',
      hanViet: 'Hẩn cao hứng nhận thức nhĩ',
      targetVietnamese: 'Rất vui được làm quen với bạn (Nice to meet you)',
      audioText: '很高兴认识你',
      tips: 'Dùng câu này mỗi khi bắt tay làm quen bạn mới!'
    },
    {
      id: 22,
      type: 'scramble',
      prompt: 'Ghép câu lịch sự khi vừa được giới thiệu bạn mới:',
      targetVietnamese: 'Rất vui được làm quen với bạn!',
      correctOrder: ['很高兴', '认识', '你'],
      scrambleWords: ['认识', '你', '很好', '很高兴', '谢谢'],
      audioText: '很高兴认识你'
    },
    {
      id: 23,
      type: 'scramble',
      prompt: 'Ghép câu đáp lại: "Tôi cũng rất vui được quen bạn!"',
      targetVietnamese: 'Tôi cũng rất vui được quen bạn!',
      correctOrder: ['我', '也', '很高兴', '认识你'],
      scrambleWords: ['认识你', '也', '我', '很高兴', '是', '老师'],
      audioText: '我也很高兴认识你'
    },
    {
      id: 24,
      type: 'fill',
      prompt: 'Điền từ còn thiếu để trả lời quê hương của bạn:',
      dialogueContext: 'Bạn học hỏi: "你是哪国人？"',
      dialogueSpeaker: 'Bạn tự hào đáp:',
      blankPrefix: '我是',
      blankSuffix: '人。',
      options: [
        { id: 'a', text: '越南', subText: 'Yuènán (Việt Nam)', isCorrect: true },
        { id: 'b', text: '什么', subText: 'shénme (Cái gì)', isCorrect: false },
        { id: 'c', text: '老师', subText: 'lǎoshī (Giáo viên)', isCorrect: false }
      ],
      audioText: '我是越南人'
    },
    {
      id: 25,
      type: 'speak',
      prompt: 'Thử thách cuối bài: Bấm micro và giới thiệu bản thân:',
      targetHanzi: '我是越南人',
      targetPinyin: 'Wǒ shì Yuènán rén!',
      targetVietnamese: 'Tôi là người Việt Nam!',
      audioText: '我是越南人'
    }
  ]
};

// =========================================================================
// BÀI 3: ĐI ĂN QUÁN, ẨM THỰC & GỌI MÓN (25 CÂU)
// =========================================================================
export const LEVEL_3_LESSON: InteractiveLesson = {
  levelNumber: 3,
  levelTitle: "Đi ăn quán & Gọi món",
  description: "Trọn bộ 25 bài tập tương tác: Gọi món ăn, nước uống, khen ngon, gọi phục vụ và tính tiền.",
  exercises: [
    {
      id: 1,
      type: 'intro',
      prompt: 'Học 2 động từ ẩm thực cơ bản',
      targetHanzi: '吃 / 喝',
      targetPinyin: 'chī (Ăn) - hē (Uống)',
      hanViet: 'Ngật (Ăn) & Hát (Uống)',
      targetVietnamese: 'Ăn & Uống',
      audioText: '吃喝',
      tips: 'Cả hai chữ đều có bộ Khẩu (口) bên trái vì đều đưa vào miệng.'
    },
    {
      id: 2,
      type: 'choice',
      prompt: 'Từ nào có nghĩa là "Ăn"?',
      options: [
        { id: 'a', text: '吃 (chī)', subText: 'Ăn', isCorrect: true },
        { id: 'b', text: '喝 (hē)', subText: 'Uống', isCorrect: false },
        { id: 'c', text: '叫 (jiào)', subText: 'Tên là', isCorrect: false }
      ]
    },
    {
      id: 3,
      type: 'intro',
      prompt: 'Học cách diễn tả ý muốn',
      targetHanzi: '想',
      targetPinyin: 'xiǎng',
      hanViet: 'Tưởng (trong "tư tưởng")',
      targetVietnamese: 'Muốn, nghĩ, nhớ',
      audioText: '想',
      tips: 'Phía dưới có bộ Tâm (心 = trái tim).'
    },
    {
      id: 4,
      type: 'scramble',
      prompt: 'Ghép câu hỏi: "Bạn muốn ăn cái gì?"',
      targetVietnamese: 'Bạn muốn ăn cái gì?',
      correctOrder: ['你', '想', '吃', '什么'],
      scrambleWords: ['什么', '吃', '想', '你', '喝', '是'],
      audioText: '你想吃什么'
    },
    {
      id: 5,
      type: 'intro',
      prompt: 'Học món ăn chính: Cơm (米饭) & Mì (面条)',
      targetHanzi: '米饭 / 面条',
      targetPinyin: 'mǐfàn (Cơm) - miàntiáo (Mì)',
      hanViet: 'Mễ phạn & Diện điều',
      targetVietnamese: 'Cơm trắng & Sợi mì, bún mì',
      audioText: '米饭面条',
      tips: 'Mễ = Gạo/Cơm. Diện = Bột mì, sợi mì.'
    },
    {
      id: 6,
      type: 'scramble',
      prompt: 'Dịch câu gọi món: "Tôi muốn ăn cơm"',
      targetVietnamese: 'Tôi muốn ăn cơm',
      correctOrder: ['我', '想', '吃', '米饭'],
      scrambleWords: ['米饭', '想', '喝', '我', '吃', '水'],
      audioText: '我想吃米饭'
    },
    {
      id: 7,
      type: 'intro',
      prompt: 'Học món thịt bò và sủi cảo',
      targetHanzi: '牛肉 / 饺子',
      targetPinyin: 'niúròu (Thịt bò) - jiǎozi (Sủi cảo)',
      hanViet: 'Ngưu nhục & Giảo tử',
      targetVietnamese: 'Thịt bò & Bánh chẻo, sủi cảo',
      audioText: '牛肉饺子',
      tips: 'Ngưu = Bò. Nhục = Thịt. Giảo tử = Sủi cảo truyền thống.'
    },
    {
      id: 8,
      type: 'scramble',
      prompt: 'Ghép câu: "Tôi muốn ăn thịt bò và mì"',
      targetVietnamese: 'Tôi muốn ăn thịt bò và mì',
      correctOrder: ['我想吃', '牛肉', '和', '面条'],
      scrambleWords: ['和', '牛肉', '我想吃', '面条', '水', '茶'],
      audioText: '我想吃牛肉和面条'
    },
    {
      id: 9,
      type: 'intro',
      prompt: 'Học từ vựng về đồ uống: Nước lọc & Trà',
      targetHanzi: '水 / 茶',
      targetPinyin: 'shuǐ (Nước) - chá (Trà)',
      hanViet: 'Thủy & Trà',
      targetVietnamese: 'Nước uống & Nước trà, chè',
      audioText: '水茶',
      tips: 'Thủy = Nước. Trà = Chè/Trà.'
    },
    {
      id: 10,
      type: 'listen',
      prompt: 'Bồi bàn hỏi bạn uống gì, hãy nghe xem món gì nhé:',
      audioText: '茶',
      options: [
        { id: 'a', text: '水', subText: 'shuǐ (Nước)', isCorrect: false },
        { id: 'b', text: '茶', subText: 'chá (Trà)', isCorrect: true },
        { id: 'c', text: '米饭', subText: 'mǐfàn (Cơm)', isCorrect: false }
      ]
    },
    {
      id: 11,
      type: 'intro',
      prompt: 'Học câu xin lịch sự: 请给我 (Xin cho tôi...)',
      targetHanzi: '请给我',
      targetPinyin: 'qǐng gěi wǒ',
      hanViet: 'Thỉnh cấp ngã',
      targetVietnamese: 'Làm ơn cho tôi / Xin cho tôi...',
      audioText: '请给我',
      tips: 'Dùng mẫu câu này để gọi bất cứ đồ gì.'
    },
    {
      id: 12,
      type: 'scramble',
      prompt: 'Ghép câu: "Xin cho tôi một cốc nước!"',
      targetVietnamese: 'Xin cho tôi một cốc nước',
      correctOrder: ['请', '给', '我', '一杯水'],
      scrambleWords: ['一杯水', '我', '请', '想', '给', '吃'],
      audioText: '请给我一杯水'
    },
    {
      id: 13,
      type: 'intro',
      prompt: 'Học cách khen ngợi đồ ăn: 好吃 & 好喝',
      targetHanzi: '好吃 / 好喝',
      targetPinyin: 'hǎochī (Ăn ngon) - hǎohē (Uống ngon)',
      hanViet: 'Hảo ngật & Hảo hát',
      targetVietnamese: 'Món ăn rất ngon & Đồ uống rất ngon',
      audioText: '好吃好喝',
      tips: '好 + Ăn = Ăn ngon! 好 + Uống = Uống ngon!'
    },
    {
      id: 14,
      type: 'choice',
      prompt: 'Câu "这个菜很好吃！" có nghĩa là gì?',
      targetHanzi: '这个菜很好吃！',
      audioText: '这个菜很好吃',
      options: [
        { id: 'a', text: 'Món này dở quá.', isCorrect: false },
        { id: 'b', text: 'Món ăn này rất ngon!', subText: 'Khen ngợi', isCorrect: true },
        { id: 'c', text: 'Tôi không muốn ăn món này.', isCorrect: false }
      ]
    },
    {
      id: 15,
      type: 'intro',
      prompt: 'Học vị Cay (辣) - Đặc sản món Tứ Xuyên / Hồ Nam',
      targetHanzi: '辣',
      targetPinyin: 'là',
      hanViet: 'Lạt',
      targetVietnamese: 'Cay, cay nồng',
      audioText: '辣',
      tips: '不辣 = Không cay! 很辣 = Rất cay!'
    },
    {
      id: 16,
      type: 'scramble',
      prompt: 'Ghép câu hỏi: "Món này cay không?"',
      targetVietnamese: 'Món này cay không?',
      correctOrder: ['这个', '辣', '吗'],
      scrambleWords: ['辣', '吗', '这个', '好吃', '喝'],
      audioText: '这个辣吗'
    },
    {
      id: 17,
      type: 'intro',
      prompt: 'Từ dùng để gọi người phục vụ quán',
      targetHanzi: '服务员',
      targetPinyin: 'fúwùyuán',
      hanViet: 'Phục vụ viên',
      targetVietnamese: 'Bồi bàn, nhân viên phục vụ',
      audioText: '服务员',
      tips: 'Cứ giơ tay gọi: "服务员！" là họ đến ngay.'
    },
    {
      id: 18,
      type: 'fill',
      prompt: 'Điền từ còn thiếu để gọi đồ uống:',
      dialogueContext: 'Bồi bàn hỏi: "你想喝什么？"',
      dialogueSpeaker: 'Bạn đáp:',
      blankPrefix: '我想喝',
      blankSuffix: '。',
      options: [
        { id: 'a', text: '茶', subText: 'chá (Trà)', isCorrect: true },
        { id: 'b', text: '吃', subText: 'chī (Ăn)', isCorrect: false },
        { id: 'c', text: '是', subText: 'shì (Là)', isCorrect: false }
      ],
      audioText: '我想喝茶'
    },
    {
      id: 19,
      type: 'intro',
      prompt: 'Học từ thanh toán: 买单 (Tính tiền / Thanh toán)',
      targetHanzi: '买单',
      targetPinyin: 'mǎidān',
      hanViet: 'Mãi đơn',
      targetVietnamese: 'Thanh toán tiền, tính tiền ăn (Check, please)',
      audioText: '买单',
      tips: 'Ăn xong, bạn vẫy tay nói: "服务员，买单！"'
    },
    {
      id: 20,
      type: 'choice',
      prompt: 'Khi ăn xong muốn gọi tính tiền, bạn sẽ nói câu nào?',
      options: [
        { id: 'a', text: '服务员，买单！(Fúwùyuán, mǎidān!)', subText: 'Phục vụ, tính tiền!', isCorrect: true },
        { id: 'b', text: '再见！', subText: 'Tạm biệt', isCorrect: false },
        { id: 'c', text: '对不起！', subText: 'Xin lỗi', isCorrect: false }
      ]
    },
    {
      id: 21,
      type: 'scramble',
      prompt: 'Ghép câu: "Phục vụ, tính tiền giúp tôi!"',
      targetVietnamese: 'Phục vụ, tính tiền!',
      correctOrder: ['服务员', '买单'],
      scrambleWords: ['买单', '服务员', '好吃', '牛肉'],
      audioText: '服务员买单'
    },
    {
      id: 22,
      type: 'intro',
      prompt: 'Học câu nói khi bạn muốn mời bạn bè ăn cơm',
      targetHanzi: '我请客',
      targetPinyin: 'wǒ qǐngkè',
      hanViet: 'Ngã thỉnh khách',
      targetVietnamese: 'Hôm nay tôi mời! / Tôi đãi bạn bữa này',
      audioText: '我请客',
      tips: 'Thỉnh khách = Đãi khách, mời cơm.'
    },
    {
      id: 23,
      type: 'choice',
      prompt: 'Câu "今天我请客！" có nghĩa là gì?',
      targetHanzi: '今天我请客！',
      audioText: '今天我请客',
      options: [
        { id: 'a', text: 'Hôm nay tôi mời / Tôi bao bữa này!', isCorrect: true },
        { id: 'b', text: 'Hôm nay bạn trả tiền nhé.', isCorrect: false },
        { id: 'c', text: 'Hôm nay tôi không ăn.', isCorrect: false }
      ]
    },
    {
      id: 24,
      type: 'scramble',
      prompt: 'Ghép câu hoàn chỉnh gọi món với phục vụ:',
      targetVietnamese: 'Phục vụ, tôi muốn ăn thịt bò!',
      correctOrder: ['服务员', '我想吃', '牛肉'],
      scrambleWords: ['牛肉', '服务员', '我想吃', '喝水', '你好'],
      audioText: '服务员我想吃牛肉'
    },
    {
      id: 25,
      type: 'speak',
      prompt: 'Thử thách cuối bài: Bấm micro và gọi bồi bàn tính tiền:',
      targetHanzi: '服务员，买单',
      targetPinyin: 'Fúwùyuán, mǎidān!',
      targetVietnamese: 'Phục vụ ơi, tính tiền!',
      audioText: '服务员买单'
    }
  ]
};

// =========================================================================
// BÀI 4: ĐI CHỢ, MUA SẮM & HỎI GIÁ TIỀN (25 CÂU)
// =========================================================================
export const LEVEL_4_LESSON: InteractiveLesson = {
  levelNumber: 4,
  levelTitle: "Đi chợ & Hỏi giá tiền",
  description: "Trọn bộ 25 bài tập tương tác: Hỏi giá, đơn vị tiền tệ (Tệ), mặc cả đắt rẻ, các loại trái cây và chốt mua.",
  exercises: [
    {
      id: 1,
      type: 'intro',
      prompt: 'Học câu hỏi giá tiền kinh điển',
      targetHanzi: '多少钱',
      targetPinyin: 'duōshao qián',
      hanViet: 'Đa thiểu tiền',
      targetVietnamese: 'Bao nhiêu tiền?',
      audioText: '多少钱',
      tips: '多少 = Nhiều ít, bao nhiêu. 钱 = Tiền bạc.'
    },
    {
      id: 2,
      type: 'intro',
      prompt: 'Học từ chỉ định "Cái này"',
      targetHanzi: '这个',
      targetPinyin: 'zhè ge',
      hanViet: 'Giá cá',
      targetVietnamese: 'Cái này / Vật này',
      audioText: '这个',
      tips: 'Chỉ tay vào món đồ muốn mua và nói: 这个！'
    },
    {
      id: 3,
      type: 'scramble',
      prompt: 'Ghép câu hỏi giá: "Cái này bao nhiêu tiền?"',
      targetVietnamese: 'Cái này bao nhiêu tiền?',
      correctOrder: ['这个', '多少钱'],
      scrambleWords: ['多少钱', '这个', '很好', '叫', '吃'],
      audioText: '这个多少钱'
    },
    {
      id: 4,
      type: 'intro',
      prompt: 'Học đơn vị tiền tệ khẩu ngữ: 块 (Tệ / Đồng)',
      targetHanzi: '块 (元)',
      targetPinyin: 'kuài (yuán)',
      hanViet: 'Khối (Nguyên)',
      targetVietnamese: 'Đồng, Tệ (khẩu ngữ luôn dùng 块)',
      audioText: '块',
      tips: 'Khẩu ngữ: 三块 = 3 tệ. 十块 = 10 tệ.'
    },
    {
      id: 5,
      type: 'listen',
      prompt: 'Nghe xem chủ tiệm báo giá bao nhiêu tiền:',
      audioText: '五块钱',
      options: [
        { id: 'a', text: '五块钱 (5 tệ)', subText: 'Wǔ kuài qián', isCorrect: true },
        { id: 'b', text: '三块钱 (3 tệ)', subText: 'Sān kuài qián', isCorrect: false },
        { id: 'c', text: '十块钱 (10 tệ)', subText: 'Shí kuài qián', isCorrect: false }
      ]
    },
    {
      id: 6,
      type: 'intro',
      prompt: 'Học từ vựng về trái cây: Táo (苹果) & Dưa hấu (西瓜)',
      targetHanzi: '苹果 / 西瓜',
      targetPinyin: 'píngguǒ (Táo) - xīguā (Dưa hấu)',
      hanViet: 'Bình quả & Tây qua',
      targetVietnamese: 'Quả táo & Quả dưa hấu',
      audioText: '苹果西瓜',
      tips: 'Bình quả = Quả táo. Tây qua = Quả dưa hấu.'
    },
    {
      id: 7,
      type: 'scramble',
      prompt: 'Ghép câu: "Táo bao nhiêu tiền?"',
      targetVietnamese: 'Táo bao nhiêu tiền?',
      correctOrder: ['苹果', '多少钱'],
      scrambleWords: ['多少钱', '西瓜', '苹果', '太贵', '买'],
      audioText: '苹果多少钱'
    },
    {
      id: 8,
      type: 'intro',
      prompt: 'Học đơn vị cân nặng Trung Quốc: 一斤 (Nửa cân / 500g)',
      targetHanzi: '一斤',
      targetPinyin: 'yì jīn',
      hanViet: 'Nhất cân',
      targetVietnamese: 'Một cân Trung Quốc (bằng đúng 500g)',
      audioText: '一斤',
      tips: 'Ở Trung Quốc, 1 cân (斤) = 500 gam (nửa ký Việt Nam).'
    },
    {
      id: 9,
      type: 'scramble',
      prompt: 'Ghép câu: "Bao nhiêu tiền một cân?"',
      targetVietnamese: 'Bao nhiêu tiền một cân?',
      correctOrder: ['多少钱', '一斤'],
      scrambleWords: ['一斤', '多少钱', '这个', '太贵'],
      audioText: '多少钱一斤'
    },
    {
      id: 10,
      type: 'intro',
      prompt: 'Học cách chê đắt: 贵 (Đắt) & 太...了 (Quá... rồi)',
      targetHanzi: '太贵了',
      targetPinyin: 'tài guì le',
      hanViet: 'Thái quý liễu',
      targetVietnamese: 'Đắt quá rồi!',
      audioText: '太贵了',
      tips: '贵 = Quý (Đắt giá). 太...了 = Quá mức.'
    },
    {
      id: 11,
      type: 'scramble',
      prompt: 'Ghép câu: "Đắt quá rồi!"',
      targetVietnamese: 'Đắt quá rồi!',
      correctOrder: ['太', '贵', '了'],
      scrambleWords: ['了', '太', '好', '贵', '便宜'],
      audioText: '太贵了'
    },
    {
      id: 12,
      type: 'intro',
      prompt: 'Học từ mặc cả giảm giá: 便宜 (Rẻ, bớt)',
      targetHanzi: '便宜',
      targetPinyin: 'piányi',
      hanViet: 'Tiện nghi',
      targetVietnamese: 'Rẻ, bớt giá, giá mềm',
      audioText: '便宜',
      tips: 'Trong tiếng Trung 便宜 là RẺ, giá rẻ!'
    },
    {
      id: 13,
      type: 'intro',
      prompt: 'Câu thần chú mặc cả: 便宜一点吧 (Bớt chút đi mà)',
      targetHanzi: '便宜一点吧',
      targetPinyin: 'piányi yìdiǎn ba',
      hanViet: 'Tiện nghi nhất điểm ba',
      targetVietnamese: 'Bớt một chút đi mà / Rẻ hơn xíu nhé',
      audioText: '便宜一点吧',
      tips: '一点 = Một chút. 吧 = Nhé, đi mà.'
    },
    {
      id: 14,
      type: 'scramble',
      prompt: 'Ghép câu xin bớt giá: "Bớt chút đi mà!"',
      targetVietnamese: 'Bớt một chút đi mà!',
      correctOrder: ['便宜', '一点', '吧'],
      scrambleWords: ['吧', '便宜', '太贵', '一点', '钱'],
      audioText: '便宜一点吧'
    },
    {
      id: 15,
      type: 'intro',
      prompt: 'Học động từ 买 (Mua) vs 卖 (Bán)',
      targetHanzi: '买 (Mua) / 卖 (Bán)',
      targetPinyin: 'mǎi (Mua, thanh 3) - mài (Bán, thanh 4)',
      hanViet: 'Mãi (Mua) & Mại (Bán)',
      targetVietnamese: 'Mua & Bán (trong "thương mại")',
      audioText: '买卖',
      tips: 'Mǎi (dấu hỏi) = Mua. Mài (dứt khoát) = Bán!'
    },
    {
      id: 16,
      type: 'choice',
      prompt: 'Câu "我想买这个。" có nghĩa là gì?',
      targetHanzi: '我想买这个。',
      audioText: '我想买这个',
      options: [
        { id: 'a', text: 'Tôi muốn bán cái này.', isCorrect: false },
        { id: 'b', text: 'Tôi muốn mua cái này.', subText: 'Tôi + Muốn + Mua', isCorrect: true },
        { id: 'c', text: 'Cái này không bán.', isCorrect: false }
      ]
    },
    {
      id: 17,
      type: 'intro',
      prompt: 'Học từ xưng hô ngoài chợ: 老板 (Ông chủ / Chủ tiệm)',
      targetHanzi: '老板',
      targetPinyin: 'lǎobǎn',
      hanViet: 'Lão bản',
      targetVietnamese: 'Ông chủ, bà chủ tiệm',
      audioText: '老板',
      tips: 'Cứ gọi "老板！" là chủ tiệm rất vui vẻ.'
    },
    {
      id: 18,
      type: 'scramble',
      prompt: 'Ghép câu: "Ông chủ, dưa hấu bao nhiêu tiền một cân?"',
      targetVietnamese: 'Ông chủ, dưa hấu bao nhiêu tiền một cân?',
      correctOrder: ['老板', '西瓜', '多少钱', '一斤'],
      scrambleWords: ['多少钱', '老板', '西瓜', '一斤', '太贵', '买'],
      audioText: '老板西瓜多少钱一斤'
    },
    {
      id: 19,
      type: 'intro',
      prompt: 'Học từ "Có thể... không?": 可以吗',
      targetHanzi: '可以吗',
      targetPinyin: 'kěyǐ ma',
      hanViet: 'Khả dĩ ma',
      targetVietnamese: 'Có được không? / Được chứ?',
      audioText: '可以吗',
      tips: 'Dùng để thương lượng: 两块可以吗？ (2 tệ được không?)'
    },
    {
      id: 20,
      type: 'scramble',
      prompt: 'Ghép câu mặc cả giá cụ thể: "Bốn tệ được không?"',
      targetVietnamese: 'Bốn tệ được không?',
      correctOrder: ['四块', '可以', '吗'],
      scrambleWords: ['可以', '吗', '四块', '多少钱', '太贵'],
      audioText: '四块可以吗'
    },
    {
      id: 21,
      type: 'choice',
      prompt: 'Khi chủ tiệm đồng ý bán, họ sẽ nói câu nào?',
      options: [
        { id: 'a', text: '行吧，给你！(Xíng ba, gěi nǐ!)', subText: 'Được rồi, bán cho bạn!', isCorrect: true },
        { id: 'b', text: '对不起！', isCorrect: false },
        { id: 'c', text: '我不买！', isCorrect: false }
      ]
    },
    {
      id: 22,
      type: 'intro',
      prompt: 'Học từ tiền thối / tiền thừa: 找钱 (Thối tiền)',
      targetHanzi: '找钱',
      targetPinyin: 'zhǎo qián',
      hanViet: 'Trảo tiền',
      targetVietnamese: 'Trả lại tiền thừa / Thối lại tiền',
      audioText: '找钱',
      tips: '找你五块 = Thối lại cho bạn 5 tệ.'
    },
    {
      id: 23,
      type: 'fill',
      prompt: 'Điền từ còn thiếu khi đưa tiền cho chủ quán:',
      dialogueContext: 'Bạn mua hàng xong đưa tiền:',
      dialogueSpeaker: 'Bạn nói:',
      blankPrefix: '',
      blankSuffix: '你钱。',
      options: [
        { id: 'a', text: '给', subText: 'gěi (Gửi / Đưa)', isCorrect: true },
        { id: 'b', text: '喝', subText: 'hē (Uống)', isCorrect: false },
        { id: 'c', text: '叫', subText: 'jiào (Gọi)', isCorrect: false }
      ],
      audioText: '给你钱'
    },
    {
      id: 24,
      type: 'scramble',
      prompt: 'Ghép câu hoàn chỉnh: "Đắt quá, bớt chút đi mà!"',
      targetVietnamese: 'Đắt quá, bớt chút đi mà!',
      correctOrder: ['太贵了', '便宜', '一点吧'],
      scrambleWords: ['便宜', '一点吧', '太贵了', '多少钱', '西瓜'],
      audioText: '太贵了便宜一点吧'
    },
    {
      id: 25,
      type: 'speak',
      prompt: 'Thử thách cuối bài: Bấm micro và thử mặc cả với chủ tiệm:',
      targetHanzi: '太贵了，便宜一点吧',
      targetPinyin: 'Tài guì le, piányi yìdiǎn ba!',
      targetVietnamese: 'Đắt quá, bớt một chút đi mà!',
      audioText: '太贵了便宜一点吧'
    }
  ]
};

// =========================================================================
// BÀI 5: PHƯƠNG HƯỚNG, HỎI ĐƯỜNG & ĐI LẠI (25 CÂU)
// =========================================================================
export const LEVEL_5_LESSON: InteractiveLesson = {
  levelNumber: 5,
  levelTitle: "Hỏi đường & Phương hướng",
  description: "Trọn bộ 25 bài tập tương tác: Hỏi đường, chỉ dẫn rẽ trái, rẽ phải, đi thẳng, khoảng cách xa gần và đi taxi.",
  exercises: [
    {
      id: 1,
      type: 'intro',
      prompt: 'Học từ vựng hỏi vị trí: 去 (Đi) & 在哪儿 (Ở đâu)',
      targetHanzi: '去 / 在哪儿',
      targetPinyin: 'qù (Đi) - zài nǎr (Ở đâu?)',
      hanViet: 'Khứ & Tại na nhi',
      targetVietnamese: 'Đi đến & Ở đâu?',
      audioText: '去在哪儿',
      tips: 'Mẫu câu cốt lõi khi lạc đường!'
    },
    {
      id: 2,
      type: 'choice',
      prompt: 'Từ nào có nghĩa là "Ở đâu?"',
      options: [
        { id: 'a', text: '在哪儿 (zài nǎr)', subText: 'Ở đâu?', isCorrect: true },
        { id: 'b', text: '多少钱 (duōshao qián)', subText: 'Bao nhiêu tiền?', isCorrect: false },
        { id: 'c', text: '怎么走 (zěnme zǒu)', subText: 'Đi thế nào?', isCorrect: false }
      ]
    },
    {
      id: 3,
      type: 'intro',
      prompt: 'Học từ quan trọng: 洗手间 (Nhà vệ sinh / Toilet)',
      targetHanzi: '洗手间',
      targetPinyin: 'xǐshǒujiān',
      hanViet: 'Tẩy thủ gian (Phòng rửa tay)',
      targetVietnamese: 'Nhà vệ sinh, toilet',
      audioText: '洗手间',
      tips: 'Tẩy (Rửa) + Thủ (Tay) + Gian (Phòng) = Phòng vệ sinh.'
    },
    {
      id: 4,
      type: 'scramble',
      prompt: 'Ghép câu cứu cánh: "Nhà vệ sinh ở đâu?"',
      targetVietnamese: 'Nhà vệ sinh ở đâu?',
      correctOrder: ['洗手间', '在哪儿'],
      scrambleWords: ['在哪儿', '洗手间', '怎么走', '多少钱'],
      audioText: '洗手间在哪儿'
    },
    {
      id: 5,
      type: 'intro',
      prompt: 'Học câu hỏi đường: 怎么走 (Đi như thế nào?)',
      targetHanzi: '怎么走',
      targetPinyin: 'zěnme zǒu',
      hanViet: 'Chẩm ma tẩu',
      targetVietnamese: 'Đi như thế nào? / Lối nào đi đến đó?',
      audioText: '怎么走',
      tips: '怎么 = Như thế nào. 走 = Đi.'
    },
    {
      id: 6,
      type: 'scramble',
      prompt: 'Ghép câu hỏi đường lịch sự: "Xin hỏi, đi như thế nào?"',
      targetVietnamese: 'Xin hỏi, đi như thế nào?',
      correctOrder: ['请问', '怎么走'],
      scrambleWords: ['怎么走', '在哪儿', '请问', '多少钱'],
      audioText: '请问怎么走'
    },
    {
      id: 7,
      type: 'intro',
      prompt: 'Học hướng dẫn đi thẳng: 一直走',
      targetHanzi: '一直走',
      targetPinyin: 'yìzhí zǒu',
      hanViet: 'Nhất trực tẩu',
      targetVietnamese: 'Cứ đi thẳng về phía trước',
      audioText: '一直走',
      tips: '一直 = Thẳng một mạch, không rẽ.'
    },
    {
      id: 8,
      type: 'intro',
      prompt: 'Học rẽ trái (向左拐) & rẽ phải (向右拐)',
      targetHanzi: '向左拐 / 向右拐',
      targetPinyin: 'xiàng zuǒ guǎi (Trái) - xiàng yòu guǎi (Phải)',
      hanViet: 'Hướng tả quải & Hướng hữu quải',
      targetVietnamese: 'Quẹo trái & Quẹo phải',
      audioText: '向左拐向右拐',
      tips: 'Tả (左) = Trái. Hữu (右) = Phải.'
    },
    {
      id: 9,
      type: 'listen',
      prompt: 'Người qua đường bảo bạn rẽ hướng nào? Hãy nghe kỹ:',
      audioText: '向右拐',
      options: [
        { id: 'a', text: '向右拐 (Rẽ phải)', subText: 'xiàng yòu guǎi', isCorrect: true },
        { id: 'b', text: '向左拐 (Rẽ trái)', subText: 'xiàng zuǒ guǎi', isCorrect: false },
        { id: 'c', text: '一直走 (Đi thẳng)', subText: 'yìzhí zǒu', isCorrect: false }
      ]
    },
    {
      id: 10,
      type: 'scramble',
      prompt: 'Ghép chỉ dẫn: "Đi thẳng, sau đó rẽ phải"',
      targetVietnamese: 'Đi thẳng, sau đó rẽ phải',
      correctOrder: ['一直走', '向右拐'],
      scrambleWords: ['向右拐', '在哪儿', '一直走', '向左拐'],
      audioText: '一直走向右拐'
    },
    {
      id: 11,
      type: 'intro',
      prompt: 'Học khoảng cách: 远 (Xa) & 近 (Gần)',
      targetHanzi: '远 / 近',
      targetPinyin: 'yuǎn (Xa) - jìn (Gần)',
      hanViet: 'Viễn & Cận',
      targetVietnamese: 'Xa xôi & Gần gũi',
      audioText: '远近',
      tips: 'Âm Hán Việt: Viễn thị (nhìn xa), Cận thị (nhìn gần)!'
    },
    {
      id: 12,
      type: 'choice',
      prompt: 'Câu "离这里远不远？" có nghĩa là gì?',
      targetHanzi: '离这里远不远？',
      audioText: '离这里远不远',
      options: [
        { id: 'a', text: 'Chỗ này có gần đây không?', isCorrect: false },
        { id: 'b', text: 'Có cách đây xa không?', subText: 'Cách đây xa hay không xa?', isCorrect: true },
        { id: 'c', text: 'Bạn đi đâu đấy?', isCorrect: false }
      ]
    },
    {
      id: 13,
      type: 'intro',
      prompt: 'Học câu trấn an: 不远，很近 (Không xa, rất gần)',
      targetHanzi: '不远，很近',
      targetPinyin: 'bù yuǎn, hěn jìn',
      hanViet: 'Bất viễn, hẩn cận',
      targetVietnamese: 'Không xa, rất gần đây thôi',
      audioText: '不远很近',
      tips: 'Không xa đâu, đi một chút là tới.'
    },
    {
      id: 14,
      type: 'scramble',
      prompt: 'Ghép câu trả lời: "Không xa, rất gần!"',
      targetVietnamese: 'Không xa, rất gần!',
      correctOrder: ['不远', '很近'],
      scrambleWords: ['很近', '太贵', '不远', '很大'],
      audioText: '不远很近'
    },
    {
      id: 15,
      type: 'intro',
      prompt: 'Học phương tiện: 出租车 (Taxi) & 地铁 (Tàu điện ngầm)',
      targetHanzi: '出租车 / 地铁',
      targetPinyin: 'chūzūchē (Taxi) - dìtiě (Tàu điện ngầm)',
      hanViet: 'Xuất tô xa & Địa thiết',
      targetVietnamese: 'Xe taxi & Tàu điện ngầm',
      audioText: '出租车地铁',
      tips: 'Xuất tô xa = Xe cho thuê (Taxi).'
    },
    {
      id: 16,
      type: 'choice',
      prompt: 'Muốn gọi xe Taxi, bạn sẽ tìm phương tiện nào?',
      options: [
        { id: 'a', text: '出租车 (chūzūchē)', subText: 'Xe Taxi', isCorrect: true },
        { id: 'b', text: '米饭', subText: 'Cơm', isCorrect: false },
        { id: 'c', text: '西瓜', subText: 'Dưa hấu', isCorrect: false }
      ]
    },
    {
      id: 17,
      type: 'intro',
      prompt: 'Học địa danh nổi tiếng: 故宫 (Cố Cung / Tử Cấm Thành)',
      targetHanzi: '故宫',
      targetPinyin: 'Gùgōng',
      hanViet: 'Cố Cung',
      targetVietnamese: 'Tử Cấm Thành Bắc Kinh',
      audioText: '故宫',
      tips: 'Cung điện cổ kính nhất Bắc Kinh.'
    },
    {
      id: 18,
      type: 'scramble',
      prompt: 'Ghép câu: "Xin hỏi, đi Cố Cung đi thế nào?"',
      targetVietnamese: 'Xin hỏi, đi Cố Cung đi thế nào?',
      correctOrder: ['请问', '去故宫', '怎么走'],
      scrambleWords: ['怎么走', '去故宫', '多少钱', '请问', '在哪儿'],
      audioText: '请问去故宫怎么走'
    },
    {
      id: 19,
      type: 'intro',
      prompt: 'Học ước tính thời gian: 五分钟 (Năm phút)',
      targetHanzi: '五分钟',
      targetPinyin: 'wǔ fēnzhōng',
      hanViet: 'Ngũ phân chung',
      targetVietnamese: 'Năm phút đồng hồ',
      audioText: '五分钟',
      tips: '走五分钟 = Đi bộ 5 phút.'
    },
    {
      id: 20,
      type: 'scramble',
      prompt: 'Ghép câu: "Đi bộ năm phút là tới nơi"',
      targetVietnamese: 'Đi bộ năm phút là tới',
      correctOrder: ['走', '五分钟', '到了'],
      scrambleWords: ['到了', '五分钟', '走', '太贵', '很好'],
      audioText: '走五分钟到了'
    },
    {
      id: 21,
      type: 'intro',
      prompt: 'Học vị trí: 这儿 (Ở đây) & 那儿 (Ở kia)',
      targetHanzi: '这儿 / 那儿',
      targetPinyin: 'zhèr (Ở đây) - nàr (Ở kia)',
      hanViet: 'Giá nhi & Na nhi',
      targetVietnamese: 'Ở đây & Ở đằng kia',
      audioText: '这儿那儿',
      tips: '在这儿 = Ở đây! 在那儿 = Ở đằng kia!'
    },
    {
      id: 22,
      type: 'choice',
      prompt: 'Khi tài xế nói: "到了，在这儿！", nghĩa là:',
      options: [
        { id: 'a', text: 'Đến nơi rồi, ở ngay đây nhé!', subText: 'Đã tới đích', isCorrect: true },
        { id: 'b', text: 'Còn xa lắm.', isCorrect: false },
        { id: 'c', text: 'Tôi không biết đường.', isCorrect: false }
      ]
    },
    {
      id: 23,
      type: 'fill',
      prompt: 'Điền từ còn thiếu để chỉ hướng cho người qua đường:',
      dialogueContext: 'Khách hỏi: "去故宫怎么走？"',
      dialogueSpeaker: 'Bạn chỉ:',
      blankPrefix: '',
      blankSuffix: '，向右拐。',
      options: [
        { id: 'a', text: '一直走', subText: 'yìzhí zǒu (Đi thẳng)', isCorrect: true },
        { id: 'b', text: '多少钱', subText: 'duōshao qián (Bao nhiêu)', isCorrect: false },
        { id: 'c', text: '不客气', subText: 'bú kèqi (Không chi)', isCorrect: false }
      ],
      audioText: '一直走向右拐'
    },
    {
      id: 24,
      type: 'scramble',
      prompt: 'Ghép câu: "Nhà vệ sinh ở đằng kia"',
      targetVietnamese: 'Nhà vệ sinh ở đằng kia',
      correctOrder: ['洗手间', '在那儿'],
      scrambleWords: ['在那儿', '洗手间', '怎么走', '请问'],
      audioText: '洗手间在那儿'
    },
    {
      id: 25,
      type: 'speak',
      prompt: 'Thử thách cuối bài: Bấm micro và chỉ đường cho khách:',
      targetHanzi: '一直走，向右拐',
      targetPinyin: 'Yìzhí zǒu, xiàng yòu guǎi!',
      targetVietnamese: 'Đi thẳng, rồi rẽ phải!',
      audioText: '一直走向右拐'
    }
  ]
};

// Map chứa toàn bộ bài học tương tác của cả 5 Ải (Mỗi ải trọn vẹn 25 câu)
export const ALL_INTERACTIVE_LESSONS: Record<number, InteractiveLesson> = {
  1: LEVEL_1_LESSON,
  2: LEVEL_2_LESSON,
  3: LEVEL_3_LESSON,
  4: LEVEL_4_LESSON,
  5: LEVEL_5_LESSON
};
