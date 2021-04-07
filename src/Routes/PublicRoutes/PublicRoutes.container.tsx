import { PUBLIC_ROUTES_WAYS } from '@constants/RoutesWays';
import { Login } from '@pages/Login';

import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoutes: FC = () => (
  <>
    <Route path={PUBLIC_ROUTES_WAYS.LOGIN} component={Login} />
    <Route path="/qqq" component={Login} />

    <Route>
      <Redirect to={PUBLIC_ROUTES_WAYS.LOGIN} />
    </Route>
  </>
);

PublicRoutes.displayName = 'PublicRoutes';
