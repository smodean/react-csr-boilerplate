import { EpicDependencies, epicDependencies } from '@shared/models/EpicType';
import { RootAction } from '@shared/models/RootAction';
import { RootState } from '@shared/models/RootState';

import { createEpicMiddleware } from 'redux-observable';

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, EpicDependencies>({
  dependencies: epicDependencies,
});
