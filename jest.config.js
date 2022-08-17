const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest-setup.js'],
  resetModules: true,
};

module.exports = config;
