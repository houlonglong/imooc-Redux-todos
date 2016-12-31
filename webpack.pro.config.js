var path = require("path");
var webpack = require("webpack");
module.exports = {
	entry: {
		app: ["./src/index.js"]
	},
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/assets/",
		filename: "bundle.js"
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings: true
			}
		})
	],
	module: {
		loaders: [
		  {
		    test: /\.jsx?$/,
		    exclude: /(node_modules|bower_components)/,
		    loader: 'babel',
		    query: {
		      presets: ['react', 'es2015']
		    }
		  }
		]
	}
};