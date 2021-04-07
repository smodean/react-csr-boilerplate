import { DispatchRootActionType, RootAction } from '@@RootAction';
import { RootState } from '@@RootState';

import { Middleware } from 'redux';

import { epicMiddleware } from './epicMiddleware';
import { loggerMiddleware } from './loggerMiddleware';

export { epicMiddleware } from './epicMiddleware';

export const middlewareCollection = Array.of<Middleware<RootAction, RootState, DispatchRootActionType>>(epicMiddleware);

if (loggerMiddleware) {
  middlewareCollection.push(loggerMiddleware);
}
