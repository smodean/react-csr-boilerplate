import { filter, map } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { locale } from 'dayjs';

import 'dayjs/locale/es';
import 'dayjs/locale/ru';

import { EpicType } from '@@EpicType';

import { changeLocalizationAsync } from './actions';

export const changeLocalizationEpic: EpicType = (action$) => action$.pipe(
  filter(isActionOf(changeLocalizationAsync.request)),
  map((action) => {
    const { payload } = action;

    localStorage.setItem('locale', payload);

    locale(payload);

    return changeLocalizationAsync.success(payload);
  }),
);

const localizationEpics = combineEpics(...Object.values({
  changeLocalizationEpic,
}));

export default localizationEpics;
