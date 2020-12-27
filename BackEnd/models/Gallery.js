const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    images: [{type: String, required: true}],
    date: {type: Date, default: Date.now},
})

module.exports = model('Gallery', schema)