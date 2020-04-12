import React, { FC } from 'react';
import { useLocalizationDictionary } from '@hooks/useLocalization';
import { Helmet } from 'react-helmet';

const Login: FC = () => {
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

export default Login;
