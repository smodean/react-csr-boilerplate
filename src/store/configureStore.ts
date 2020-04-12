import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ConfigureStore } from '@@RootState';

import rootReducer from '@storeData/rootReducer';
import rootEpic from '@storeData/rootEpic';

import middlewaresCollection, { epicMiddleware } from '@store/middlewares';

export default function configureStore(): ConfigureStore {
  const store: ConfigureStore['store'] = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewaresCollection)),
  );

  epicMiddleware.run(rootEpic);

  return { store };
}
