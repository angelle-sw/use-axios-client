/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import * as styles from './styles';

export const Logo = () => (
  <Link to="/" sx={{ textDecoration: 'none' }}>
    <div sx={styles.logo}>use-axios-client</div>
  </Link>
);
