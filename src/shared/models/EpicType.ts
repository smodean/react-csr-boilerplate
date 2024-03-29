import { Epic } from 'redux-observable';

import { RootAction } from './RootAction';
import { RootState } from './RootState';

export class EpicDependencies {

}

export const epicDependencies = new EpicDependencies();

export type EpicType = Epic<RootAction, RootAction, RootState, EpicDependencies>;
