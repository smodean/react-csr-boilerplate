import { Middleware } from 'redux';
import { Action } from 'typesafe-actions';

export const loggerMiddleware = ((): Middleware | null => {
  switch (process.env.NODE_ENV) {
    case 'development': {
      // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
      const reduxLogger = require('redux-logger');

      return reduxLogger.createLogger({
        actionTransformer: (action: Action) => ({ ...action }),
        collapsed: false,
        level: 'info',
        logger: console,
        predicate: () => process.env.NODE_ENV === 'development',
      });
    }

    default:
      return null;
  }
})();
