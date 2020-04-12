import { createAsyncAction } from 'typesafe-actions';

import { LanguageDictionariesKeys } from '@localization';

import { LOCALIZATION_TYPES } from './types';

export const changeLocalizationAsync = createAsyncAction(
  LOCALIZATION_TYPES.CHANGE_LOCALIZATION_REQUEST,
  LOCALIZATION_TYPES.CHANGE_LOCALIZATION_SUCCESS,
  LOCALIZATION_TYPES.CHANGE_LOCALIZATION_FAILURE,
)<LanguageDictionariesKeys, LanguageDictionariesKeys, Error>();
