import React, { FC } from 'react';

import { Props } from './LoadableLoading.types';

const LoadableLoading: FC<Props> = (props) => {
  const {
    isLoading, timedOut, error, pastDelay,
  } = props;

  if (isLoading) {
    if (timedOut) {
      return <div>Loader timed out!</div>;
    }

    if (pastDelay) {
      return <div>Loading...</div>;
    }

    return null;
  }

  if (error) {
    return <div>Error! Component failed to load</div>;
  }

  return null;
};

export default LoadableLoading;
