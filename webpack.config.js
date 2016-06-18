'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';

var webpack = require('webpack');

 module.exports = {
 	entry: './home',
 	output: {
 		path: __dirname + '/dist',
 		filename: 'build.js',
 		library: 'home'
 	},
 	
 	watch: NODE_ENV === 'development',

 	watchOptions: {
 		aggregateTimeout: 100
 	},

 	devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,

 	plugins: [
 		new webpack.DefinePlugin({
 			NODE_ENV: JSON.stringify(NODE_ENV),
 			LANG: JSON.stringify('en')
 		})
 	]
 }   


