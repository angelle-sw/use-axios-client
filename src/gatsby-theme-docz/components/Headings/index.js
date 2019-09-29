/** @jsx jsx */
import { jsx } from 'theme-ui';

const heading = Tag => ({ id, children }) => (
  <Tag id={id}>
    <a
      href={`#${id}`}
      sx={{
        color: 'inherit',
        textDecoration: 'none',
        ':hover': {
          textDecoration: 'underline',
        },
      }}
    >
      <span sx={{ color: '#d73a49' }}># </span>
      {children}
    </a>
  </Tag>
);

export const h2 = heading('h2');
export const h3 = heading('h3');
export const h4 = heading('h4');
export const h5 = heading('h5');
export const h6 = heading('h6');
