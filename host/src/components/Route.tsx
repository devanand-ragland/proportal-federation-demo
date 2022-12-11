import React, { FC, useEffect, Suspense } from 'react';
import { RedirectLoginOptions } from '@auth0/auth0-spa-js';
import { Route as ReactRouterRoute, RouteProps } from 'react-router-dom';
import PageError from 'components/common/PageError';
import PageLoading from 'components/common/PageLoading';
import config from 'config';

const { auth0Connection } = config;

export const AnonymousRoute: FC<RouteProps> = props => (

    <Suspense fallback={<PageLoading />}>
      <ReactRouterRoute {...props} />
    </Suspense>

);

const defaultReturnTo = (): string => `${window.location.pathname}${window.location.search}`;

const Route: FC<RouteProps> = props => {


  const returnTo = defaultReturnTo;
  const loginOptions: RedirectLoginOptions = {
    connection: auth0Connection,
  };

  useEffect(() => {

    const opts = {
      ...loginOptions,
      appState: {
        ...loginOptions.appState,
        returnTo: typeof returnTo === 'function' ? returnTo() : returnTo,
      },
    };
  
  }, [loginOptions, returnTo]);

  return <AnonymousRoute {...props} />;
};

export default Route;
