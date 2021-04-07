import * as paths from '../../paths';

export function getOutputConfig() {
  return {
    filename: '[name].bundle.js',
    path: paths.appBuild,
    publicPath: paths.publicPath,
  };
}
