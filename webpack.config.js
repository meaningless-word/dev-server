const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    plugins: [
		new HtmlWebpackPlugin({
            title: 'Development'
        })
	]
}