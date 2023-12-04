import Link from 'next/link';
import { Link as JoyLink } from '@mui/joy';

export default function NextLink(props: (Parameters<typeof Link> & Parameters<typeof JoyLink>)[0]) {
    return <JoyLink component={Link} {...props}></JoyLink>
}
