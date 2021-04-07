import { localizationDictionaries } from '@localization/localizationDictionaries';
import { LocalizationDictionary } from '@models/LocalizationDictionary';

import { createSelector } from 'reselect';

import { localeSelector } from '../dump/localeSelector';

export const localizationDictionarySelector = createSelector(localeSelector, (locale): LocalizationDictionary => {
  if (locale in localizationDictionaries) {
    return localizationDictionaries[locale];
  }

  return localizationDictionaries.en;
});
