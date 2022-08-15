module.exports = {
  resetMocks: true,

  roots: ['<rootDir>/src'],

  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],

  setupFiles: ['react-app-polyfill/jsdom'],

  setupFilesAfterEnv: ['<rootDir>/src/__tests__/TestHelper.tsx'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],

  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],

  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/config/jest/babelTransform.js',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },

  transformIgnorePatterns: ['node_modules/(?!@groma-dev)', '^.+\\.module\\.(css|sass|scss)$'],

  modulePaths: [],

  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/fileMock.js',
    '^.+\\.(css|scss|sass)$': '<rootDir>/config/jest/styleMock.js',
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },

  moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],

  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
