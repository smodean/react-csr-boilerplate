import { Epic } from 'redux-observable';

import { RootActionType } from './RootAction';
import { RootState } from './RootState';

export class EpicDependencies {

}

export const epicDependencies = new EpicDependencies();

export type EpicType = Epic<RootActionType, RootActionType, RootState, EpicDependencies>;
