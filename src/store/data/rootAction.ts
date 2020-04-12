import * as localizationActions from '@storeData/localization/actions';
import * as purgeActions from '@storeData/purge/actions';

const rootAction = {
  ...localizationActions,
  ...purgeActions,
};

export default rootAction;
