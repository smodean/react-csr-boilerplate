import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ActionType } from 'typesafe-actions';

import { RootState } from '@@RootState';

import { localeDictionarySelector, localeSelector } from '@storeData/localization/selectors';
import { LocaleDictionarySelectorReturnType, LocaleSelectorReturnType } from '@storeData/localization/selectors.types';
import { changeLocalizationAsync } from '@storeData/localization/actions';
import { ChangeLocalizationAsyncRequest } from '@storeData/localization/actions.types';

import { LanguageDictionariesKeys } from '@localization';

type UseChangeLocalizationReturnType = (locale: LocaleSelectorReturnType) => ReturnType<ChangeLocalizationAsyncRequest>

export function useLocalizationDictionary(): LocaleDictionarySelectorReturnType {
  const localizationDictionary = useSelector<RootState, LocaleDictionarySelectorReturnType>(localeDictionarySelector);

  return localizationDictionary;
}

export function useChangeLocalization(): UseChangeLocalizationReturnType {
  const dispatch = useDispatch<Dispatch<ActionType<ChangeLocalizationAsyncRequest>>>();

  const changeLocalization = useCallback(
    (_locale: LanguageDictionariesKeys) => dispatch(changeLocalizationAsync.request(_locale)),
    [dispatch],
  );

  return changeLocalization;
}

export function useLocale(): LocaleSelectorReturnType {
  const locale = useSelector<RootState, LocaleSelectorReturnType>(localeSelector);

  return locale;
}
