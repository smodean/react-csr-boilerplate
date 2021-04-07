import { RootActionType } from '@models/RootAction';

import { createReducer } from 'typesafe-actions';

import { changeLocalization } from './actions';
import { StateLocalization } from './types';

export const initialStateLocalization: StateLocalization = {
  locale: localStorage.getItem('locale') as StateLocalization['locale'] || 'en',
};

export const localizationReducer = createReducer<StateLocalization, RootActionType>(
  initialStateLocalization,
)
  .handleAction(
    changeLocalization,
    (state, action): StateLocalization => ({ ...state, locale: action.payload }),
  );
