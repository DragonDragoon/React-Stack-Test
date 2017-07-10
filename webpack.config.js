// CLI: ./node_modules/.bin/webpack x.js y.js
let path = require('path');
let webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8000',
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'src', 'main.js')
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: '[name].js',
  },
  devServer: {
    port: 8000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      loaders: 'react-hot-loader!babel-loader'
    }, {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      loader: 'style-loader!css-loader!sass-loader'
    }]
  }
}