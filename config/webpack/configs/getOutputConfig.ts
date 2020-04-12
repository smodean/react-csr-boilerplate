import { Output as WebpackOutput } from 'webpack';

import paths from '../../paths';

export default function getOutputConfig(): WebpackOutput {
  return {
    filename: '[name].bundle.js',
    path: paths.appBuild,
    publicPath: paths.publicPath,
  };
}
