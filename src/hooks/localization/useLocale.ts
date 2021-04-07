import { useReduxSelector } from '@hooks/useReduxSelector';
import { localeSelector } from '@store/data/localization/selectors';
import { StateLocalization } from '@store/data/localization/types';

export function useLocale(): StateLocalization['locale'] {
  return useReduxSelector<StateLocalization['locale']>(localeSelector);
}
