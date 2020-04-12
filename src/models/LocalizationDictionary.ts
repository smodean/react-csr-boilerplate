type LocalizationDictionaryByString = Record<
| 'MAIN_PAGE'
| 'LOGIN_PAGE'
| 'LOADING'
| 'LOADING_TIMEOUT'
| 'LOADING_ERROR',
string
>;

export type LocalizationDictionary = Readonly<LocalizationDictionaryByString>;
