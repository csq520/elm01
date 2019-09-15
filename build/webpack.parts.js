const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    vendors: ['vue'],
  },
  output: {
    filename: '[name].parts.js',
    path: path.resolve(__dirname, '../parts'),
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../parts/[name].manifest.json'),
    }),
  ],
};
