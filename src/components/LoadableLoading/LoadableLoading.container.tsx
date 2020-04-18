import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { useLocalizationDictionary } from '@hooks/useLocalization';

import { Props } from './LoadableLoading.types';

const LoadableLoading: FC<Props> = (props) => {
  const {
    isLoading, timedOut, error, pastDelay,
  } = props;

  const localizationDictionary = useLocalizationDictionary();
  const { LOADING_TIMEOUT, LOADING, LOADING_ERROR } = localizationDictionary;

  if (isLoading) {
    if (timedOut) {
      return (
        <>
          <Helmet>
            <title>{LOADING_TIMEOUT}</title>
          </Helmet>
          <div>{LOADING_TIMEOUT}</div>
        </>
      );
    }

    if (pastDelay) {
      return (
        <>
          <Helmet>
            <title>{LOADING}</title>
          </Helmet>
          <div>{LOADING}</div>
        </>
      );
    }

    return (
      <Helmet>
        <title>{LOADING}</title>
      </Helmet>
    );
  }

  if (error) {
    return (
      <>
        <Helmet>
          <title>{LOADING_ERROR}</title>
        </Helmet>
        <div>{LOADING_ERROR}</div>
      </>
    );
  }

  return null;
};

export default LoadableLoading;
