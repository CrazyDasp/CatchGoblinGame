const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // Для продакшена смените на 'production'
  entry: './src/index.js', // Главный файл
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Очищает папку dist перед каждой сборкой
  },
  devtool: 'inline-source-map', // Удобно для отладки
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Для обработки CSS
      },
      {
        test: /\.(png|jpg|gif)$/i, // Для работы с изображениями
        type: 'asset/resource',
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Транспиляция JS
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Ваш HTML-шаблон
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // Генерация CSS
    }),
  ],
};
