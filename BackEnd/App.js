//Import
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')
const apiCheck = require('./middleware/access.middleware')
const cors = require('cors')

const app = express()

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}


app.use(express.json({extended: true}))


app.use(cors(corsOptions))
app.use('/api/auth', apiCheck, require('./routes/auth.routes'))
app.use('/api/news', apiCheck, require('./routes/news.routes'))
app.use('/api/photos', require('./routes/photos.routes'))
// app.use('/api/chat', require('./routes/links.routes'))
// app.use('/api/photos', require('./routes/links.routes'))


if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', ((req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    }))
}

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true

        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()