module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["ts", "js"],
  roots: ["<rootDir>"],
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
  testPathIgnorePatterns: ["<rootDir>/dist/"],
};
