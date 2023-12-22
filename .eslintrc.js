module.exports = {
  root: true,
  settings: {
    react: {version: 'detect'},
    'import/resolver': {
      'babel-module': {},
      typescript: {
        alwaysTryTypes: true,
      },
      node: {extensions: ['.ts', '.tsx']},
      alias: {
        map: [
          ['@components', './src/components'],
          ['@constants', './src/constants'],
          ['@hooks', './src/hooks'],
          ['@navigation', './src/navigation'],
          ['@screens', './src/screens'],
          ['@services', './src/services'],
          ['@store', './src/store'],
          ['@theme', './src/theme'],
          ['@ui', './src/ui'],
          ['@utils', './src/utils'],
          ['@modules', './src/modules'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx', '.json'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'eslint-config-prettier',
    'plugin:import/typescript',
  ],
  env: {
    'react-native/react-native': true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'react-hooks',
    'react-native',
    '@typescript-eslint',
    'prettier',
    'unicorn',
    'unused-imports',
    'import',
  ],
  ignorePatterns: [
    '**/*.js',
    '**/*.jsx',
    'src/screens/prepaidCard/components/physicalCard/components/FraudAlert.tsx',
  ],
  rules: {
    // ESlint Rules
    'unused-imports/no-unused-imports-ts': 2,
    'import/no-relative-packages': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    strict: ['error', 'never'],

    'react-native/no-inline-styles': 0,
    'no-sequence': 0,
    'no-sequences': 0,
    'no-useless-escape': 0,
    'handle-callback-err': 0,
    'react/self-closing-comp': 0,
    'prettier/prettier': 'off',

    // Import
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/prefer-default-export': 'off',

    //Unicorn
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/throw-new-error': 'error',
    'unicorn/regex-shorthand': 'error',

    // TypeScript rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        // if true, only functions which are part of a declaration will be checked
        allowExpressions: true,
        // if true, type annotations are also allowed on the variable of a function expression rather than on the function directly
        allowTypedFunctionExpressions: true,
        // if true, functions immediately returning another function expression will not be checked
        allowHigherOrderFunctions: false,
      },
    ],
    'react/jsx-no-useless-fragment': [2, {allowExpressions: true}],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true,
      },
    ],
    'max-len': [
      'warn',
      {
        code: 150,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],

    // React Native rules:
    'react-native/no-unused-styles': 'error', //Detect unused StyleSheet rules in React components > https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md
    'react-native/split-platform-components': 'off', //Enforce using platform specific filenames when necessary > https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md
    'react-native/no-inline-styles': 'error', //Detect inline styles in components > https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
    'react-native/no-color-literals': 'error', //Detect color literals in styles > https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-color-literals.md
    'react-native/no-raw-text': 'off', //Detect raw text outside of Text component > https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-raw-text.md

    //React Rules
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.ts', '.tsx']}],
    'react/prop-types': 'off',
  },
};
