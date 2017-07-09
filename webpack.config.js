// CLI: ./node_modules/.bin/webpack x.js y.js
module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      `${__dirname}/src/main.js`
    ]
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/public/',
    filename: '[name].js',
  },
  devServer: {
    port: 8000
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: 'babel-loader'
    }]
  }
}