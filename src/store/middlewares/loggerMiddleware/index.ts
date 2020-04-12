import { Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Action } from 'typesafe-actions';

const loggerMiddleware: Middleware = createLogger({
  actionTransformer: (action: Action) => ({ ...action, type: String(action.type) }),
  collapsed: false,
  level: 'info',
  logger: console,
  predicate: () => process.env.NODE_ENV === 'development',
});

export default loggerMiddleware;
