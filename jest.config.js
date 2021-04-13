module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    './**/*.{js,jsx,ts,tsx}',
    '!src/index.ts',
    '!src/store/middleware/loggerMiddleware/loggerMiddleware.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx', 'node'],
  moduleNameMapper: {
    '^@browser/(.*)$': '<rootDir>/src/browser/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
  },
  modulePaths: [],
  roots: ['<rootDir>/src', '<rootDir>/config'],
  testMatch: [
    '**/__tests__/**/*.{js,jsx,ts,tsx}',
    '**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', '^.+\\.module\\.(css|sass|scss)$'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
