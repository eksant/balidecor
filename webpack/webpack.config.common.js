'use strict'

const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const helpers = require('./helpers')
const isDev = process.env.NODE_ENV === 'development'

const webpackConfig = {
  entry: {
    polyfill: '@babel/polyfill',
    main: helpers.root('src', 'main'),
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
      '@': helpers.root('src'),
    },
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  // externals: {
  //   knex: 'commonjs knex',
  // },
  // externals: {
  //   // Possible drivers for knex - we'll ignore them
  //   mssql: 'mssql',
  //   sqlite3: 'sqlite3',
  //   mysql2: 'mysql2',
  //   mariasql: 'mariasql',
  //   // mysql: 'mysql',
  //   oracle: 'oracle',
  //   'strong-oracle': 'strong-oracle',
  //   oracledb: 'oracledb',
  //   pg: 'pg',
  //   'pg-query-stream': 'pg-query-stream',
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [helpers.root('src')],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [helpers.root('src')],
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDev } },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDev } },
          { loader: 'sass-loader', options: { sourceMap: isDev } },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDev } },
          { loader: 'sass-loader', options: { sourceMap: isDev } },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'vue-style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true, modifyVars: { 'primary-color': '#1DA57A' } },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: { outputPath: 'images' },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: { outputPath: 'fonts' },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({ template: 'public/index.html', chunksSortMode: 'dependency' }),

    new webpack.IgnorePlugin(/package\.json/, /mssql/),

    // new webpack.NormalModuleReplacementPlugin(/\.\.\/migrate/, '../util/noop.js'),
    // new webpack.NormalModuleReplacementPlugin(/\.\.\/seed/, '../util/noop.js'),

    // new webpack.ContextReplacementPlugin(/knex\/lib\/dialects/, /mysql\/index.js/),

    // new webpack.IgnorePlugin(/mariasql/, /knex/),
    // new webpack.IgnorePlugin(/mssql/, /knex/),
    // // new webpack.IgnorePlugin(/mysql/, /knex/),
    // new webpack.IgnorePlugin(/mysql2/, /knex/),
    // new webpack.IgnorePlugin(/oracle/, /knex/),
    // new webpack.IgnorePlugin(/oracledb/, /knex/),
    // new webpack.IgnorePlugin(/pg-query-stream/, /knex/),
    // new webpack.IgnorePlugin(/sqlite3/, /knex/),
    // new webpack.IgnorePlugin(/strong-oracle/, /knex/),
    // new webpack.IgnorePlugin(/pg-native/, /pg/),
  ],
}

module.exports = webpackConfig
