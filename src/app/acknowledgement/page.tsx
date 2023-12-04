import NextLink from '@/components/NextLink';
import { Stack,Typography } from '@mui/joy';

export default function Acknowledgement() {
    return <>
        <Stack direction="column" gap={4} sx={{padding: '1rem' }}>
            <Stack direction="column" gap={2}>
                <Typography level="h1">저작권</Typography>
                <Typography level="body-md">
                    이 웹페이는 다음을 이용하여 제작되었습니다.
                </Typography>
            </Stack>

            <Stack direction="column" gap={2}>
                <Stack direction="row" gap={1}>
                    <Typography level="title-md">혈액팩 3D 모델</Typography>
                    <Typography level="body-md">SketchFab - Blood Pack (Low-poly PBR)</Typography>
                    <NextLink href="https://sketchfab.com/3d-models/blood-pack-low-poly-pbr-e8122f4880df4286baa08ca79eae1253#download">웹페이지</NextLink>
                    <Typography level="body-sm">Distributed under CC-BY 4.0 License</Typography>
                </Stack>
                <Stack direction="row" gap={1}>
                    <Typography level="body-md">사용된 오픈소스 기술에 대해서는 본 웹페이지의</Typography>
                    <NextLink href="https://github.com/Alex4386/instantvampirestartk.it">레포지토리</NextLink>
                    <Typography level="body-md">를 참고바랍니다.</Typography>
                </Stack>
            </Stack>



        </Stack>
    </>
};
