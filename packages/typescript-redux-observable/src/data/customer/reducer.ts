////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE imports
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { CUSTOMER_ACTION_TYPES, IStateCustomer, TCustomerActionType } from './types';
import { PURGE, TPurgeActionType } from '../purge';
import { get } from 'lodash';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE initial state
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const initialStateCustomer: IStateCustomer = {
  token: null,
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE reducer
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function customerReducer(
  state: IStateCustomer = initialStateCustomer,
  action: TCustomerActionType | TPurgeActionType,
): IStateCustomer {
  switch (action.type) {
    case CUSTOMER_ACTION_TYPES.LOGIN:
      return state;
    case CUSTOMER_ACTION_TYPES.LOGIN_SUCCESS:
      return { ...state, token: get(action, 'payload.sid') };

    case PURGE.STORE:
      return { ...initialStateCustomer };
    default:
      return state;
  }
}