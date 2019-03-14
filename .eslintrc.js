module.exports = {
  extends: ['standard', 'standard-react', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'prettier/prettier': 2,
    'space-before-function-paren': 0
  },
  env: {
    browser: true,
    jest: true
  },
  plugins: ['prettier']
}
