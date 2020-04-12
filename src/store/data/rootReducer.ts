import { combineReducers } from 'redux';

import localizationReducer from '@storeData/localization/reducer';

import { RootState } from '@@RootState';

const rootReducer = combineReducers<RootState>({
  localization: localizationReducer,
});

export default rootReducer;
