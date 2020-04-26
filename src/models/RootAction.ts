import { ActionType } from 'typesafe-actions';

import rootAction from '@storeData/rootAction';

export type RootAction = typeof rootAction;

export type RootActionType = ActionType<RootAction>;
