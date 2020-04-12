import { ActionType } from 'typesafe-actions';

import * as purgeActions from './actions';

export type PurgeActions = typeof purgeActions;

export type PurgeActionType = ActionType<PurgeActions>;
export type PurgeStore = PurgeActions['purgeStore'];
