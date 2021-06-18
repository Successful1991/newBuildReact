module.exports = {
  '*.(js|jsx)': ['make lint', 'git add'],
  '*.sass': 'stylelint --fix',
  '*.scss': 'stylelint --fix',
  '*.css': 'stylelint --fix',
};
