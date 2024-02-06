export interface LiveChatDataInterface {
  phone: string;
  message: string;
}

const LiveChatData: LiveChatDataInterface[] = [
  {
    phone: '9903',
    message: '저희 아이가 좋아해요 ^^',
  },
  {
    phone: '43**',
    message: '아이 영양간식으로 좋아요 ^^',
  },
  {
    phone: '88**',
    message: '아이 술안주로 최고!',
  },
  {
    phone: '93**',
    message: '전재산을 털어서 샀어요^^ 가격대비 맛이 좋아요',
  },

  // 김편집 방문 이후 추가 (12-05)
  {
    phone: '43**',
    message: '편문철TV 안녕하세요 V^^V',
  },

  {
    phone: '2015',
    message: '다음은 누구지?',
  },
  {
    phone: '398*',
    message: '4만원보다 덜하는 금액, 너무 파격적인데요?',
  }
];

export default LiveChatData;
