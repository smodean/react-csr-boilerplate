////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE imports
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { get } from 'lodash';
import { ofType, combineEpics } from 'redux-observable';
import { AxiosResponse, AxiosError } from 'axios';

import { TActionOnLogin, CUSTOMER_ACTION_TYPES } from './types';
import { TStateObservableRootState } from '../../models';
import { restApi } from '../../store/middleware/api';
import { onLoginSuccess } from './actions';
import { onLoginError } from '../errors';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE epics
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const onLoginEpic = (action$: Observable<TActionOnLogin>, state$: TStateObservableRootState) => {
  return action$.pipe(
    ofType(CUSTOMER_ACTION_TYPES.LOGIN),
    mergeMap(({ payload }: TActionOnLogin) => {
      return restApi(state$)({
        data: payload,
        method: 'post',
        url: 'login',
      }).pipe(
        map((response: AxiosResponse) => onLoginSuccess(get(response, 'data'))),
        catchError((error: AxiosError) => of(onLoginError(error))),
      );
    }),
  );
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE exports
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default combineEpics(
  ...Object.values({
    onLoginEpic,
  }),
);
