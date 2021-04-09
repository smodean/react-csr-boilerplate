import { resolve } from 'path';

import { appTsConfig } from '../../paths';
import { Configuration } from '../webpack.types';

type DynamicObject = Record<string, string>;

type TSConfig = {
  compilerOptions: {
    paths: DynamicObject;
    baseUrl: string;
  };
};

function getAliases(tsConfig: TSConfig): DynamicObject {
  const { compilerOptions } = tsConfig;
  const excessRegExp = /\/\*$/;

  return Object.entries(compilerOptions.paths).reduce((accumulator, alias) => {
    const [aliasKey, aliasValuesCollection] = alias;

    const [aliasValue] = aliasValuesCollection;

    const currentAliasValueCollection = aliasValue.replace(excessRegExp, '').split('/');
    const currentAliasKey = aliasKey.replace(excessRegExp, '');

    if (currentAliasKey in accumulator) {
      return accumulator;
    }

    accumulator[currentAliasKey] = resolve(compilerOptions.baseUrl, ...currentAliasValueCollection);

    return accumulator;
  }, {} as DynamicObject);
}

export function getResolveConfig(): Configuration['resolve'] {
  const tsConfig = require(appTsConfig);

  return {
    alias: getAliases(tsConfig),
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  };
}
