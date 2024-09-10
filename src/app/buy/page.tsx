import { redirect } from 'next';

export default function Home() {
  // 예전에 EZ2AC Reboot
  // redirect('https://store.steampowered.com/app/2325460/EZ2ON_REBOOT__R__ENDLESS_CIRCULATION/', 302);

  // 김장미는 통신판매업 미등록으로, 판매를 할 수 없습니다.
  // 애초에 식약처 허가를 받지 않은 불법식품 및 허위과대광고잖아?
  // ===[ BAN! ]===
  redirect('http://warning.or.kr/i6.html', 302);
}
