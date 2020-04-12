import { createSelector } from 'reselect';
import { LocalizationDictionary } from '@@LocalizationDictionary';

import languageDictionaries from '@localization';
import { rootStoreBranchSelector } from '@utils/rootStoreBranchSelector';

export const localizationSelector = rootStoreBranchSelector('localization');

export const localeSelector = createSelector(localizationSelector, (state) => state.locale);

export const localeDictionarySelector = createSelector(localeSelector, (state): LocalizationDictionary => {
  if (state in languageDictionaries) {
    return languageDictionaries[state];
  }

  return languageDictionaries.en;
});
