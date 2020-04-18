import { StateType } from 'typesafe-actions';

import rootReducer from '@storeData/rootReducer';

export type RootState = StateType<typeof rootReducer>;
export type KeyOfRootState = keyof RootState;
