import { localizationReducer } from '@store/data/localization/reducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  localization: localizationReducer,
});
