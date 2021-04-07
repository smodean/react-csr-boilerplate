import { localizationReducer } from '@storeData/localization/reducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  localization: localizationReducer,
});
