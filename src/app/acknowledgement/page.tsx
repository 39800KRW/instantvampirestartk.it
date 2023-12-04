import NextLink from '@/components/NextLink';
import { Stack,Typography } from '@mui/joy';

export default function Acknowledgement() {
    return <>
        <Stack direction="column" gap={4} sx={{padding: '1rem' }}>
            <Stack direction="column" gap={2}>
                <Typography level="h1">저작권</Typography>
                <Typography level="body-md">
                    이 웹페이지는 다음을 이용하여 제작되었습니다.
                </Typography>
            </Stack>

            <Stack direction="column" gap={2}>
                <Stack direction="row" gap={1} alignItems="baseline">
                    <Typography level="title-md">혈액팩 3D 모델</Typography>
                    <Typography level="body-md">SketchFab - Blood Pack (Low-poly PBR)</Typography>
                    <NextLink href="https://sketchfab.com/3d-models/blood-pack-low-poly-pbr-e8122f4880df4286baa08ca79eae1253#download">웹페이지</NextLink>
                    <Typography level="body-sm">Distributed under CC-BY 4.0 License</Typography>
                </Stack>
            </Stack>
        </Stack>
    </>
};
