import { RootState } from '@@RootState';

import { rootStoreBranchSelector } from '@utils/rootStoreBranchSelector';

import { initialStateLocalization } from '@storeData/localization/reducer';

describe('src/utils/rootStoreBranchSelector', () => {
  const store: Partial<RootState> = {
    localization: initialStateLocalization,
  };

  test('localization branch', () => {
    expect(rootStoreBranchSelector<Partial<RootState>>('localization')(store)).not.toEqual({ locale: 'ru', localeLoading: true });
    expect(rootStoreBranchSelector<Partial<RootState>>('localization')(store)).toEqual(initialStateLocalization);
  });
});
