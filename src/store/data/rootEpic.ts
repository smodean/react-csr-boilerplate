import { localizationEpics } from '@storeData/localization/epics';

import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(...Object.values({
  localizationEpics,
}));
