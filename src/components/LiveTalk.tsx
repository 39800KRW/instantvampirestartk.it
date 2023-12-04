import { LiveChatDataInterface } from '@/data/LiveChatData';
import { Sheet, Stack, Typography } from '@mui/joy';
import { FC } from 'react';

const LiveTalk: FC<LiveChatDataInterface> = ({ phone, message }) => {
  return (
    <Sheet sx={{ padding: '.5rem', width: '100%' }}>
      <Stack
        direction="row"
        gap={2}
        style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
        <Typography level="title-md">라이브톡</Typography>
        <Stack direction="row" gap={1}>
          <Typography level="body-md">{phone}</Typography>
          <Typography
            level="body-md"
            style={{
              width: '100%',
              maxWidth: '100%',
              whiteSpace: 'pre',
              wordBreak: 'keep-all',
              textOverflow: 'ellipsis',
            }}>
            {message}
          </Typography>
        </Stack>
      </Stack>
    </Sheet>
  );
};

export default LiveTalk;
