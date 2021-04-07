import { getObservableStateInstance } from '@utils/getObservableStateInstance';

import { ActionsObservable } from 'redux-observable';

import { changeLocalization } from '../actions';
import { changeLocalizationEpic } from '../epics';

describe('src/state/data/localization/epics', () => {
  test('changeLocalizationEpic success change locale', async () => {
    expect(localStorage.getItem('locale')).toBeNull();

    const action$ = ActionsObservable.of(changeLocalization('en'));
    const state$ = getObservableStateInstance();
    const epic$ = changeLocalizationEpic(action$, state$, {});

    const result = await epic$.toPromise();

    expect(result).toBeUndefined();

    expect(localStorage.getItem('locale')).toBe('en');
  });
});
