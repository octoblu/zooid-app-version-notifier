var path    = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'bundle.min.js',
    library: 'ZooidAppNotifier',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    }
  },
  plugins: []
}
