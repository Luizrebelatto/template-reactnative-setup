module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-native/all',
      'plugin:import/typescript',
    ],
    plugins: [
      '@typescript-eslint',
      'react',
      'react-hooks',
      'react-native',
    ],
    env: {
      'react-native/react-native': true,
      es6: true,
      node: true,
      jest: true,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
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
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  };
  