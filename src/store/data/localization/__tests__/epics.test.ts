import { ActionsObservable } from 'redux-observable';

import { getObservableStateInstance } from '@storeData/__mocks__/rootState.mock';

import { changeLocalizationEpic } from '../epics';
import { changeLocalizationAsync } from '../actions';

describe('src/state/data/localization/epics', () => {
  test('changeLocalizationEpic success change locale', async () => {
    expect(localStorage.getItem('locale')).toBeNull();

    const action$ = ActionsObservable.of(changeLocalizationAsync.request('en'));
    const state$ = getObservableStateInstance();
    const epic$ = changeLocalizationEpic(action$, state$, {});

    const result = await epic$.toPromise();

    expect(result).toEqual(changeLocalizationAsync.success('en'));

    expect(localStorage.getItem('locale')).toBe('en');
  });
});
