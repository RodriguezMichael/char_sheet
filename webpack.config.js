var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'index.js'
  },
  devtool: debug ? "inline-sourcemap" : null,
  
  resolve: {
	  alias: {
		//"ag-grid-root" : __dirname + "/node_modules/ag-grid"
	  }
  },
  module : {
    loaders : [
      { test : /\.jsx?/, include : APP_DIR, loader : 'babel' },
	  { test : /\.scss$/, loader : 'style!css!sass' },
	  { test: /\.css$/, loader: "style!css" }
      
    ]
  }
};

module.exports = config;