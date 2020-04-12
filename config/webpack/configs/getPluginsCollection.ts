import { Plugin as WebpackPlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin, { Options as HtmlWebpackPluginOptions } from 'html-webpack-plugin';

import paths from '../../paths';
import Env from '../../Env';

export default function getWebpackPlugins(env: Env): WebpackPlugin[] {
  const plugins: WebpackPlugin[] = [];

  if (env.IS_PRODUCTION) {
    plugins.push(new MiniCssExtractPlugin({
      chunkFilename: '[name].[contenthash].css',
      filename: '[name].[contenthash].css',
    }));
  }

  const minifyHtmlWebpackPlugin = ((): HtmlWebpackPluginOptions['minify'] => {
    if (env.IS_PRODUCTION) {
      return {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      };
    }

    return undefined;
  })();

  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    favicon: paths.appFavicon,
    minify: minifyHtmlWebpackPlugin,
    template: paths.appHtml,
    title: 'Awesome Boilerplate',
  });

  plugins.push(htmlWebpackPlugin);

  return plugins;
}
