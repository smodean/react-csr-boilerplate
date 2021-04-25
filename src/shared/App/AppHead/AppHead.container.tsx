import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const AppHead: FC = () => (
  <Helmet>
    <title>Awesome Boilerplate</title>
  </Helmet>
);

AppHead.displayName = 'AppHead';
