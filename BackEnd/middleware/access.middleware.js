module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const api_key = req.get('api-key')

        if (!api_key) {
            return res.status(401).json({message: "Нет авторизации"})
        }

        if (api_key === process.env.API_KEY) {
            next()
        } else {
            return res.status(401).json({message: "Нет авторизации"})
        }

    } catch (e) {
        res.status(401).json({message: 'Нет авторизации'})
    }
}