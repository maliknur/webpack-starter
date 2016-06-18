
const NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');

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

 	// devtools to generate source maps
 	devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,

 	// plugin for environment settings
 	plugins: [
 		new webpack.DefinePlugin({
 			NODE_ENV: JSON.stringify(NODE_ENV),
 			LANG: JSON.stringify('en')
 		})
 	],


 	// transpile JS files with Babel
 	module: {
 		loaders: [{
 			test: /\.js$/,
 			loader: 'babel?optional[]=runtime',
 			exclude: /node_modules/,
 		}]		
 	}
 }   


