import { localizationReducer } from '@shared/store/data/localization/reducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  localization: localizationReducer,
});
