import { useReduxSelector } from '@shared/hooks/useReduxSelector';
import { localeSelector } from '@shared/store/data/localization/selectors/dump/localeSelector';
import { StateLocalization } from '@shared/store/data/localization/types';

export function useLocale(): StateLocalization['locale'] {
  return useReduxSelector<StateLocalization['locale']>(localeSelector);
}
