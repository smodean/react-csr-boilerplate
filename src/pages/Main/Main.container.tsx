import React, { FC } from 'react';

import { useLocalizationDictionary } from '@hooks/useLocalization';

const Main: FC = () => {
  const localizationDictionary = useLocalizationDictionary();

  return (
    <div>{localizationDictionary.MAIN_PAGE}</div>
  );
};

export default Main;
