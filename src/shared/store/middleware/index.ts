import { DispatchRootAction, RootAction } from '@shared/models/RootAction';
import { RootState } from '@shared/models/RootState';

import { Middleware } from 'redux';

import { epicMiddleware } from './epicMiddleware';
import { loggerMiddleware } from './loggerMiddleware';

export { epicMiddleware } from './epicMiddleware';

export const middlewareCollection = Array.of<Middleware<RootAction, RootState, DispatchRootAction>>(epicMiddleware);

if (loggerMiddleware) {
  middlewareCollection.push(loggerMiddleware);
}
