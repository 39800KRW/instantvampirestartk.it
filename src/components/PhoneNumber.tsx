import { Stack, Typography } from '@mui/joy';
import { FC } from 'react';

const PhoneNumber: FC<{
    title: string;
    number: string;
}> = ({title, number}) => {
    return <Stack direction="row" gap={2} alignItems="center" sx={{
        display: { xs: 'none', md: 'flex'}
    }}>
        <Typography level="title-lg" sx={{
            width: 'fit-content',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        }}>{title}</Typography>
        <Typography level="body-lg" sx={{
            width: 'fit-content',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        }}>{number}</Typography>
    </Stack>
}

export default PhoneNumber;
