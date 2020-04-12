import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import ROUTES_WAYS from '@constants/RoutesWays';

import PrivateRoutesLoadable from './PrivateRoutes.loadable';

const { Main } = PrivateRoutesLoadable;

const PrivateRoutes: FC = () => (
  <>
    <Route exact component={Main} path={ROUTES_WAYS.ROOT} />
    <Route path="*" render={(): JSX.Element => <Redirect to={ROUTES_WAYS.ROOT} />} />
  </>
);

export default PrivateRoutes;
