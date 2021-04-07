import * as localizationActions from '@store/data/localization/actions';
import * as purgeActions from '@store/data/purge/actions';

export const rootAction = {
  ...localizationActions,
  ...purgeActions,
};
