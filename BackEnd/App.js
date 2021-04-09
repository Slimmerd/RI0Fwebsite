//Import
const express = require('express')
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
    origin: process.env.BaseURL,
    credentials: true
}
//TODO Access to db only from certain IP addresses
//TODO Try ElasticSearch for logging docker?

const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 1000, // allow 100 requests per 15 minutes, then...
    delayMs: 500 // begin adding 500ms of delay per request above 100:
});

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50 // limit each IP to 100 requests per windowMs
});

app.use(express.json({extended: true}))

// Security and logs
// app.use(speedLimiter)
// app.use(limiter)
app.use(helmet())
app.use(morgan('tiny'))
app.use(hpp());
app.use(cors(corsOptions))

// Backend API routes
app.use('/api/auth', apiCheck, require('./routes/auth.routes'))
app.use('/api/news', apiCheck, require('./routes/news.routes'))
app.use('/api/photos', require('./routes/photos.routes'))
app.use('/api/chat', apiCheck, require('./routes/chat.routes'))
app.use('/api/photos', apiCheck, require('./routes/photos.routes'))
app.use('/api/gallery', apiCheck, require('./routes/gallery.routes'))
app.use('/api/sponsors', apiCheck, require('./routes/sponsors.routes'))

const PORT = process.env.PORT

async function start() {
    try {
        await mongoose.connect(process.env.MongoURI, {
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