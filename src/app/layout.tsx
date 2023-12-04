import ThemeWrapper from '@/wrappers/ThemeWrapper';
import type { Metadata } from 'next'
import 'normalize.css/normalize.css';

import { Stack, CircularProgress, Typography } from '@mui/joy';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'INSTANT Vampire†StartKit™',
  description: '👻 어둠속에 😱 유폐당한 ⚰️ 고독한 🌙 밤의 친우여 ⚠️ ３９８００원 ⚠️ 한정 💰 판매가 🧛‍♂️ 전향 계약 🧛‍♀️ 키트를 😉 추천하오 👍 빛🔆의 세계🌏와 고별🖐한 굳게 잠근 방문🚪이여 초1️⃣회 특전 모조 피🩸를 흡혈🧛‍♂️하며 진정한 어둠⚫에 취해🍷 보시오 🧛‍♂️ 너도 뱀파이어 🩸 나도 뱀파이어 🧛‍♂️',
  viewport: "initial-scale=1, width=device-width",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <ThemeWrapper>
          <Suspense fallback={<div>
              <style>{`
                  @media screen and (prefer-color-scheme: dark) {
                      html, body {
                          background: #000;        
                      }
                  }
              `}</style>
              <Stack justifyContent="center" alignItems="center" sx={{ height: '100dvh' }}>
                <Stack direction="column" justifyContent="center" alignItems="center" gap={2}>
                  <CircularProgress size="lg" color="danger" />
                  <Typography level="body-md">모델 불러오는 중...</Typography>
                </Stack>
              </Stack>
          </div>}>
            {children}
          </Suspense>
        </ThemeWrapper>
      </body>
    </html>
  )
}
