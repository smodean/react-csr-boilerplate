import { LanguageDictionariesKeys } from '@localization';

export enum LOCALIZATION_TYPES {
  CHANGE_LOCALIZATION_REQUEST = '@@localization/CHANGE_LOCALIZATION_REQUEST',
  CHANGE_LOCALIZATION_SUCCESS = '@@localization/CHANGE_LOCALIZATION_SUCCESS',
  CHANGE_LOCALIZATION_FAILURE = '@@localization/CHANGE_LOCALIZATION_FAILURE',
}

export interface StateLocalization {
  locale: LanguageDictionariesKeys;
  localeLoading: boolean;
}
