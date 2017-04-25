module.exports = {
  entry: "./src/index.jsx",
  output: {
	  path: "./build",
	  filename: "index.js"
  },
  module: {
	  loaders: [
          {
              test: /\.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ["es2015", "react"]
              }
          }
      ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
