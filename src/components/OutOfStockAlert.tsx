import { Sheet, Stack, Typography } from "@mui/joy";
import { FC, ReactNode } from "react";

const LongShadowMe: FC<{
    children: ReactNode
}> = ({ children }) => {
    let shadowStyle = '';
    for (let i = 0; i < 100; i++) {
        if (shadowStyle !== '') shadowStyle += ', ';
        shadowStyle += `${i}px ${i}px #270707`;
    }

    return <div style={{ textShadow: shadowStyle }}>
        {children}
    </div>
}

export default function OutOfStockAlert() {
    return <Sheet variant="soft" color="danger" sx={{ padding: '.5rem', flexGrow: 1, overflow: 'hidden' }}>
        <Stack direction="column" alignItems="end" justifyContent="center" sx={{height: '100%'}}>
            <LongShadowMe><Typography sx={{fontSize: '3rem'}} color="danger" level="h2">매진&nbsp;</Typography></LongShadowMe>
            <LongShadowMe><Typography sx={{fontSize: '3rem'}} color="danger" level="h2">임박!</Typography></LongShadowMe>
        </Stack>
    </Sheet>
};