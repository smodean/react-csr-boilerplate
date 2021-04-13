import { useLocalizationDictionary } from '@shared/hooks/localization/useLocalizationDictionary';

import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

export const Main: FC = () => {
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

Main.displayName = 'Main';
