'use client'

import React from "react";
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import { CssBaseline, getInitColorSchemeScript } from '@mui/joy';
import PretendardWrapper from "./PretendardWrapper";

export default function ThemeWrapper({
    children,
}: {
    children: React.ReactNode,
}) {
    return <CssVarsProvider defaultMode="system" theme={extendTheme({
        fontFamily: {
            display: 'Pretendard',
            body: 'Pretendard',
        }
    })}>
        {getInitColorSchemeScript()}
        <CssBaseline />
        <PretendardWrapper>
            {children}
        </PretendardWrapper>
    </CssVarsProvider>;
}
