import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { PRIVATE_ROUTES_WAYS } from '@constants/RoutesWays';

import PrivateRoutesLoadable from './PrivateRoutes.loadable';

const { Main } = new PrivateRoutesLoadable();

const PrivateRoutes: FC = () => (
  <>
    <Route exact component={Main} path={PRIVATE_ROUTES_WAYS.MAIN} />
    <Route path="*" render={(): JSX.Element => <Redirect to={PRIVATE_ROUTES_WAYS.MAIN} />} />
  </>
);

export default PrivateRoutes;
