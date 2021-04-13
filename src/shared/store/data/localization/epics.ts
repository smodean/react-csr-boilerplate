import { EpicType } from '@shared/models/EpicType';

import { locale } from 'dayjs';
import { combineEpics } from 'redux-observable';
import { EMPTY } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { changeLocalization } from './actions';

import 'dayjs/locale/es';
import 'dayjs/locale/ru';

export const changeLocalizationEpic: EpicType = (action$) => action$.pipe(
  filter(isActionOf(changeLocalization)),
  mergeMap((action) => {
    const { payload } = action;

    localStorage.setItem('locale', payload);

    locale(payload);

    return EMPTY;
  }),
);

export const localizationEpics = combineEpics(...Object.values({
  changeLocalizationEpic,
}));
