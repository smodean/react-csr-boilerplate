import React, { FC } from 'react';
import { useLocalizationDictionary } from '@hooks/useLocalization';

const Login: FC = () => {
  const localizationDictionary = useLocalizationDictionary();

  return (<div>{localizationDictionary.LOGIN_PAGE}</div>);
};

export default Login;
