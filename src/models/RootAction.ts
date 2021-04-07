import { rootAction } from '@storeData/rootAction';

import { Dispatch } from 'redux';
import { ActionType } from 'typesafe-actions';

export type RootAction = typeof rootAction;

export type RootActionType = ActionType<RootAction>;

export type DispatchRootActionType = Dispatch<RootActionType>;
