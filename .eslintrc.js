module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "plugin:prettier/recommended", "plugin:jsx-a11y/recommended"],
  plugins: ["eslint-plugin-no-inline-styles"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {},
  },
  rules: {
    "prettier/prettier": "warn",

    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-non-null-assertion": "off",
    "@typescript-eslint/no-non-null": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/triple-slash-reference": "off",

    "jest/no-mocks-import": "off",

    "jsx-a11y/no-autofocus": "off",

    "no-inline-styles/no-inline-styles": "warn",
  },
  settings: {},
  overrides: [
    {
      files: ["src/**/**"],
      rules: {
        "jsx-a11y/alt-text": "warn",
        "jsx-a11y/anchor-is-valid": "warn",
        "jsx-a11y/click-events-have-key-events": "warn",
        "jsx-a11y/no-static-element-interactions": "warn",
      },
    },
  ],
};
