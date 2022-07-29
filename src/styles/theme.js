export const fonts = {
  sizes: {
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    big: '4.0rem',
    huge: '4.8rem',
  },
  family: {
    header: "'Roboto', sans-serif",
    description: "'Lato', sans-serif",
  },
};

export const media = {
  lteMedium: '(max-width: 768px)',
};

export const lightTheme = {
  colors: {
    menu: {
      primary: '#A1A1A6',
      background: '#262626',
      selected: {
        primary: 'black',
        background: '#A1A1A6',
      },
    },

    primary: '#d3d7cf',
    lightBg: '#262626',
  },
  fonts: fonts,
  media: media,
};

export const darkTheme = {
  colors: {
    menu: {
      primary: '#262626',
      background: '#A1A1A6',
      selected: {
        primary: 'white',
        background: '#262626',
      },
    },

    primary: '#d3d7cf',
    lightBg: '#262626',
  },
  fonts: fonts,
  media: media,
};
