////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE imports
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { isObject, isString, get, set } from 'lodash';
import { TStateObservableRootState } from '../../../models';
import { API_URL } from '../../../config';
import { from } from 'rxjs';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE utils
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Accept = 'Accept';
const ContentType = 'Content-Type';

const _restApi: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    [Accept]: '*/*',
    [ContentType]: 'application/json',
  },
});

export const restApi = (state$: TStateObservableRootState) => (restConfig: AxiosRequestConfig) => {
  if (isObject(state$)) {
    const sid = get(state$, 'value.customer.sid');

    if (isString(sid)) {
      set<AxiosInstance>(_restApi, 'defaults.headers.common.Authorization', `Bearer ${sid}`);
    }
  }

  return from(_restApi(restConfig));
};
