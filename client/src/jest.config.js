export const clearMocks = true;
export const coverageDirectory = "coverage";
export const moduleFileExtensions = ['js', 'jsx', 'json', 'node'];
export const transform = {
  '^.+\\.(js|jsx)?$': 'babel-jest',
};
export const testEnvironment = "jsdom";
export const testPathIgnorePatterns = ['/node_modules/'];
export const verbose = true;
