//Imports
const {Router} = require('express')
const router = Router()
const Chat = require('../models/Chat')
const {check, validationResult} = require('express-validator')
const auth = require('../middleware/auth.middleware')
const multer = require("multer");


//Post new comment
// api/chat/post
// Only with API key
router.post('/post', [check(['name', 'call', 'text'], 'Нельзя оставлять пустые поля').exists(),
    check('call', 'Некорректное количество символов').isLength({min: 3, max: 8}),
    check('name', 'Некорректное количество символов').isLength({min: 2, max: 32}),
    check('text', 'Некорректное количество символов').isLength({min: 10, max: 600}),
    check('email', 'Некорректный email').isEmail(),], async (req, res) => {
    try {
        //Error handler
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе в систему'
            })
        }

        const {name, call, text, email} = req.body

        const chat = new Chat({
            name, call, text, email
        })

        await chat.save()

        res.status(201).json({chat})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так'})
        console.warn(e)
    }
})


// Get comments list
// api/chat/
// Only with API key
router.get('/', async (req, res) => {
    try {
        const chat = await Chat.find().sort('-date')
        res.json(chat)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})


// Get particular comment
// api/chat/:id
// Admins
router.get('/:id', auth, async (req, res) => {
    try {
        const id = req.params.id
        const certain_news = await Chat.findById(id)
        res.json(certain_news)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})


// Delete comment
// api/chat/delete/:id
// Only with API key
router.delete('/delete/:id', auth, async (req, res) => {
    try {
        const chat = Chat.findByIdAndDelete(req.params.id)

        res.status(201).json({message: "Фото было удално", id: chat.id})
        //TODO: Test news deleting feature
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        console.error('Error', e)
    }
})

module.exports = router