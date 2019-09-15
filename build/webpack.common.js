const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

const plugins = [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
  }),
  new CleanWebpackPlugin(),
];

const files = fs.readdirSync(path.resolve(__dirname, '../parts'));
files.forEach((file) => {
  if (/.*\.parts.js/.test(file)) {
    plugins.push(new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../parts', file),
    }));
  }
  if (/.*\.manifest.json/.test(file)) {
    plugins.push(new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../parts', file),
    }));
  }
});

module.exports = {
  entry: {
    main: './src/main.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      pages: path.resolve(__dirname, './src/pages'),
    },
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            useBuiltIns: 'usage',
            targets: {
              chrome: '67',
            },
          }]],
        },
      },
    }, {
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 10240,
        },
      },
    }, {
      test: /\.(eot|ttf|svg)$/,
      use: {
        loader: 'file-loader',
      },
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
    }],
  },
  plugins,
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
      	vendors: {
      		test: /[\\/]node_modules[\\/]/,
      		priority: -10,
      		name: 'vendors.js',
      	},
      },
    },
  },
  performance: false,
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
};
