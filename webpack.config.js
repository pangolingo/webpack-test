module.exports = {
  entry: "./src/index.js",
  output: {
	  path: "build",
	  filename: "index.js"
  },
  module: {
	  loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          }
      ]
  },
  devServer: {
      hot: true
  }
}
