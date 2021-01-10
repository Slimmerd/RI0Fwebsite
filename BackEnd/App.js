//Import
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const apiCheck = require('./middleware/access.middleware')
const morgan = require('morgan')
const cors = require('cors')
const hpp = require('hpp');
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");
const helmet = require('helmet')

const app = express()
app.disable('x-powered-by')

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 100, // allow 100 requests per 15 minutes, then...
    delayMs: 1000 // begin adding 500ms of delay per request above 100:
});

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 350 // limit each IP to 100 requests per windowMs
});


app.use(express.json({extended: true}))


// TODO: LIMITER
// Security and logs
// app.use(speedLimiter)
// app.use(limiter)
app.use(helmet())
app.use(morgan('dev'))
app.use(hpp());
app.use(cors(corsOptions))

// Backend API routes
app.use('/api/auth', apiCheck, require('./routes/auth.routes'))
app.use('/api/news', apiCheck, require('./routes/news.routes'))
app.use('/api/photos', require('./routes/photos.routes'))
app.use('/api/chat', apiCheck, require('./routes/chat.routes'))
app.use('/api/photos', apiCheck, require('./routes/photos.routes'))
app.use('/api/gallery', apiCheck, require('./routes/gallery.routes'))

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