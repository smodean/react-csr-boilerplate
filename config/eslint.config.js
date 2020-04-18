const config = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['config/**/*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'global-require': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'spaced-comment': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'global-require': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'implicit-arrow-linebreak': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      json: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', {
      code: 120,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    'no-console': 'error',
    'no-debugger': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    }],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'react/jsx-filename-extension': [1, {
      extensions: ['.tsx', '.jsx'],
    }],
    'react/prop-types': 'off',
    'sort-keys': ['error', 'asc', {
      caseSensitive: true,
      natural: false,
    }],
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.json'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.json'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};

module.exports = config;
