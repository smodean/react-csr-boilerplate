import { en } from './en';
import { ru } from './ru';

export const languageDictionaries = Object.freeze({
  en,
  ru,
} as const);

export type LanguageDictionaries = typeof languageDictionaries;
export type LanguageDictionariesKeys = keyof LanguageDictionaries;
