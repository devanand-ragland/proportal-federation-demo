// import React from 'react';
// //disable typescript error for this line
// // @ts-ignore
// const RemoteButton = React.lazy(() => import('remote/Button'));

// const App = () => (
//   <div>
//     <h1>Basic Host-Remote</h1>
//     <h2>Host</h2>
//     <React.Suspense fallback="Loading Button">
//       <RemoteButton />
//     </React.Suspense>
//   </div>
// );

// export default App;

import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
// @ts-ignore 
import { Titled } from 'react-titled';
import GlobalStyle from 'components/global/GlobalStyle';
import ThemePreferencesProvider from 'components/global/ThemePreferencesProvider';
import config, { ENABLE_MOCKS } from 'config';
// @ts-ignore 

import Routes from 'routes';
import Router from 'Router';
import { History } from 'history';

import { local } from 'utils/storage';
import { Auth0Provider } from '@auth0/auth0-react';

import 'styles/fonts.css';
import 'styles/app.css';

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const onRedirectCallback = appState => {
    history.replace(appState?.returnTo || window.location.pathname);
  };

    return (
      <Auth0Provider
        audience={config.audience}
        domain={config.domain}
        clientId={config.clientId}
        onRedirectCallback={onRedirectCallback}
        redirectUri={window.location.origin}
        scope={config.scope}
        useRefreshTokens={true}>
        {children}
      </Auth0Provider>
    );
  
};

const App: FC<{ history?: History }> = ({ history }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const prefLocale = local.getItem('pref-locale');
    if (prefLocale && prefLocale !== 'en') {
      i18n.changeLanguage(prefLocale);
    }
  }, [i18n]);

  return (
       <Router history={history}>
          <ThemePreferencesProvider>
            <Titled title={() => t('title')}>
              <GlobalStyle />
              <Routes />
            </Titled>
          </ThemePreferencesProvider>
       </Router> 
  );
};

export default App;
