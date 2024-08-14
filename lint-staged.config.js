/**
 *@type {import('lint-staged')}
 */
export default {
  '*.{ts,tsx}': ['eslint --max-warnings=0', 'prettier --write'],
  '*.css': ['stylelint --fix --max-warnings=0'],
  '!(*.ts|*.tsx|*.css)': ['prettier --write --ignore-unknown'],
};
