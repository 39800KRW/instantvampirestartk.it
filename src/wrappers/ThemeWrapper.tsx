'use client';

import { CssBaseline, getInitColorSchemeScript } from '@mui/joy';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import React from 'react';
import PretendardWrapper from './PretendardWrapper';

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CssVarsProvider
      defaultMode="system"
      theme={extendTheme({
        fontFamily: {
          display: 'Pretendard',
          body: 'Pretendard',
        },
      })}>
      {getInitColorSchemeScript()}
      <CssBaseline />
      <PretendardWrapper>{children}</PretendardWrapper>
    </CssVarsProvider>
  );
}
