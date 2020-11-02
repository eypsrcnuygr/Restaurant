const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/index.scss'],
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].index.css',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader?-url',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(jpeg|png)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

    ],
  },
};