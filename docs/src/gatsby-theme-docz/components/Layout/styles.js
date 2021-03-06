import { media } from '../../theme/breakpoints';
import * as mixins from '../../utils/mixins';

export const main = {
  display: 'flex',
  flexDirection: 'column',
};

export const wrapper = {
  flex: 1,
  display: 'grid',
  gridTemplateRows: '100%',
  gridTemplateColumns: '325px 1fr',
  [media.tablet]: {
    display: 'block',
  },
};

export const content = {
  position: 'relative',
  margin: '0 30px',
  maxWidth: 1140,
  py: 5,
  px: 4,
  [media.tablet]: {
    margin: 0,
    py: 4,
    px: 4,
  },
};

export const menuIcon = {
  position: 'absolute',
  top: -48,
  left: 20,
  display: 'none',
  [media.tablet]: {
    display: 'block',
  },
};

export const menuButton = {
  ...mixins.ghostButton,
  color: '#fff',
  opacity: 0.7,
};
