import { Middleware } from 'redux';

import loggerMiddleware from './loggerMiddleware';
import epicMiddleware from './epicMiddleware';

const middlewaresCollection = ((): Middleware[] => {
  const defaultMiddlewares: Middleware[] = [epicMiddleware];

  if (process.env.NODE_ENV === 'production') {
    return [
      ...defaultMiddlewares,
    ];
  }

  if (process.env.NODE_ENV === 'development') {
    return [
      ...defaultMiddlewares,
      loggerMiddleware,
    ];
  }

  return defaultMiddlewares;
})();

export {
  epicMiddleware,
};

export default middlewaresCollection;
