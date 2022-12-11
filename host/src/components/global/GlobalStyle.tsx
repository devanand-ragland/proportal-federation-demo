import { createGlobalStyle } from 'styled-components';
import lightTheme from 'themes/light';

type Theme = typeof lightTheme;

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
  }
`;

export default GlobalStyle;
