import { Store as ReduxStore, AnyAction, CombinedState } from 'redux';

import { StateLocalization } from '@storeData/localization/types';

export interface RootState {
  localization: StateLocalization;
}

export type KeyOfRootState = keyof RootState;

export type ValueOfRootState<K extends KeyOfRootState = KeyOfRootState> = RootState[K];

export type Store = ReduxStore<CombinedState<RootState>, AnyAction> & {
  dispatch: {};
}

export interface ConfigureStore {
  store: Store;
}
