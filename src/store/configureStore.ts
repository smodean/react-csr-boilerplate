import { RootActionType } from '@models/RootAction';
import { RootState } from '@models/RootState';
import { rootEpic } from '@store/data/rootEpic';
import { rootReducer } from '@store/data/rootReducer';
import { epicMiddleware, middlewareCollection } from '@store/middleware';

import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export class ConfigureStore {
  public readonly store: Store<RootState, RootActionType>;

  private readonly epicMiddleware = epicMiddleware;

  private readonly rootReducer = rootReducer;

  public constructor() {
    this.store = this.createStore();
  }

  public runEpic(): void {
    this.epicMiddleware.run(rootEpic);
  }

  private createStore(): Store<RootState, RootActionType> {
    return createStore(
      this.rootReducer,
      composeWithDevTools(applyMiddleware(...middlewareCollection)),
    );
  }
}
