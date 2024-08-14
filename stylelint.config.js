/**
 * @type {import('stylelint').Config}
 */
export default {
  ignoreFiles: ['node_modules/**/*', 'dist/**/*'],
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  plugins: ['stylelint-no-indistinguishable-colors', 'stylelint-use-nesting'],
  rules: {
    'plugin/stylelint-no-indistinguishable-colors': true,
    'csstools/use-nesting': true,
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$|^[A-Z][a-zA-Z0-9]+$',
    'keyframes-name-pattern': '^[a-z][a-zA-Z0-9]+$|^[A-Z][a-zA-Z0-9]+$',
  },
};
