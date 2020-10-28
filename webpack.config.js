const path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
         loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [ 
          {
           loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
};