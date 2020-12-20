const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    call: {type: String, required: true},
    text: {type: String, required: true},
    email: {type: String, required: true},
    date: {type: Date, default: Date.now},
})

module.exports = model('Chat', schema)