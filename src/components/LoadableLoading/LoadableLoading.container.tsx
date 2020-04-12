import React, { FC } from 'react';

import { useLocalizationDictionary } from '@hooks/useLocalization';

import { Props } from './LoadableLoading.types';

const LoadableLoading: FC<Props> = (props) => {
  const {
    isLoading, timedOut, error, pastDelay,
  } = props;

  const localizationDictionary = useLocalizationDictionary();

  if (isLoading) {
    if (timedOut) {
      return <div>{localizationDictionary.LOADING_TIMEOUT}</div>;
    }

    if (pastDelay) {
      return <div>{localizationDictionary.LOADING}</div>;
    }

    return null;
  }

  if (error) {
    return <div>{localizationDictionary.LOADING_ERROR}</div>;
  }

  return null;
};

export default LoadableLoading;
