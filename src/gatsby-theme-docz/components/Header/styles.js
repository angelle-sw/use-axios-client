import { centerAlign } from '../../utils/mixins';

export const wrapper = {
  bg: '#012e3f',
  position: 'relative',
  borderBottom: t => `1px solid ${t.colors.border}`,
};

export const innerContainer = {
  px: 5,
  py: '16px',
  position: 'relative',
  justifyContent: 'space-between',
};

export const headerButton = {
  ...centerAlign,
  outline: 'none',
  p: '12px',
  border: 'none',
  borderRadius: 9999,
  bg: '#0f434c',
  color: 'header.button.color',
  fontSize: 0,
  fontWeight: 600,
  ':hover': {
    cursor: 'pointer',
  },
};

export const editButton = {
  position: 'absolute',
  bottom: -40,
  right: 30,
  bg: 'transparent',
  color: 'muted',
  fontSize: 1,
  textDecoration: 'none',
  borderRadius: 'radius',
};
