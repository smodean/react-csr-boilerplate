////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE imports
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { action } from 'typesafe-actions';
import { IAuthData, CUSTOMER_ACTION_TYPES } from './types';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE actions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const onLogin = (authData: IAuthData) => action(CUSTOMER_ACTION_TYPES.LOGIN, authData);
export const onLoginSuccess = (data: any) => action(CUSTOMER_ACTION_TYPES.LOGIN_SUCCESS, data);