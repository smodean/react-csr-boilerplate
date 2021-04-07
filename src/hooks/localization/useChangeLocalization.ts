import { useBoundActions } from '@hooks/useBoundActions';
import { LocalizationDictionariesKeys } from '@localization/localizationDictionaries';
import { changeLocalization } from '@store/data/localization/actions';

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
