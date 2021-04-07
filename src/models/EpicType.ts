import { RootActionType } from '@@RootAction';
import { RootState } from '@@RootState';

import { Epic } from 'redux-observable';

export class EpicDependencies {

}

export type EpicType = Epic<RootActionType, RootActionType, RootState, EpicDependencies>;
