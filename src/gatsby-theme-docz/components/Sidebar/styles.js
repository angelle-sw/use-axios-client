import { media } from '../../theme/breakpoints';

export const global = {
  body: {
    overflow: 'hidden',
  },
};

export const overlay = ({ open }) => ({
  zIndex: 999,
  position: 'fixed',
  top: 104,
  right: 0,
  bottom: 0,
  left: 0,
  background: 'rgba(0,0,0,0.6)',
  transition: 'all .2s ease-out',
  visibility: open ? 'visible' : 'hidden',
  opacity: open ? 1 : 0,
});

export const wrapper = ({ open }) => ({
  py: 5,
  px: 5,
  flexDirection: 'column',
  position: 'sticky',
  top: 0,
  zIndex: 1,
  minWidth: 0,
  maxHeight: '100vh',
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  bg: '#f3f8f9',

  [media.tablet]: {
    zIndex: 9999,
    display: 'block',
    position: 'fixed',
    top: 104,
    left: 0,
    bottom: 0,
    width: 256,
    px: 4,
    bg: 'background',
    transition: 'transform .2s ease-out',
    transform: open ? 'translateX(0)' : 'translateX(-100%)',
  },
});
