import React from 'react';
import { useLocalStorage } from '@rehooks/local-storage';
import useMatchMedia from 'use-match-media';
import { ThemeProvider } from '@resideo/blueprint-react';
import darkTheme from 'themes/dark';
import lightTheme from 'themes/light';

export function useThemePreferenceState() {
  return useLocalStorage('theme');
}

const ThemePreferencesProvider = ({ children }): JSX.Element => {
  const [explicitThemePreference] = useThemePreferenceState();
  const browserPrefersDarkTheme = useMatchMedia('(prefers-color-scheme: dark)');

  const prefersDarkTheme = explicitThemePreference ? explicitThemePreference === 'dark' : browserPrefersDarkTheme;

  return <ThemeProvider theme={prefersDarkTheme ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};

export default ThemePreferencesProvider;
