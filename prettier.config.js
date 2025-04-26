//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  jsxSingleQuote: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@app/(.*)$",
    "^@pages/(.*)$",
    "^@features/(.*)$",
    "^@services/(.*)$",
    "^@entities/(.*)$",
    "^@shared/(.*)$",
    "^@styles/(.*)$",
    "^@assets/(.*)$",
    "^[../]",
    "^[./]"
  ],
  importOrderSortSpecifiers: true,
  importOrderSeparation: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ]
}

export default config
