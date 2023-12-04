import { Sheet, Stack, Typography } from "@mui/joy";

export default function LiveTalk() {
    return <Sheet sx={{ padding: '.5rem'}}>
        <Stack direction="row" gap={2}>
            <Typography level="title-md">라이브톡</Typography>                    
            <Stack direction="row" gap={1}>
                <Typography level="body-md">9965</Typography>
                <Typography level="body-md">저희 아이가 좋아해요</Typography>
            </Stack>
        </Stack>
    </Sheet>
};