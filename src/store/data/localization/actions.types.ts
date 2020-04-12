import { ActionType } from 'typesafe-actions';

import * as localizationActions from './actions';

export type LocalizationActions = typeof localizationActions;
export type LocalizationActionType = ActionType<LocalizationActions>;

export type ChangeLocalizationAsyncRequest = LocalizationActions['changeLocalizationAsync']['request'];

export type LocalizationReducerActionTypes = LocalizationActionType;
