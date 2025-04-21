import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  react.configs.flat.recommendedTypeChecked,
  reactHooks.configs.recommendedTypeChecked,
  { ignores: ['build/**/*'] },
  {
    files: ['**/*.{js,ts,tsx,mdx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        projectService: {
          allowDefaultProject: [
            'eslint.config.js',
            'lint-staged.config.js',
            'prettier.config.js',
            'react-router.config.ts',
            'stylelint.config.js',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
        jsxPragma: null,
      },
      globals: globals.browser,
    },
    plugins: {
      // 'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.flat['jsx-runtime'].rules,
      '@typescript-eslint/restrict-template-expressions': 0,
      '@typescript-eslint/no-unnecessary-condition': 0,
      '@typescript-eslint/prefer-nullish-coalescing': 0,
      'sort-imports': [
        'warn',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false,
        },
      ],
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  eslintPluginPrettierRecommended,
);
