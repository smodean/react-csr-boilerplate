import { useLocalizationDictionary } from '@shared/hooks/localization/useLocalizationDictionary';

import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

export const Login: FC = () => {
  const localizationDictionary = useLocalizationDictionary();

  return (
    <>
      <Helmet>
        <title>{localizationDictionary.LOGIN_PAGE}</title>
      </Helmet>
      <div>{localizationDictionary.LOGIN_PAGE}</div>
    </>
  );
};

Login.displayName = 'Login';
