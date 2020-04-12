import React, { FC } from 'react';

import { useLocalizationDictionary } from '@hooks/useLocalization';
import { Helmet } from 'react-helmet';

const Main: FC = () => {
  const localizationDictionary = useLocalizationDictionary();

  return (
    <>
      <Helmet>
        <title>{localizationDictionary.MAIN_PAGE}</title>
      </Helmet>
      <div>{localizationDictionary.MAIN_PAGE}</div>
    </>
  );
};

export default Main;
