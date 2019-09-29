const fontFamily = 'Work Sans';
const monospaceFontFamily = 'Roboto Mono';

module.exports = {
  title: 'use-axios-client',
  repository: 'https://github.com/angelle-sw/use-axios-client',
  typescript: true,
  ignore: ['*.md'],
  menu: ['Introduction', 'useAxios', 'useLazyAxios', 'TypeScript'],
  themeConfig: {
    prism: {
      light: {
        plain: {
          color: '#2f7973',
          backgroundColor: '#f6f8fa',
        },
        styles: [
          {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: {
              color: '#999988',
              fontStyle: 'italic',
            },
          },
          {
            types: ['namespace'],
            style: {
              opacity: 0.7,
            },
          },
          {
            types: ['string', 'attr-value'],
            style: {
              color: '#9161a9',
            },
          },
          {
            types: ['punctuation', 'operator'],
            style: {
              color: '#393A34',
            },
          },
          {
            types: [
              'entity',
              'url',
              'symbol',
              'number',
              'boolean',
              'variable',
              'constant',
              'property',
              'regex',
              'inserted',
            ],
            style: {
              color: '#36acaa',
            },
          },
          {
            types: ['atrule', 'keyword', 'attr-name', 'selector'],
            style: {
              color: '#00a4db',
            },
          },
          {
            types: ['function', 'deleted', 'tag'],
            style: {
              color: '#d73a49',
            },
          },
          {
            types: ['function-variable'],
            style: {
              color: '#6f42c1',
            },
          },
          {
            types: ['tag', 'selector', 'keyword'],
            style: {
              color: '#012e3f',
            },
          },
        ],
      },
    },
    fonts: {
      monospace: monospaceFontFamily,
    },
    styles: {
      root: {
        fontFamily,
        color: '#012e3f',
      },
      h1: {
        marginBottom: 20,
        fontFamily,
        fontWeight: 700,
        fontSize: 50,
        letterSpacing: '-2px',
      },
      p: {
        fontWeight: 300,
      },
      a: {
        color: '#2f7973',
        fontWeight: 400,
        borderBottom: '1px solid #2f7973',
        ':hover': {
          textDecoration: 'none',
          color: '#012e3f',
          borderBottomColor: '#012e3f',
        },
      },
      pre: {
        fontSize: 16,
      },
      table: {
        fontSize: 18,
        fontWeight: 300,
      },
      th: {
        fontSize: 20,
        borderColor: '#cbd9dc !important',
      },
      td: {
        borderColor: '#cbd9dc !important',
      },
      li: {
        fontWeight: 300,
      },
    },
  },
};
