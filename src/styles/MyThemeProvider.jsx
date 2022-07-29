import P from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Home } from '../pages/Home';

import { GlobalStyles } from './global-styles';
import { darkTheme, lightTheme } from './theme';
import { useDarkMode } from './useDarkMode';

export const MyThemeProvider = () => {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode} toggleTheme={toggleTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};
