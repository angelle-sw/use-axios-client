/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import * as styles from './styles';
import logo from '../../assets/use-axios-client.png';

export const Logo = () => (
  <Link to="/" sx={{ textDecoration: 'none' }}>
    <div sx={styles.logo}>
      <img src={logo} sx={styles.logo} alt="use-axios-client" />
    </div>
  </Link>
);
