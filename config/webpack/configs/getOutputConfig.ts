import * as paths from '../../paths';
import { Configuration } from '../webpack.types';

export function getOutputConfig(): Configuration['output'] {
  return {
    filename: '[name].bundle.js',
    path: paths.appBuild,
    publicPath: paths.publicPath,
  };
}
