const config = require('config')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const api_key = req.get('api-key')

        if (!api_key) {
            return res.status(401).json({message: "Нет авторизации"})
        }

        if (api_key === config.get('API-KEY')) {

            next()
        }

    } catch (e) {
        res.status(401).json({message: 'Нет авторизации'})
    }
}