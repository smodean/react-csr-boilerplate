import { Epic } from 'redux-observable';

import { RootActionType } from '@@RootAction';
import { RootState } from '@@RootState';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EpicDependencies {

}

export type EpicType = Epic<RootActionType, RootActionType, RootState, EpicDependencies>;
