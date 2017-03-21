import webpack from 'webpack';
import path from 'path';

const { ProvidePlugin } = webpack;

const DEV = process.env.NODE_ENV === 'development';

const webpackConfig = {
  entry: {
    main: './src/client/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../public/dist'),
    publicPath: DEV ? 'http://localhost:8080/dist/' : '/dist'
  },
  module: {
    rules:
      [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: [{
            loader: 'babel-loader'
          }]
        },
        {
          test: /\.s?css$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader", options: {
                  sourceMap: true
              }
          }, {
              loader: "sass-loader", options: {
                  sourceMap: true
              }
          }]
        }
      ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', 'scss', '.css'],
    modules: [
      path.join(__dirname, '../src/client'),
      'node_modules'
    ]
  },
  plugins: [
    // Dev & Production plugins
    new ProvidePlugin({
      React: 'react',
    })
  ],
  watch: DEV ? true : false,
  devtool: DEV ? 'inline-source-map': 'hidden-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../public/dist'),
    compress: true,
    historyApiFallback: true,
    publicPath: 'http://localhost:8080/dist/'
  }
};

export default webpackConfig;
