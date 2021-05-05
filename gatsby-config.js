require('source-map-support').install();
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
require('ts-node').register({
  files: true, // so that TS node hooks have access to local typings too
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
    allowJs: false,
  },
});

process.env.GATSBY_DEPLOY_DATE = new Date().toString();

module.exports = require('./src/gatsby/config').default;
