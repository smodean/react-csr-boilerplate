////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE imports
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { combineReducers } from 'redux';
import customerReducer from './customer';
import errorsReducer from './errors';
import { IRootState } from '../models';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE combine
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const rootReducer = combineReducers<IRootState>({
  customer: customerReducer,
  errors: errorsReducer,
});

export default rootReducer;