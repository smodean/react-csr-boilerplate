import { useBoundActions } from '@shared/hooks/useBoundActions';
import { LocalizationDictionariesKeys } from '@shared/localization/localizationDictionaries';
import { changeLocalization } from '@shared/store/data/localization/actions';

import { useCallback } from 'react';

type ChangeLocalization = (locale: LocalizationDictionariesKeys) => void;

const actionsToBind = {
  changeLocalization,
};

export function useChangeLocalization(): ChangeLocalization {
  const boundActions = useBoundActions(actionsToBind);

  return useCallback<ChangeLocalization>(
    (locale: LocalizationDictionariesKeys) => boundActions.changeLocalization(locale),
    [boundActions],
  );
}
