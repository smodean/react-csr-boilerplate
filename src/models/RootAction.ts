import { ActionType } from 'typesafe-actions';

import rootAction from '@storeData/rootAction';

export type RootAction = ActionType<typeof rootAction>;
