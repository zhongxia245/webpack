var webpack = require('webpack')

module.exports = {
    entry: './app.js',
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    module: {
        noParse: [/moment-with-locales/],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    /**
     * 这里的 require('moment') 就直接请求html里面请求的，不从node_module 里面获取
     */
    externals: {
        moment: true,
        'react': 'var React',
        'react-dom': 'var ReactDOM',
        'react-addons-css-transition-group': 'var ReactCSSTransitionGroup'
    },
    // resolve: {
    //     alias: {
    //         moment: 'moment/min/moment-with-locales.min.js',
    //         react: 'react/dist/react.min.js',
    //         'react-dom': 'react-dom/dist/react-dom.min.js'
    //     }
    // },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV) || "production"
            }
        })
    ]
}