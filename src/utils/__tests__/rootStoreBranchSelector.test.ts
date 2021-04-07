import { rootStateMock } from '@store/data/__mocks__/rootState.mock';
import { rootStoreBranchSelector } from '@utils/rootStoreBranchSelector';

describe('@utils/rootStoreBranchSelector', () => {
  it('localization branch', () => {
    expect(rootStoreBranchSelector('localization')(rootStateMock)).toEqual({ locale: 'en' });
  });
});
