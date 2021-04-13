import { useReduxSelector } from '@shared/hooks/useReduxSelector';
import { LocalizationDictionary } from '@shared/models/LocalizationDictionary';
import { localizationDictionarySelector } from '@shared/store/data/localization/selectors/smart/localizationDictionarySelector';

export function useLocalizationDictionary(): LocalizationDictionary {
  return useReduxSelector<LocalizationDictionary>(localizationDictionarySelector);
}
