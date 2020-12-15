const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name_ru: {type: String, required: true},
    name_en: {type: String, required: true},
    text_ru: {type: String, required: true},
    text_en: {type: String, required: true},
    img: [{data: Buffer, contentType: String}],
    date: {type: Date, default: Date.now},
    url: {type: String, required: true, unique: true},
    author: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('News', schema)