/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import * as styles from './styles';

export const NavLink = ({ item, ...props }) => {
  const to = item.route;

  return <Link {...props} to={to} sx={styles.link} activeClassName="active" />;
};
