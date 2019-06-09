import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootEpic from '../data/rootEpic';
import rootReducer from '../data/rootReducer';

import logger from './middleware/logger';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, epicMiddleware)));

  epicMiddleware.run(rootEpic);

  return { store };
}
