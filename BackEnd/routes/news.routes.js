//Imports
const {Router} = require('express')
const router = Router()
const News = require('../models/News')
const {check, validationResult} = require('express-validator')
const auth = require('../middleware/auth.middleware')
const multer = require("multer");

// Create new post
// api/news/create
router.post('/create', [
    check(['name_ru', 'name_en', 'text_ru', 'text_en'], 'Нельзя оставлять пустые поля').exists(),
], auth, async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные'
            })
        }

        const {name_ru, name_en, text_ru, text_en, img} = req.body
        const extURL = name_en.toLowerCase().split(' ').join('-');

        const news = new News({
            name_ru, name_en, text_ru, text_en, img, author: req.user.userId, url: extURL
        })

        await news.save()
        res.status(201).json({news})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        console.error('Error ', e)
    }
})

// Delete post
// api/news/delete
router.delete('/delete', async (req, res) => {
    try {
        const news = await News.findOne({})


        //TODO: DELETE NEWS
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

// Get all posts
// api/news/posts
router.get('/', async (req, res) => {
    try {
        const news = await News.find().sort('-date')
        res.json(news)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

// Get certain post
// api/news/:url
router.get('/:url', async (req, res) => {
    try {
        const url = req.params.url
        const certain_news = await News.findOne({url})
        res.json(certain_news)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

module.exports = router