import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'


module.exports = {
  devtool: "source-map",
  entry: './src/index.ts',  
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'smpl viewer', 
      template: 'html/index.html' 
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, 'static'),
          to: path.resolve(__dirname, 'dist/static'),
        }
      ]
    }),
  ],
  
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};