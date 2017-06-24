import webpack from 'webpack';
import path from 'path';
import webpackNodeExternals from 'webpack-node-externals';

const { ProvidePlugin } = webpack;

const DEV = process.env.NODE_ENV === 'development';

const webpackConfig = {
  entry: {
    main: './src/server/AppRouter.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build/Release'),
    libraryTarget: 'commonjs2'
    //publicPath: DEV ? 'http://localhost:8080/dist/' : '/dist'
  },
  target: 'node',
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
            loader: 'ignore-loader'
          }]
        }
      ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
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
  externals: webpackNodeExternals(),
  node: {
    __dirname: true
  },
  watch: DEV ? true : false,
  devtool: DEV ? 'inline-source-map': 'hidden-source-map'
};

export default webpackConfig;
