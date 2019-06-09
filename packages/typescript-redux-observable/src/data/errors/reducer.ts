////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE imports
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { ERRORS_ACTION_TYPES, IStateErrors, TErrorsActionType } from './types';
import { PURGE, TPurgeActionType } from '../purge';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE initial state
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const initialStateCustomer: IStateErrors = {
  loginError: null,
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE reducer
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function errorsReducer(
  state: IStateErrors = initialStateCustomer,
  action: TErrorsActionType | TPurgeActionType,
): IStateErrors {
  switch (action.type) {
    // onLogin
    case ERRORS_ACTION_TYPES.LOGIN_ERROR:
      return { ...state, loginError: action.error };
    case ERRORS_ACTION_TYPES.RESET_LOGIN_ERROR:
      return { ...state, loginError: null };

    case PURGE.STORE:
      return { ...initialStateCustomer };

    // default
    default:
      return state;
  }
}