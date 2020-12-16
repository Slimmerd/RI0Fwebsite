const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    img: {type: Buffer},
    date: {type: Date, default: Date.now},
})

module.exports = model('Photos', schema)