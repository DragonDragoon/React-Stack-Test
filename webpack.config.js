// CLI: ./node_modules/.bin/webpack x.js y.js
module.exports = {
  entry: {
    main: [
      `${__dirname}/script1.js`,
      `${__dirname}/script2.js`
    ]
  },
  output: {
    path: `${__dirname}/public`,
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
      }
    ]
  }
}