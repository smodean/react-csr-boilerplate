import { createAction } from 'typesafe-actions';

import { PURGE } from './types';

export const purgeStore = createAction(PURGE.STORE)();
