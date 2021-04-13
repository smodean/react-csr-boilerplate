import { rootStateMock } from '@shared/store/data/__mocks__/rootState.mock';

import { rootStoreBranchSelector } from '../rootStoreBranchSelector';

describe('@utils/rootStoreBranchSelector', () => {
  it('localization branch', () => {
    expect(rootStoreBranchSelector('localization')(rootStateMock)).toEqual({ locale: 'en' });
  });
});
