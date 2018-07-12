const webpack = require('webpack');
const path = require('path');
const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  mode: IS_DEV ? 'development' : 'production',
  watch: IS_DEV,
  entry: [
    path.join(__dirname, 'src/client.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: 'client.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['react',
            ['env', {
              targets: {
                browsers: ['last 2 versions', 'safari >= 7'],
              },
            }]
          ],
        },
      },
    ],
  },
};
