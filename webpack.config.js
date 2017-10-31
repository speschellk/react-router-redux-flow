const path = require('path');

module.exports = {
  // always running it from root directory
  context: __dirname,
  entry: './js/ClientApp.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    // name of the path on the server
    publicPath: '/public/'
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
