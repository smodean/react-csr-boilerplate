import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '@storeData/rootReducer';
import rootEpic from '@storeData/rootEpic';

import middlewaresCollection, { epicMiddleware } from '@store/middlewares';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewaresCollection)),
  );

  epicMiddleware.run(rootEpic);

  return { store };
}
