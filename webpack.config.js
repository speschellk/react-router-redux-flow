const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
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
    // name of the path on the server
    publicPath: '/public/',
    // client will worry about the routing; server should not
    // allows BrowserRouter to work
    historyApiFallback: true
  },
  resolve: {
    // specifies order of resolution of extensions
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        // any file with extension .js or .jsx, run through babel
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
}
