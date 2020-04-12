import * as localizationSelectors from './selectors';

type TypeofLocalizationSelectors = typeof localizationSelectors;

export type LocalizationSelectorReturnType = ReturnType<TypeofLocalizationSelectors['localizationSelector']>;
export type LocaleSelectorReturnType = ReturnType<TypeofLocalizationSelectors['localeSelector']>;
export type LocaleDictionarySelectorReturnType = ReturnType<TypeofLocalizationSelectors['localeDictionarySelector']>;
