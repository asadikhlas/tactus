module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'react-native/no-inline-styles': 0
  }
};
