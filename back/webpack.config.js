const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

config = {
	entry: './src/index.ts',
	mode: 'development',
	target: 'node',
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['ts-loader'],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	plugins: [],
};

config.plugins.push(new WebpackShellPlugin({ onBuildEnd: ['nodemon build/index.js --watch build'] }));

module.exports = config;
