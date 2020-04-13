import { Middleware } from 'redux';

import loggerMiddleware from './loggerMiddleware';
import epicMiddleware from './epicMiddleware';

const middlewaresCollection = ((): Middleware[] => {
  const defaultMiddlewares: Middleware[] = [epicMiddleware];

  if (process.env.NODE_ENV === 'production') {
    const productionMiddlewares = [...defaultMiddlewares];

    return productionMiddlewares;
  }

  if (process.env.NODE_ENV === 'development') {
    const developmentMiddlewares = [...defaultMiddlewares];

    if (loggerMiddleware) {
      developmentMiddlewares.push(loggerMiddleware);
    }

    return developmentMiddlewares;
  }

  return defaultMiddlewares;
})();

export {
  epicMiddleware,
};

export default middlewaresCollection;
