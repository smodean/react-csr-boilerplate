import React, { FC } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// import PrivateRoutes from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const Routes: FC = () => {
  const routes = ((): JSX.Element =>
  // if (false) {
  //   return <PrivateRoutes />;
  // }

    <PublicRoutes />
  )();

  return (
    <Router>
      <Switch>
        {routes}
      </Switch>
    </Router>
  );
};

Routes.displayName = 'Routes';
