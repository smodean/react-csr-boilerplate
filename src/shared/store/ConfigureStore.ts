import { RootAction } from '@shared/models/RootAction';
import { RootState } from '@shared/models/RootState';

import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootEpic } from './data/rootEpic';
import { rootReducer } from './data/rootReducer';
import { epicMiddleware, middlewareCollection } from './middleware';

export class ConfigureStore {
  public readonly store: Store<RootState, RootAction>;

  private readonly epicMiddleware = epicMiddleware;

  private readonly rootReducer = rootReducer;

  public constructor() {
    this.store = this.createStore();
  }

  public runEpic(): void {
    this.epicMiddleware.run(rootEpic);
  }

  private createStore(): Store<RootState, RootAction> {
    return createStore(
      this.rootReducer,
      composeWithDevTools(applyMiddleware(...middlewareCollection)),
    );
  }
}
