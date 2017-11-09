const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client?path=__webpack_hmr&timeout=2000',
    './js/ClientApp.jsx'
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    publicPath: '/public/',   // name of the path on the server
    historyApiFallback: true,  // allows BrowserRouter to work
    stats: {
      colors: true,
      reasons: true,
      chunks: true,
      hash: true
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR: retain application state
    new webpack.NamedModulesPlugin() // use relative path of the module displayed when HMR is enabled
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
}
