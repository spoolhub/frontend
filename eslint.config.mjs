import withNuxt from './.nuxt/eslint.config.mjs';
import prettier from 'eslint-config-prettier';
import playwright from 'eslint-plugin-playwright';

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.{ts,vue}'],
    rules: {
      // custom rules here
    },
  },
  {
    files: ['**/*.{ts}'],
    rules: {
      // custom rules here
    },
  },
  {
    // E2E tests configuration
    files: ['tests/e2e/**/*.ts'],
    ...playwright.configs['flat/recommended'],
  },
  prettier
);
