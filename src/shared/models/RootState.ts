import { rootReducer } from '@shared/store/data/rootReducer';

import { Store } from 'redux';
import { StateType } from 'typesafe-actions';

import { RootAction } from './RootAction';

export type RootState = StateType<typeof rootReducer>;

export type KeyOfRootState = keyof RootState;

export type RootStore = Store<RootState, RootAction>
