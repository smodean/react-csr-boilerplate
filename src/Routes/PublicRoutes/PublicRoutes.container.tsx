import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { PUBLIC_ROUTES_WAYS } from '@constants/RoutesWays';
import PublicRoutesLoadable from './PublicRoutes.loadable';

const { Login } = new PublicRoutesLoadable();

const PublicRoutes: FC = () => (
  <>
    <Route exact path={PUBLIC_ROUTES_WAYS.LOGIN} component={Login} />
    <Route path="*" render={(): JSX.Element => <Redirect to={PUBLIC_ROUTES_WAYS.LOGIN} />} />
  </>
);

export default PublicRoutes;
