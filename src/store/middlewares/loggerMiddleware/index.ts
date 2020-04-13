import { Middleware } from 'redux';
import { Action } from 'typesafe-actions';

const loggerMiddleware: Middleware | null = process.env.NODE_ENV === 'development'
  ? require('redux-logger').createLogger({
    actionTransformer: (action: Action) => ({ ...action }),
    collapsed: false,
    level: 'info',
    logger: console,
    predicate: () => process.env.NODE_ENV === 'development',
  })
  : null;

export default loggerMiddleware;
