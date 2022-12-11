import { Box } from '@resideo/blueprint-react';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

export const LayoutContainer = styled(Box)`
  padding-top: 0.05px; /* prevent margin-collapse */
  height: 100vh;
`;

export const CenterContent = styled(Box)`
  margin: ${({ theme }) => theme.space.xLarge} auto;
`;
