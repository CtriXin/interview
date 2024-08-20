const path = require('path')
const port = process.env.port || 9528
function resolve(dir) {
  return path.join(__dirname, dir)
}
const createPage = (name, title, chunk = '') => {
  return {
    entry: `src/pages/main.js`,
    template: `public/${name}.html`,
    filename: `${name}.html`,
    title,
    chunks: ['chunk-vendors', 'chunk-common', chunk || name],
  }
}

console.log(process.env)

module.exports = {
  publicPath: './',
  outputDir: process.env.outputDir,
  devServer: {
    port: port,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/css/include/base.scss";`, //设置默认引用的css类
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
  pages: {
    index: createPage('index', 'Interview'),
  },
}
