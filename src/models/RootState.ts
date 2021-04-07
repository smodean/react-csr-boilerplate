import { rootReducer } from '@store/data/rootReducer';

import { StateType } from 'typesafe-actions';

export type RootState = StateType<typeof rootReducer>;

export type KeyOfRootState = keyof RootState;
