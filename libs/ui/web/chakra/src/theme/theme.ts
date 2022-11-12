import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import Button from './components/button';
import Alert from './components/alert';
import { TinyColor } from '@ctrl/tinycolor';

const styles = {
  global: {
    body: {
      background: 'bg-default',
    },
  },
};

const colorTokens = {
  light: {
    primary: {
      main: new TinyColor('#14dca0'),
      light: new TinyColor('#13c891'),
      dark: new TinyColor('#12ac7d'),
    },
    background: {
      default: new TinyColor('#ffffff'),
      secondary: new TinyColor('#f0f3f5'),
    },
  },
  dark: {
    primary: {
      main: new TinyColor('#14dca0'),
      light: new TinyColor('#16ecac'),
      dark: new TinyColor('#00ffb3'),
    },
    background: {
      default: new TinyColor('#121a1d'),
      secondary: new TinyColor('#1a262c'),
    },
  },
};

const radiiTokens = {
  none: '0',
  sm: '0.525rem',
  base: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '1.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

// const semanticTokens = {
//   colors: {
//     'btn-primary-idle': {
//       default: colorTokens.light['btn-primary-idle'],
//       _dark: colorTokens.dark['btn-primary-idle'],
//     },
//     'btn-primary-hover': {
//       default: colorTokens.light['btn-primary-hover'],
//       _dark: colorTokens.dark['btn-primary-hover'],
//     },
//     'btn-primary-active': {
//       default: colorTokens.light['btn-primary-active'],
//       _dark: colorTokens.dark['btn-primary-active'],
//     },
//     'btn-primary-ghost-idle': {
//       default: colorTokens.light['btn-primary-ghost-idle'],
//       _dark: colorTokens.dark['btn-primary-ghost-idle'],
//     },
//     'btn-primary-ghost-hover': {
//       default: colorTokens.light['btn-primary-ghost-hover'],
//       _dark: colorTokens.dark['btn-primary-ghost-hover'],
//     },
//     'btn-primary-ghost-active': {
//       default: colorTokens.light['btn-primary-ghost-active'],
//       _dark: colorTokens.dark['btn-primary-ghost-active'],
//     },
//     'bg-default': {
//       default: colorTokens.light['bg-default'],
//       _dark: colorTokens.dark['bg-default'],
//     },
//     'bg-secondary': {
//       default: colorTokens.light['bg-secondary'],
//       _dark: colorTokens.dark['bg-secondary'],
//     },
//   },
// };

const theme = extendTheme(
  {
    // styles: styles,
    // semanticTokens: semanticTokens,
    radii: radiiTokens,
    // components: {
    //   Button,
    //   Alert,
    // },
  }
  // withDefaultColorScheme({
  //   colorScheme: 'primary',
  //   components: ['Button'],
  // })
);

export default theme;
