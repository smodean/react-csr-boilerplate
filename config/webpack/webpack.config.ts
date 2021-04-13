import { Env } from '../Env';
import { appBrowser } from '../paths';

import { getDevServerConfig } from './configs/getDevServerConfig';
import { getModuleConfig } from './configs/getModuleConfig';
import { getOptimizationConfig } from './configs/getOptimizationConfig';
import { getOutputConfig } from './configs/getOutputConfig';
import { getResolveConfig } from './configs/getResolveConfig';
import { getWebpackPlugins } from './configs/getWebpackPlugins';
import { Configuration } from './webpack.types';

const env = new Env({
  DEV_SERVER_PORT: '8080',
});

const config: Configuration = {
  devServer: getDevServerConfig(env),
  devtool: env.IS_PRODUCTION ? 'source-map' : 'cheap-module-source-map',
  entry: appBrowser,
  mode: (env.NODE_ENV as Configuration['mode']),
  module: getModuleConfig(),
  optimization: getOptimizationConfig(),
  output: getOutputConfig(),
  plugins: getWebpackPlugins(env),
  resolve: getResolveConfig(),
};

// eslint-disable-next-line import/no-default-export
export default config;
