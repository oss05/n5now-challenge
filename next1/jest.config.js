const path = require('path');

module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!@babel).+\\.js$',
    ],
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/$1',
      },
      testEnvironment: 'jest-environment-jsdom',
  };