import { createEpicMiddleware } from 'redux-observable';

import { RootActionType } from '@@RootAction';
import { RootState } from '@@RootState';
import { EpicDependencies } from '@@EpicType';

const epicMiddleware = createEpicMiddleware<RootActionType, RootActionType, RootState, EpicDependencies>();

export default epicMiddleware;
