import { LanguageDictionariesKeys } from '@localization';

export enum LOCALIZATION_TYPES {
  CHANGE_LOCALIZATION = '@@localization/CHANGE_LOCALIZATION',
}

export interface StateLocalization {
  locale: LanguageDictionariesKeys;
}
