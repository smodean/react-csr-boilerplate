import { LocalizationDictionariesKeys } from '@localization/localizationDictionaries';

import { createAction } from 'typesafe-actions';

import { LOCALIZATION_TYPES } from './types';

export const changeLocalization = createAction(LOCALIZATION_TYPES.CHANGE_LOCALIZATION)<LocalizationDictionariesKeys>();
