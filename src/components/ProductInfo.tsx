import { Chip, Sheet, Stack, Typography } from "@mui/joy";

export default function ProductInfo() {
    return <Sheet variant="soft" sx={{ padding: '.5rem' }}>
        <Stack direction="row" gap={1}>
            <Chip color="danger">NEW</Chip>
            <Typography>뱀파이어 전향 계약 키트&trade;</Typography>
        </Stack>
        <Stack direction="column" gap={2}>
            <Typography level="title-sm">선택1) 초회특전 모조 피 세트</Typography>
            <Stack direction="row" alignItems="baseline" gap={0.5}>
                <Typography level="h2">39,800</Typography>
                <Typography level="body-lg">원/무3</Typography>
            </Stack>
        </Stack>
    </Sheet>
};