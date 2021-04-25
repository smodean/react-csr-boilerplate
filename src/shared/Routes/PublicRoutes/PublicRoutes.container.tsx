import { PUBLIC_ROUTES_WAYS } from '@shared/constants/RoutesWays';
import { Login } from '@shared/pages/Login';

import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoutes: FC = () => (
  <>
    <Route component={Login} path={PUBLIC_ROUTES_WAYS.LOGIN} />

    <Route>
      <Redirect to={PUBLIC_ROUTES_WAYS.LOGIN} />
    </Route>
  </>
);

PublicRoutes.displayName = 'PublicRoutes';
