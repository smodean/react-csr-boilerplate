import { RootState } from '@shared/models/RootState';
import { rootStateMock } from '@shared/store/data/__mocks__/rootState.mock';

import { CombinedState } from 'redux';
import { StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';

export function getObservableStateInstance(): StateObservable<CombinedState<RootState>> {
  return new StateObservable(new Subject<RootState>(), rootStateMock);
}
