'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 다시 EC 로 보내버리고
      window.location.href = 'https://store.steampowered.com/app/2325460/EZ2ON_REBOOT__R__ENDLESS_CIRCULATION/';

      // 김장미는 통신판매업 미등록으로, 판매를 할 수 없습니다.
      // 애초에 식약처 허가를 받지 않은 불법식품 및 허위과대광고잖아?
      // ===[ BAN! ]===
      //
      // ^ 지금 찾아보니까 브가에 "뱀파이어 주식회사" 라고 법인으로 판매하긴 하는데
      //   나이스 비즈라인 뒤져봐도 뱀파이어(주) 는 없는데?
      //   통판업 받은걸로 쳐보겠음 오케이...
      //
      // window.location.href = 'http://warning.or.kr/i6.html';

      // 남위 사관들 이것도 너프해 보시지
    }
  }, []);

  return <></>;
}

