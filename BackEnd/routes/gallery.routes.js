//Imports
const {Router} = require('express')
const router = Router()
const Gallery = require('../models/Gallery')
const {check, validationResult} = require('express-validator')
const auth = require('../middleware/auth.middleware')


//Post new gallery post
// api/chat/post
// Only with API key and Auth-key
router.post('/post', auth, [check(['name', 'images'], 'Нельзя оставлять пустые поля').exists(),
    check('name', 'Некорректное количество символов').isLength({min: 5, max: 64}),], async (req, res) => {
    try {
        //Error handler
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе в систему'
            })
        }

        const {name, images} = req.body

        const gallery = new Gallery({
            name, images
        })

        await gallery.save()

        res.status(201).json({gallery})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так'})
        console.warn(e)
    }
})


// Get gallery post list
// api/chat/
// Only with API key
router.get('/', async (req, res) => {
    try {
        const gallery = await Gallery.find().sort('-date')

        if (!gallery) {
            return res.status(404).json({message: 'Комментарии не найдены'})
        }
        res.json(gallery)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})


// Get particular gallery post
// api/chat/:id
// Admins
router.get('/:id', auth, async (req, res) => {
    try {
        const id = req.params.id
        const certainGalleryPost = await Gallery.findById(id)

        if (!certainGalleryPost) {
            return res.status(404).json({message: 'Комментарий не найден'})
        }

        res.status(201).json(certainGalleryPost)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})


// Edit particular gallery post
// api/chat/:id
// Only admins
router.post('/edit/:id', auth, async (req, res) => {
    try {
        const id = req.params.id
        const edited = req.body
        const gallery = await Gallery.findByIdAndUpdate(id, edited, {returnOriginal: false, useFindAndModify: false})

        if (!gallery) {
            return res.status(404).json({message: 'Новость не найдена'})
        }

        res.status(201).json({message: "Новость была обновлена", gallery: gallery})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        console.error('Error', e)
    }
})


// Delete gallery post
// api/chat/delete/:id
// Only with API key and Auth-key
router.delete('/delete/:id', auth, async (req, res) => {
    try {
        const gallery = await Gallery.findByIdAndDelete(req.params.id)

        if (!gallery) {
            return res.status(404).json({message: 'Комментарий не найден'})
        }

        res.status(201).json({message: "Комментарий был удален", id: gallery.id})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        console.error('Error', e)
    }
})

module.exports = router