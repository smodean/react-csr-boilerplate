import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import ROUTES_WAYS from '@constants/RoutesWays';
import PublicRoutesLoadable from './PublicRoutes.loadable';

const { Login } = PublicRoutesLoadable;

const PublicRoutes: FC = () => (
  <>
    <Route exact path={ROUTES_WAYS.LOGIN} component={Login} />
    <Route path="*" render={(): JSX.Element => <Redirect to={ROUTES_WAYS.LOGIN} />} />
  </>
);

export default PublicRoutes;
