import React, {Component} from 'react';
import Layout from "./gridLayout";
import GlobalStyle from './shared/global/GlobalStyle';
import ThemePreferencesProvider from './shared/global/ThemePreferencesProvider';

const App = () => (
  <div>
    <h1>Camera</h1>
    <ThemePreferencesProvider>
      <GlobalStyle />
       <Layout />
    </ThemePreferencesProvider>
  </div>
);

export default App;
