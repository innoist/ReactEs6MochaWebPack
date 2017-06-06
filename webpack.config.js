module.exports = {
  entry: [
    './src/index.js',
     'webpack-dev-server/client?http://localhost:788',
    'webpack/hot/only-dev-server'
  ],
    module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    port: 788
  }
};