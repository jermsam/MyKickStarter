
require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });

const path = require('path');
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')



// To add new modules, nest the function (like a HOC in React)
module.exports = withCSS(withLess({
  target: 'serverless',
  webpack(config) {

    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      })
    );

    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      },
    })

    // Here is the magic
        // We push our config into the resolve.modules array
        config.resolve.modules.push(path.resolve('./'))
    
    return config
     }
}))