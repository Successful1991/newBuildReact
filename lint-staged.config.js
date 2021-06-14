module.exports = {
  '*.{js,jsx}': ['make lint', 'git add'],
  // '*.{js,jsx}': ['eslint'],
  '*.sass': 'stylelint --fix',
  '*.scss': 'stylelint --fix',
  '*.css': 'stylelint --fix',
};
