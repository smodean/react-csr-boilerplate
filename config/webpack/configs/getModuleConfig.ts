import { Module as WebpackModule } from 'webpack';

import {
  nodeModulesRegExp, tsJsRegExp, cssRegExp, imageRegExp, fontRegExp,
} from '../../regEpx';

export default function getModuleConfig(): WebpackModule {
  return {
    rules: [
      {
        exclude: nodeModulesRegExp,
        test: tsJsRegExp,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: cssRegExp,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: imageRegExp,
        use: ['file-loader'],
      },
      {
        test: fontRegExp,
        use: ['file-loader'],
      },
    ],
  };
}
