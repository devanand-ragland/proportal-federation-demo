import React, { FC } from 'react';
import { GlobalStyle, LayoutContainer } from './Layout.style';

export const Layout: FC = ({ children }) => (
  <LayoutContainer>
    <GlobalStyle />
    {children}
  </LayoutContainer>
);
