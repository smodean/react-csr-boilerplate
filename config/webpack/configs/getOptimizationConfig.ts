import { Options as WebpackOptions } from 'webpack';

export default function getOptimizationConfig(): WebpackOptions.Optimization {
  return {
    mergeDuplicateChunks: true,
    splitChunks: { chunks: 'all' },
  };
}
