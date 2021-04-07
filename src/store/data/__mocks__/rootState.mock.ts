import { RootState } from '@@RootState';

import { initialStateLocalization } from '@storeData/localization/reducer';

export const rootStateMock: RootState = {
  localization: initialStateLocalization,
};
