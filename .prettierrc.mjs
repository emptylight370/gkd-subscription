// @ts-check
/**
 * @type {import('prettier').Config}
 */
export default {
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
