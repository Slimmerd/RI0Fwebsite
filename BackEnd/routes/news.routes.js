//Imports
const {Router} = require('express')
const router = Router()
const News = require('../models/News')
const {check, validationResult} = require('express-validator')
const auth = require('../middleware/auth.middleware')
const multer = require("multer");

// Create new post
// api/news/create
// Only admins
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
// api/news/delete/:id
// Only admins
router.delete('/delete/:url', auth, async (req, res) => {
    try {
        const url = req.params.url
        const news = await News.findOneAndDelete({url})

        res.status(201).json({message: "Новость была удалена", id: news.id})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        console.error('Error', e)
    }
})

// Get list of posts
// api/news/posts/
// Only with API key
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
// Only with API key
router.get('/:url', async (req, res) => {
    try {
        const url = req.params.url
        console.warn({url})
        const certain_news = await News.findOne({url})
        console.warn(!!certain_news)

        if (!certain_news) {
            return res.status(404).json({message: 'Новость не найдена'})
        }

        res.json(certain_news)

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        console.warn(e)
    }
})

module.exports = router