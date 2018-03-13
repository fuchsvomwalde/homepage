import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import PreloadWebpackPlugin from 'preload-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import GzipCompressionPlugin from 'compression-webpack-plugin'
import BrotliCompressionPlugin from 'brotli-webpack-plugin'

const isProductionBuild = process.env.NODE_ENV === 'production'

const config_common = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [{ removeDoctype: true }, { removeComments: true }]
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[sha512:hash:base62:8].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              enabled: isProductionBuild
            }
          }
        ]
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader',
        options: {
          name: '[name].[sha512:hash:base62:8].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[sha512:hash:base62:8].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    // ids that are used often get lower (shorter) ids, this make ids predictable, reduces total file size and is recommended
    new webpack.optimize.OccurrenceOrderPlugin(),

    // generate html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body'
    }),

    // add preload links to index.html
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'initial',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style'
        if (/\.(woff2?|ttf)$/.test(entry)) return 'font'
        if (/\.(png|jpe?g|gif)$/.test(entry)) return 'image'
        return 'script'
      }
    }),

    // generate favicon
    new FaviconsWebpackPlugin({
      // Your source logo
      logo: './src/assets/favicon-master.png'
    }),

    // make available, global constants
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ]
}

const config_dev = {
  devServer: {
    port: process.env.PORT || 3000,

    // respond to 404s with index.html
    historyApiFallback: true,

    noInfo: true,
    overlay: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: true,
      children: false,
      source: false,
      errors: true,
      errorDetails: false,
      warnings: false,
      publicPath: false
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

const config_prod = {
  devtool: '#source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash:8].js'
  },
  performance: {
    // log performance hints
    hints: 'warning'
  },
  plugins: [
    // clean up old dist assets
    new CleanWebpackPlugin([path.resolve(__dirname, './dist')]),
    // pass options to loaders
    new webpack.LoaderOptionsPlugin({
      // indicates to our loaders that they should minify their output if they have the capability to do so
      minimize: true,
      // indicates to our loaders that they should not enter debug mode
      debug: false
    }),
    // more aggressive chunk merging strategy to reduce total size
    new webpack.optimize.AggressiveMergingPlugin(),
    // enable webpack 3 scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // precompress all files after build
    new GzipCompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg|xml|json|txt)$/,
      minRatio: 0.8
    }),
    new BrotliCompressionPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg|xml|json|txt)$/,
      minRatio: 0.8
    })
  ]
}

// detect how npm is run and start webpack in development mode or build production app
const config = isProductionBuild
  ? merge(config_common, config_prod)
  : merge(config_common, config_dev)

export default config
