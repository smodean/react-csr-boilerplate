import { Epic } from 'redux-observable';

import { RootAction } from '@@RootAction';
import { RootState } from '@@RootState';

export type EpicType = Epic<RootAction, RootAction, RootState>;
