const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      index: [path.resolve(__dirname, "src", "index.js")],
    },
    mode: "development",
    target: "web",
      output: {
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, 'dist'),
      },
      optimization: {
          splitChunks: {
              chunks: 'all',
          },
      },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: "index.html"
         })
    ]
}
