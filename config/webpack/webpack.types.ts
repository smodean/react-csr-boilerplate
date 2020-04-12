import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

export interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}
