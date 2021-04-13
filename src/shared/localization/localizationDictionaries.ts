import { en } from './internal/en';
import { ru } from './internal/ru';

export const localizationDictionaries = Object.freeze({
  en,
  ru,
} as const);

export type LocalizationDictionaries = typeof localizationDictionaries;
export type LocalizationDictionariesKeys = keyof LocalizationDictionaries;
