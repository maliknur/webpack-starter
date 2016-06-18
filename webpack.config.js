'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');

 module.exports = {
 	entry: {
 		home: './client/home',
 		about: './client/about'
 	},
 	output: {
 		path: __dirname + '/public',
 		filename: '[name].js',
 		library: '[name]'
 	},
 	
 	watch: NODE_ENV === 'development',

 	watchOptions: {
 		aggregateTimeout: 100
 	},

 	// devtools to generate source maps
 	devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,

 	// plugin for environment settings
 	plugins: [
 		new webpack.DefinePlugin({
 			NODE_ENV: JSON.stringify(NODE_ENV),
 			LANG: JSON.stringify('en')
 		})
 	],

 	resolve: {
 		modulesDirectories: ['node_modules'],
 		extensions: ['', '.js']
 	},

 	resolveLoader: {
 		modulesDirectories: ['node_modules'],
 		moduleTemplates: ['*-loader'],
 		extensions: ['', '.js']
 	},

 	// transpile JS files with Babel
 	module: {
 		loaders: [{
 			test: /\.js$/,
 			loader: 'babel?optional[]=runtime',
 			exclude: /node_modules/,
 		}]		
 	}
 };


if (NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	);
}



