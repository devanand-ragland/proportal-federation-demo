import React, { FC } from 'react';
import { History } from 'history';
import { BrowserRouter, Router as MemoryRouter } from 'react-router-dom';

const Router: FC<any> = ({ history, children }) => {
  if (history) {
    return <MemoryRouter history={history}>{children}</MemoryRouter>;
  }

  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Router;