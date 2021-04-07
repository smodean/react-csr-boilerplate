import { createSelector } from 'reselect';

import { localizationSelector } from '../root/localizationSelector';

export const localeSelector = createSelector(localizationSelector, (localization) => localization.locale);
