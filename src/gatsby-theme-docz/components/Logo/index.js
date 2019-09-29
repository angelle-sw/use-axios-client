/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as styles from './styles';
import logo from '../../assets/use-axios-client.png';

export const Logo = () => <img src={logo} sx={styles.logo} alt="use-axios-client" />;
