//Imports
const {Router} = require('express')
const router = Router()
const News = require('../models/News')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth.middleware')
const config = require('config')
const multer = require("multer");
const storage = multer.memoryStorage()
const upload = multer({storage: storage})

// Create new post
// api/news/post
router.post('/create', [
    check('name_ru,text_ru,name_en,text_en', 'Нельзя оставлять пустые поля').notEmpty(),
], auth, upload.array('photos', 6), async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные'
            })
        }

        const baseURL = config.get('baseURL')

        const {name_ru, name_en, text_ru, text_en} = req.body
        const real_img = req.file.news.buffer
        const extURL = baseURL + name_en.toLowerCase().split(' ').join('-');

        const news = new News({
            name_ru, name_en, text_ru, text_en, img: real_img, author: req.user.userId, url: extURL
        })

        await news.save()
        res.status(201).json({news})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

// Delete post
// api/news/delete
// router.delete('/delete', async (req, res) =>{
//
// })

// Get all posts
// api/news/posts
router.get('/', async (req, res) => {
    try {
        const news = await News.find().sort('-dateAdded')
        res.json(news)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

// Get certain post
// api/news/post
router.get('/:id', async (req, res) => {
    try {
        const certain_news = await News.findById(req.params.id)
        res.json(certain_news)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})


module.exports = router