import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import Env from '../../Env';
import paths from '../../paths';

export default function getDevServerConfig(env: Env): WebpackDevServerConfiguration | undefined {
  if (env.IS_PRODUCTION) {
    return undefined;
  }

  const proxy = ((): WebpackDevServerConfiguration['proxy'] => {
    if (env.PROXY_TARGET) {
      return {
        '/api/**': {
          changeOrigin: true,
          secure: false,
          target: env.PROXY_TARGET,
        },
      };
    }

    return undefined;
  })();

  return {
    compress: true,
    contentBase: paths.appBuild,
    historyApiFallback: true,
    hot: true,
    open: env.OPEN_BROWSER,
    port: env.DEV_SERVER_PORT,
    proxy,
    watchContentBase: true,
  };
}
