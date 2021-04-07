import { EpicDependencies, epicDependencies } from '@models/EpicType';
import { RootActionType } from '@models/RootAction';
import { RootState } from '@models/RootState';

import { createEpicMiddleware } from 'redux-observable';

export const epicMiddleware = createEpicMiddleware<RootActionType, RootActionType, RootState, EpicDependencies>({
  dependencies: epicDependencies,
});
