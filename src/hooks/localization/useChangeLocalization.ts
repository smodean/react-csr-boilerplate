import { LanguageDictionariesKeys } from '@localization';

import { useBoundActions } from '@hooks/useBoundActions';
import { changeLocalization } from '@store/data/localization/actions';

import { useCallback } from 'react';

type ChangeLocalization = (locale: LanguageDictionariesKeys) => void;

const actionsToBind = {
  changeLocalization,
};

export function useChangeLocalization(): ChangeLocalization {
  const boundActions = useBoundActions(actionsToBind);

  return useCallback<ChangeLocalization>(
    (locale: LanguageDictionariesKeys) => boundActions.changeLocalization(locale),
    [boundActions],
  );
}
