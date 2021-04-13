import { Dispatch } from 'redux';
import { ActionType } from 'typesafe-actions';

export type RootAction = ActionType<typeof import('@shared/store/data/rootAction')>;

export type DispatchRootAction = Dispatch<RootAction>;
