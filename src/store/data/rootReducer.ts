import { combineReducers } from 'redux';

import localizationReducer from '@storeData/localization/reducer';

const rootReducer = combineReducers({
  localization: localizationReducer,
});

export default rootReducer;
