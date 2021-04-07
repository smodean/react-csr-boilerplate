import { RootState } from '@@RootState';

import { rootStateMock } from '@store/data/__mocks__/rootState.mock';

import { CombinedState } from 'redux';
import { StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';

export function getObservableStateInstance(): StateObservable<CombinedState<RootState>> {
  return new StateObservable(new Subject<RootState>(), rootStateMock);
}
