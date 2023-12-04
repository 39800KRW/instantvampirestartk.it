import { Sheet, Stack, Typography } from '@mui/joy';

export default function ProductExplain() {
  return (
    <Sheet variant="soft" sx={{ padding: '.5rem' }}>
      <Stack direction="column" gap={2}>
        <Stack direction="column">
          <Typography level="title-sm">흡혈귀 전문 연구진의</Typography>
          <Typography color="danger" level="h3">
            전문 연구 결과
            <br />
            검증 완료!
          </Typography>
        </Stack>
        <Stack direction="column">
          <Typography level="body-sm">&middot; 활력 증진</Typography>
          <Typography level="body-sm">&middot; 집중력 유지</Typography>
          <Typography level="body-sm">&middot; 면역력 상승</Typography>
        </Stack>
      </Stack>
    </Sheet>
  );
}
