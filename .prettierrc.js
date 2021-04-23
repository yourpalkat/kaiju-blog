module.exports = {
  parser: 'typescript',
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
  ],
};
