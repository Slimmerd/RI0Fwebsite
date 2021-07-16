const withAntdLess = require('next-plugin-antd-less');
const nextTranslate = require('next-translate')

module.exports = nextTranslate(
    withAntdLess({
        optimization: {minimize: true},
        lessVarsFilePath: './styles/antd-custom.less',
        lessVarsFilePathAppendToEndOfContent: true,
        lessLoaderOptions: {
            javascriptEnabled: true,
        },

        env: {
            REACT_APP_APIKEY: process.env.SERVER_API,
            REACT_APP_BASEURL: process.env.SITE_URL,
            REACT_APP_BACKEND_ADDRESS: process.env.BACKEND_URL,
            ENV: process.env.ENV,
            GA_TRACKING_ID: process.env.GA_ID
        },

        webpack(config) {
            return config;
        },

    }))