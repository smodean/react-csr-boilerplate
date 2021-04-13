import { localizationEpics } from '@shared/store/data/localization/epics';

import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(...Object.values({
  localizationEpics,
}));
