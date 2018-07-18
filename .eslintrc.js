module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 7,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'experimentalObjectRestSpread': true
    }
  },
  'plugins': [
    'react',
    'react-native'
  ],
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'rules': {
    'comma-dangle': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'no-undef': 0,
    'no-console': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/jsx-indent': ['error', 2]
  },
  'settings': {
    'react': {
      'pragma': 'React',
      'version': '0.14.8'
    }
  }
};
