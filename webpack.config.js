// CLI: ./node_modules/.bin/webpack x.js y.js
module.exports = {
  entry: {
    main: [
      `${__dirname}/src/main.js`
    ]
  },
  output: {
    path: `${__dirname}/public`,
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: 'babel-loader'
    }]
  }
}