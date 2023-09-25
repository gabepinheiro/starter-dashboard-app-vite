module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'bun type-check',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': filenames => [
    `bun eslint --fix ${filenames.join(' ')}`,
    `bun prettier --write ${filenames.join(' ')}`,
  ]

  // Format MarkDown and JSON
  // '**/*.(md|json)': (filenames) =>
  //   `yarn prettier --write ${filenames.join(' ')}`,
}
