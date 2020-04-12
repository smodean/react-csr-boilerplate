import React, { FC } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Routes: FC = () => {
  const routes = ((): JSX.Element => {
    if (false) {
      return <PrivateRoutes />;
    }

    return <PublicRoutes />;
  })();

  return (
    <Router>
      <Switch>
        {routes}
      </Switch>
    </Router>
  );
};

export default Routes;
