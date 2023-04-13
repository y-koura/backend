module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['.test/__tests__/jest.setup.ts'],
  moduleNameMapper: {
    '@prisma/client': '<rootDir>/node_modules/@prisma/client/runtime',
  },
};
