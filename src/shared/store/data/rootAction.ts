import * as localizationActions from '@shared/store/data/localization/actions';
import * as purgeActions from '@shared/store/data/purge/actions';

export const rootAction = {
  ...localizationActions,
  ...purgeActions,
};
