import { RootActionType } from '@@RootAction';
import { RootState } from '@@RootState';

import { epicMiddleware, middlewareCollection } from '@store/middleware';
import { rootEpic } from '@storeData/rootEpic';
import { rootReducer } from '@storeData/rootReducer';

import { Store, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export class ConfigureStore {
  public readonly store: Store<RootState, RootActionType>;

  private readonly epicMiddleware = epicMiddleware;

  private readonly rootReducer = rootReducer;

  public constructor() {
    this.store = this.createStore();
  }

  public runEpic(): this {
    this.epicMiddleware.run(rootEpic);

    return this;
  }

  private createStore(): Store<RootState, RootActionType> {
    return createStore(
      this.rootReducer,
      composeWithDevTools(applyMiddleware(...middlewareCollection)),
    );
  }
}
