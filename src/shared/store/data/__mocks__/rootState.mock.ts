import { RootState } from '@shared/models/RootState';

import { initialStateLocalization } from '../localization/reducer';

export const rootStateMock: RootState = {
  localization: initialStateLocalization,
};
