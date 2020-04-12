import ru from './ru';
import en from './en';

const languageDictionaries = Object.freeze({
  en,
  ru,
} as const);

export type LanguageDictionaries = typeof languageDictionaries;
export type LanguageDictionariesKeys = keyof LanguageDictionaries;

export default languageDictionaries;
