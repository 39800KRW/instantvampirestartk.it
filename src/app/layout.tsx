import 'material-icons/iconfont/material-icons.css';
import './global.css';

import type { Metadata } from 'next';

import Providers from '@/app/Providers';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'INSTANT Vampire†StartKit™',
  description:
    '👻 어둠속에 😱 유폐당한 ⚰️ 고독한 🌙 밤의 친우여 ⚠️ ３９８００원 ⚠️ 한정 💰 판매가 🧛‍♂️ 전향 계약 🧛‍♀️ 키트를 😉 추천하오 👍 빛🔆의 세계🌏와 고별🖐한 굳게 잠근 방문🚪이여 초1️⃣회 특전 모조 피🩸를 흡혈🧛‍♂️하며 진정한 어둠⚫에 취해🍷 보시오 🧛‍♂️ 너도 뱀파이어 🩸 나도 뱀파이어 🧛‍♂️',
  viewport: 'initial-scale=1, width=device-width',
};

const gmarketSans = localFont({
  src: [
    {
      path: '../../public/assets/fonts/GmarketSansOTF/GmarketSansLight.woff2',
      weight: '300',
    },
    {
      path: '../../public/assets/fonts/GmarketSansOTF/GmarketSansMedium.woff2',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts/GmarketSansOTF/GmarketSansBold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-gmarket-sans',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={`dark bg-black ${gmarketSans.className}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
