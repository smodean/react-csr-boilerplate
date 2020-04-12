import { combineEpics } from 'redux-observable';

import localizationEpics from '@storeData/localization/epics';

const rootEpic = combineEpics(...Object.values({
  localizationEpics,
}));

export default rootEpic;
