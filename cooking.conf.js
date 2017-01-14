/**
 * Created by rxf on 17/1/14.
 */
const path = require('path');
const cooking = require('cooking');


cooking.set({
    entry: {
        app: ['babel-polyfill','./src/app.js'],
        vendor: ['vue'],
    },
    dist: './dist',
    devServer: {
        port: 8100,
        hot: true,
        hostname:"localhost",
        publicPath: '/',
        clean: false
    },

    template:  './index.tpl',

    // production
    clean: true,
    hash: true,
    sourceMap: true,
    minimize: true,
    chunk: true,
    alias: {
        'src': path.join(__dirname, './src'),
        'components': path.join(__dirname, './src/components'),
    },
    publicPath: '/dist/',
    assetsPath: 'static',
    urlLoaderLimit: 10000,
    extractCSS: 'css/[hash:8].[name].css', // 提取 CSS 文件
    extends: ['vue2', 'saladcss'],
    postcss: [
        require('postcss-salad')({
            browser: ['ie > 9', 'last 2 version'],
            features: {
                'bem': {
                    'shortcuts': {
                        'component': 'b',
                        'modifier': 'm',
                        'descendent': 'e'
                    },
                    'separators': {
                        'descendent': '__',
                        'modifier': '--'
                    }
                }
            }
        })
    ]
});



if (process.env.NODE_ENV === 'production') {
    cooking.add('output.filename', 'js/[hash:8].[name].js') ;
}

module.exports = cooking.resolve();