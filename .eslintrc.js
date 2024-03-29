module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    // airbnb rules
    'import/no-dynamic-require': 0,
    'import/order': [
      2,
      {
        pathGroups: [
          {
            // always list react first in dependencies
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
    'no-nested-ternary': 0,
    radix: 0,
    'dot-notation': 0,
    'default-param-last': 0,
    'function-call-argument-newline': [2, 'consistent'],
    'implicit-arrow-linebreak': 0,
    'no-shadow': 0,
    'no-use-before-define': 0,
    'no-multi-str': 0,
    'no-restricted-exports': 0,
    'no-restricted-globals': 0,
    'no-import-assign': 0,
    'no-promise-executor-return': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'prefer-object-spread': 2,
    'prefer-regex-literals': 0,
    'quote-props': [2, 'as-needed'],
    'import/no-cycle': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-import-module-exports': 0,
    'react/destructuring-assignment': 0,
    'react/button-has-type': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/require-default-props': [2, { ignoreFunctionalComponents: true }],
    'react/default-props-match-prop-types': [2, { allowRequiredDefaults: true }],
    'react/jsx-curly-newline': [2, { multiline: 'consistent', singleline: 'consistent' }],
    'react/jsx-fragments': 0,
    'react/display-name': 0,
    'react/no-unstable-nested-components': [2, { allowAsProps: true }],
    'react/jsx-one-expression-per-line': 0,
    'react/static-property-placement': 0,
    // ignore rules causing 'cannot find' errors in files
    'react/no-arrow-function-lifecycle': 0,
    'react/no-invalid-html-attribute': 0,
    'react/no-unused-class-component-methods': 0,

    // Typescript Rules
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-unused-vars': [2, { ignoreRestSiblings: true }],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/triple-slash-reference': 0,

    // General Rules
    'no-console': 0,
    'no-param-reassign': 0,
    'object-curly-spacing': [2, 'always'],
    semi: [2, 'always'],
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'brace-style': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [
      2,
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'only-multiline',
      },
    ],
    'consistent-return': 0,
    'function-paren-newline': 0,
    'global-require': 0,
    indent: 0,
    'linebreak-style': 0,
    'max-len': [2, 240],
    'newline-per-chained-call': 0,
    'no-case-declarations': 0,
    'no-confusing-arrow': 2,
    'no-continue': 0,
    'no-debugger': 0,
    'no-else-return': 0,
    'no-lonely-if': 2,
    'no-mixed-operators': 2,
    'no-plusplus': 0,
    'no-prototype-builtins': 0,
    'no-restricted-syntax': 0,
    'no-return-assign': 0,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 0,
    'no-useless-escape': 0,
    'no-useless-constructor': 0,
    'no-void': 2,
    'operator-assignment': 0,
    quotes: [2, 'single', { avoidEscape: true }],

    // Jest Rules
    'jest/expect-expect': 0,
    'jest/no-conditional-expect': 0,
    'jest/no-disabled-tests': 0,
    'jest/no-done-callback': 0,
    'jest/no-mocks-import': 0,
    'jest/valid-title': 0,

    // a11y rules
    'jsx-a11y/alt-text': 2,
    'jsx-a11y/anchor-has-content': 2,
    'jsx-a11y/anchor-is-valid': [2, { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/click-events-have-key-events': 2,
    'jsx-a11y/label-has-associated-control': 2,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/media-has-caption': 2,
    'jsx-a11y/no-autofocus': 2,
    'jsx-a11y/no-noninteractive-element-interactions': 2,
    'jsx-a11y/no-onchange': 2,
    'jsx-a11y/no-static-element-interactions': 2,

    // React rules
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 0,
    'react/forbid-prop-types': 0, // Checks rules of Hooks
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-equals-spacing': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-space-before-closing': 0,
    'react/no-array-index-key': 0,
    'react/no-children-prop': 0,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-string-refs': 0,
    'react/no-unescaped-entities': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': [2],
    'react/self-closing-comp': 0,
    'react/style-prop-object': 0,
    'react/no-multi-comp': [2, { ignoreStateless: true }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
