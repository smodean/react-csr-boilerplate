import { createEpicMiddleware } from 'redux-observable';

import { RootAction } from '@@RootAction';
import { RootState } from '@@RootState';

const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();

export default epicMiddleware;
