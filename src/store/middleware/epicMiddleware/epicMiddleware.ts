import { EpicDependencies } from '@@EpicType';
import { RootActionType } from '@@RootAction';
import { RootState } from '@@RootState';

import { createEpicMiddleware } from 'redux-observable';

export const epicMiddleware = createEpicMiddleware<RootActionType, RootActionType, RootState, EpicDependencies>();
