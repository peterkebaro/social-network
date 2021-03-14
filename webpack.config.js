const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ( env, arg ) => {
	return {
		mode: 'development',
		entry: {
			'social-network': './src/index.tsx'
		},
		output: {
			filename: '[name].main.js'
		},
		devtool: 'source-map',
		resolve: {
			extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: "ts-loader",
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
							options: {
								url: false
							}
						
						},
					
					],
				
				},
				{
			    	test: /\.(sass|scss)$/,
			    	use: [
							MiniCssExtractPlugin.loader, 
							{
								loader: "css-loader",
								options: {
									url: false
								}
								
							},
							'sass-loader',
					],
					
			  },
				{
					test: /\.(png|jpe?g|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'images',
								esModule: false,
							},
						},
					],
				}

			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: 'src/index.html',
				templateParameters: {
					title: 'Social Network'
				},
				hash: true,
			}),
			new MiniCssExtractPlugin({
				filename: 'styles.css'
			}),
		]
	}
}

