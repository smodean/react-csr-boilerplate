import { createReducer } from 'typesafe-actions';

import { StateLocalization } from './types';
import { LocalizationReducerActionTypes } from './actions.types';
import { changeLocalizationAsync } from './actions';

export const initialStateLocalization: StateLocalization = {
  locale: (localStorage.getItem('locale') || navigator?.language) as StateLocalization['locale'] || 'en',
  localeLoading: false,
};

const localizationReducer = createReducer<StateLocalization, LocalizationReducerActionTypes>(initialStateLocalization)
  .handleAction(
    changeLocalizationAsync.request,
    (state): StateLocalization => ({ ...state, localeLoading: true }),
  )
  .handleAction(
    changeLocalizationAsync.success,
    (state, action): StateLocalization => ({ ...state, locale: action.payload, localeLoading: false }),
  )
  .handleAction(
    changeLocalizationAsync.failure,
    (state): StateLocalization => ({ ...state, localeLoading: false }),
  );

export default localizationReducer;
