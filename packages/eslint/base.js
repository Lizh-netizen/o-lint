// 基本的规则
const common = require('./rules/common.js');

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: Object.assign({}, common),
};
