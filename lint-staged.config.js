export default {
  '*.{ts,tsx}': ['eslint --max-warnings=0', 'prettier --write'],
  '!(*.ts|*.tsx)': ['prettier --write --ignore-unknown'],
};
