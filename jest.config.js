const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/test/unit/mocks/fileMock.js",
    "\\.(css|less|styl|scss)$": "<rootDir>/test/unit/mocks/styleMock.js",
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/test/unit/**/*.test.(js|jsx|ts|tsx)|**/__test__/*.(js|jsx|ts|tsx)"
  ],
  setupFiles: ['./test/unit/setup'],
  coverageDirectory: './test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ],
  testURL: "http://localhost/"
}
