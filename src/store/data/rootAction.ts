import * as localizationActions from '@storeData/localization/actions';
import * as purgeActions from '@storeData/purge/actions';

export const rootAction = {
  ...localizationActions,
  ...purgeActions,
};
