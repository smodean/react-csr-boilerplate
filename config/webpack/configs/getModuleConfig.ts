import {
  nodeModulesRegExp, tsJsRegExp, cssRegExp, imageRegExp, fontRegExp,
} from '../../regEpx';
import { Configuration } from '../webpack.types';

export function getModuleConfig(): Configuration['module'] {
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
