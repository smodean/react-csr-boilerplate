import { RootState } from '@@RootState';

import { initialStateLocalization } from '@storeData/localization/reducer';
import { StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';
import { CombinedState } from 'redux';

export const rootState: RootState = {
  localization: initialStateLocalization,
};

export function getObservableStateInstance(): StateObservable<CombinedState<RootState>> {
  return new StateObservable(new Subject<RootState>(), rootState);
}
