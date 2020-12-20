const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    name_ru: {type: String, required: true},
    name_en: {type: String, required: true},
    password: {type: String, required: true},
    news: [{type: Types.ObjectId, ref: 'News'}]
})

module.exports = model('User', schema)