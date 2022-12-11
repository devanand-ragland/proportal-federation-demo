import React, { ComponentType, lazy, FC } from 'react';
import { Switch } from 'react-router-dom';

import Route, { AnonymousRoute } from 'components/Route';
import AppLayout from 'components/AppLayout';
import PageError from 'components/common/PageError';

import SignIn from 'routes/SignIn';
import SignOut from 'routes/SignOut';

type LazyModulePromise = Promise<{ default: ComponentType<any> }>;

const IntroLetter = lazy((): LazyModulePromise => import('components/IntroLetter'));

const Routes: FC = () => (
  <Switch>
    <AnonymousRoute path='/sign-out'>
      <SignOut />
    </AnonymousRoute>
    <AnonymousRoute
      path='/'
      render={() => (
        <AppLayout>
          <Switch>
            <AnonymousRoute path='/sign-in'>
              <SignIn />
            </AnonymousRoute>
            <Route path='/' exact>
              <IntroLetter />
            </Route>
            <AnonymousRoute>
              <PageError />
            </AnonymousRoute>
          </Switch>
        </AppLayout>
      )}
    />
  </Switch>
);

export default Routes;
