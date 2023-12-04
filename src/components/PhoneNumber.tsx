import { Stack, Typography } from '@mui/joy';
import { FC } from 'react';

const PhoneNumber: FC<{
    title: string;
    number: string;
}> = ({title, number}) => {
    return <Stack direction="row" gap={2} alignItems="center">
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-lg">{number}</Typography>
    </Stack>
}

export default PhoneNumber;
