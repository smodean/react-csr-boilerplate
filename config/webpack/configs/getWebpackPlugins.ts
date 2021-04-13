import HtmlWebpackPlugin, { Options as HtmlWebpackPluginOptions } from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { Env } from '../../Env';
import * as paths from '../../paths';
import { Configuration } from '../webpack.types';

export function getWebpackPlugins(env: Env): Configuration['plugins'] {
  const plugins = Array.of();

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

  plugins.push(new DefinePlugin({
    NODE_ENV: env.NODE_ENV,
  }));

  plugins.push(new HtmlWebpackPlugin({
    favicon: paths.appFavicon,
    minify: minifyHtmlWebpackPlugin,
    template: paths.appHtml,
    title: 'Awesome Boilerplate',
  }));

  if (env.IS_PRODUCTION) {
    plugins.push(new MiniCssExtractPlugin({
      chunkFilename: '[name].[contenthash].css',
      filename: '[name].[contenthash].css',
    }));

    if (env.ANALYZE_BUNDLE) {
      plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: true,
      }));
    }
  }

  return plugins as Configuration['plugins'];
}
