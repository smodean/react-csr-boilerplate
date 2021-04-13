import { PRIVATE_ROUTES_WAYS } from '@shared/constants/RoutesWays';
import { Main } from '@shared/pages/Main';

import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoutes: FC = () => (
  <>
    <Route exact component={Main} path={PRIVATE_ROUTES_WAYS.MAIN} />
    <Route>
      <Redirect to={PRIVATE_ROUTES_WAYS.MAIN} />
    </Route>
  </>
);

PrivateRoutes.displayName = 'PrivateRoutes';
