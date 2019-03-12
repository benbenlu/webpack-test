module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: [
    "plugin:vue/essential"
  ],
  plugins: ['vue']
}