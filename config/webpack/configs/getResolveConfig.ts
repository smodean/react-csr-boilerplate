import { appBrowser, appShared } from '../../paths';
import { Configuration } from '../webpack.types';

export function getResolveConfig(): Configuration['resolve'] {
  return {
    alias: {
      '@browser': appBrowser,
      '@shared': appShared,
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  };
}
