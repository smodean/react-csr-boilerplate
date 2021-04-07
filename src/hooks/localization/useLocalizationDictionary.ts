import { useReduxSelector } from '@hooks/useReduxSelector';
import { LocalizationDictionary } from '@models/LocalizationDictionary';
import { localizationDictionarySelector } from '@store/data/localization/selectors/smart/localizationDictionarySelector';

export function useLocalizationDictionary(): LocalizationDictionary {
  return useReduxSelector<LocalizationDictionary>(localizationDictionarySelector);
}
