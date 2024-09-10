'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // window.location.href = 'https://store.steampowered.com/app/2325460/EZ2ON_REBOOT__R__ENDLESS_CIRCULATION/';

      // 김장미는 통신판매업 미등록으로, 판매를 할 수 없습니다.
      // 애초에 식약처 허가를 받지 않은 불법식품 및 허위과대광고잖아?
      // ===[ BAN! ]===

      window.location.href = 'http://warning.or.kr/i6.html';
    }
  }, []);

  return <></>;
}
