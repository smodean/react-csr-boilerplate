import { LocalizationDictionary } from '@@LocalizationDictionary';

import { useReduxSelector } from '@hooks/useReduxSelector';
import { localeDictionarySelector } from '@store/data/localization/selectors';

export function useLocalizationDictionary(): LocalizationDictionary {
  return useReduxSelector<LocalizationDictionary>(localeDictionarySelector);
}
