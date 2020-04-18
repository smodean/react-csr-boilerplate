import { resolve } from 'path';
import { Resolve as WebpackResolve } from 'webpack';

import paths from '../../paths';

interface DynamicObject<V = string> {
  [key: string]: V;
}

function getAliases(tsConfig: { compilerOptions: { paths: DynamicObject } }): DynamicObject {
  const { compilerOptions } = tsConfig;
  const excessRegExp = /\/\*$/;

  return Object.entries(compilerOptions.paths).reduce<DynamicObject>((accumulator, alias) => {
    const [aliasKey, aliasValuesCollection] = alias;

    const aliasValue = aliasValuesCollection[0];

    const currentAliasValueCollection = aliasValue.replace(excessRegExp, '').split('/');
    const currentAliasKey = aliasKey.replace(excessRegExp, '');

    if (currentAliasKey in accumulator) {
      return accumulator;
    }

    return {
      ...accumulator,
      [currentAliasKey]: resolve(paths.appSrc, ...currentAliasValueCollection),
    };
  }, {});
}

export default function getResolveConfig(): WebpackResolve {
  const tsConfig = require(paths.appTsConfig);

  return {
    alias: getAliases(tsConfig),
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  };
}
