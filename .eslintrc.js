module.exports = {
  root: true,

  env: {
    browser: true,
  },

  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended`
  // for stricter rules.
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  // parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
  },

  // required to lint *.vue files
  // plugins: ['vue'],
  plugins: [
    'import',
    '@typescript-eslint',
    'compat',
    // 'no-unsanitized',
    // 'unicorn',
  ],
  settings: {
    'import/extensions': [
      '.js',
      '.ts',
    ],
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
      // webpack: {
      //   config: './build/config/webpack.config.js',
      // },
    },
    // adapt as polyfills are added to the project
    'polyfills': [
      'IntersectionObserver',
    ],
  },

  // add your custom rules here
  rules: {
    // 'no-param-reassign': 'off',
    'no-param-reassign': ['error', { props: false }],

    // deactivated airbnb-eslint rules
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'no-new': 'off',
    'func-names': 'off',
    'linebreak-style': 0,

    // amend airbnb-eslint rules
    'comma-dangle': ['error', 'always-multiline'],
    'prefer-destructuring': 'warn',
    'no-restricted-globals': ['off', 'location', 'top'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { consistent: true },
      },
    ],

    'vue/no-multiple-template-root': 'off',
    'prefer-promise-reject-errors': 'off',

    // allow debugger during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Custom
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
      { blankLine: 'always', prev: '*', next: 'return' },
      // Sequence of variable declarations
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
    ],
    'import/no-relative-parent-imports': 'error',
    // TODO: https://github.com/babel/babel-eslint/issues/799#issuecomment-651954838
    'template-curly-spacing': 0,
    indent: ['error', 2, {
      ignoredNodes: ['TemplateLiteral'],
      SwitchCase: 1,
    }],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue'],
        shouldMatchCase: true,
      },
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'max-len': 'off',
    // 'max-len': [
    //   'error',
    //   {
    //     code: 100,
    //     ignoreTrailingComments: true,
    //     ignoreUrls: true,
    //     ignoreStrings: true,
    //     ignoreTemplateLiterals: true,
    //     ignoreRegExpLiterals: true,
    //   },
    // ],
    'no-use-before-define': 'off',

    // plugin-import
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   { devDependencies: ['build/**/*.{js,ts}', './*.{js,ts}'] },
    // ],
    'import/extensions': 'off', // off for vite and ts only since we miss a resolver?

    // plugin compat
    'compat/compat': 'error',
  },
  overrides: [
    {
      // for the nodejs only javascript we switch back to the default parser (espree)
      files: ['./*.{js,ts}', 'build/**/*.{js,ts}'],
      parser: 'espree',
      env: {
        node: true,
      },
      rules: {
        'unicorn/prefer-module': 'off',
        'unicorn/no-null': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off',
        'lines-between-class-members': 'off',
        'no-shadow': 'off',
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-shadow': ['error'],
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        // '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
