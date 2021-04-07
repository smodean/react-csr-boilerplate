import { Configuration } from '../webpack.types';

export function getOptimizationConfig(): Configuration['optimization'] {
  return {
    mergeDuplicateChunks: true,
    splitChunks: { chunks: 'all' },
  };
}
