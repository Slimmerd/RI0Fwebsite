const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const nextTranslate = require('next-translate')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './styles/antd-custom.less'), 'utf8')
)

module.exports = nextTranslate(withLess({
    optimization: {minimize: true},
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
    },

    env: {
        REACT_APP_APIKEY: process.env.SERVER_API,
        REACT_APP_BASEURL: process.env.SITE_URL,
        REACT_APP_BACKEND_ADDRESS: process.env.BACKEND_URL,
        ENV: process.env.ENV,
        GA_TRACKING_ID: process.env.GA_ID
    },

    webpack: (config, {isServer}) => {
        if (isServer) {
            const antStyles = /antd\/.*?\/style.*?/
            const origExternals = [...config.externals]
            config.externals = [
                (context, request, callback) => {
                    if (request.match(antStyles)) return callback()
                    if (typeof origExternals[0] === 'function') {
                        origExternals[0](context, request, callback)
                    } else {
                        callback()
                    }
                },
                ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ]

            config.module.rules.unshift({
                test: antStyles,
                use: 'null-loader',
            })
        }
        return config
    },
}))