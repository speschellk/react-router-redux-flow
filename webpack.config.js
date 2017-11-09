const path = require('path');
const webpack = require('webpack');

const config = {
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

if (process.env.NODE_ENV === 'production') {
  config.entry = './js/ClientApp.jsx';
  config.devtool = false;
  plugins = [];
}
module.exports = config;
