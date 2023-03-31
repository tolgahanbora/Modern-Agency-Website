/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link

      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
        textDecoration: 'none'
        
      }}
      {...rest}
    >
      <h3><b>Tolgahan Bora Agency</b></h3>
    </Link>
  );
}
