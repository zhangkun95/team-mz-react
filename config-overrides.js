const path = require('path');
const rewireLess = require('react-app-rewire-less');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@':path.resolve(__dirname, './src')
  }
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  config = rewireLess(config, env)

  return config;
}