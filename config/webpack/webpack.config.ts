import { Configuration } from './webpack.types';

import {
  getDevServerConfig, getModuleConfig, getPluginsCollection, getResolveConfig, getOutputConfig, getOptimizationConfig,
} from './configs';

import paths from '../paths';
import Env from '../Env';

const env = new Env({
  DEV_SERVER_PORT: 3000,
});

const config: Configuration = {
  devServer: getDevServerConfig(env),
  devtool: env.IS_PRODUCTION ? 'source-map' : 'cheap-module-source-map',
  entry: paths.appSrc,
  mode: (process.env.NODE_ENV as Configuration['mode']),
  module: getModuleConfig(),
  optimization: getOptimizationConfig(),
  output: getOutputConfig(),
  plugins: getPluginsCollection(env),
  resolve: getResolveConfig(),
};

export default config;
