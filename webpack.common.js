const path = require("path");
module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js"
    },
	module: {
	    rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
	            test: /\.css$/,
	         	use: [
	            'style-loader',
	            'css-loader'
	         	]	
	        },
	        {
	         	test: /\.(png|svg|jpg|gif)$/,
	         	exclude: /node_modules/,
	         	use: [
		         	{
		         		loader:'file-loader',
		         		query:{
		         			name: './img/[name].[ext]?[hash]' 
		         		}
		         	}
	         	]
	        }
	    ]
	}
}