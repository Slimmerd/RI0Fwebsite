//Imports
const {Router} = require('express')
const router = Router()
const Gallery = require('../models/Gallery')
const {check, validationResult} = require('express-validator')
const auth = require('../middleware/auth.middleware')


//Post new gallery post
// api/chat/post
// Only with API key and Auth-key
router.post('/post', auth, [check(['name_ru', 'name_en', 'images'], 'Нельзя оставлять пустые поля').exists(),
    check(['name_ru', 'name_en'], 'Некорректное количество символов').isLength({
        min: 5,
        max: 64
    }).trim(),], async (req, res) => {
    try {
        //Error handler
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные'
            })
        }

        const {name_ru, name_en, images} = req.body

        const gallery = new Gallery({
            name_ru, name_en, images
        })

        await gallery.save()

        res.status(201).json({gallery})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})


// Get gallery post list
// api/chat/
// Only with API key
router.get('/', async (req, res) => {
    try {
        const gallery = await Gallery.find().sort('-date')

        if (!gallery) {
            return res.status(404).json({message: 'Публикации не найдены'})
        }
        res.status(201).json(gallery)
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
        if (id === undefined || id === 'undefined') return res.status(404).json({message: 'Публикация не найдена'})

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
router.post('/edit/:id', [check(['name_ru', 'name_en', 'images'], 'Нельзя оставлять пустые поля').exists(),
    check(['name_ru', 'name_en'], 'Некорректное количество символов').isLength({
        min: 5,
        max: 64
    }).trim(),], auth, async (req, res) => {
    try {
        const id = req.params.id
        if (id === undefined || id === 'undefined') return res.status(404).json({message: 'Публикация не найдена'})
        const edited = req.body
        const gallery = await Gallery.findByIdAndUpdate(id, edited, {returnOriginal: false, useFindAndModify: false})

        if (!gallery) {
            return res.status(404).json({message: 'Публикация не найдена'})
        }

        res.status(201).json({message: "Публикация была обновлена", gallery: gallery})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})


// Delete gallery post
// api/chat/delete/:id
// Only with API key and Auth-key
router.delete('/delete/:id', auth, async (req, res) => {
    try {
        const id = req.params.id
        if (id === undefined || id === 'undefined') return res.status(404).json({message: 'Публикация не найдена'})

        const gallery = await Gallery.findByIdAndDelete(id)

        if (!gallery) {
            return res.status(404).json({message: 'Комментарий не найден'})
        }

        res.status(201).json({message: "Комментарий был удален", id: gallery.id})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

module.exports = router