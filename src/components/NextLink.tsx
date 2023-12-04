import { Link as JoyLink } from '@mui/joy';
import Link from 'next/link';

export default function NextLink(
  props: (Parameters<typeof Link> & Parameters<typeof JoyLink>)[0],
) {
  return <JoyLink component={Link} {...props}></JoyLink>;
}
