import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
  ignores: ['tests-out/*', 'test-results/*', 'playwright-report/*'],
  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:import/typescript',
    'plugin:functional/lite',
    'prettier',
    'prettier/@typescript-eslint',
  ],
});
