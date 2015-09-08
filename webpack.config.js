
// 使用webpack打包
module.exports = {
  
  entry: {
	 "main": "./src/main.js"
  },
  output: {
	path: './build/',
    filename: "build.js"
  },
  module: {
    loaders: [
      {test: /.css$/, loader: 'style!css'},
      {test: /.(png|jpg)$/, loader: 'url?limit=8192'}
    ]
  }
};