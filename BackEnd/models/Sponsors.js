const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    category: {type: String, enum: ['Main', 'General'], required: true},
    img: {type: String, contentType: String},
})

module.exports = model('Sponsors', schema)