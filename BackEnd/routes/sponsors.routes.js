//Imports
const {Router} = require('express')
const router = Router()
const Sponsors = require('../models/Sponsors')
const {check, validationResult} = require('express-validator')
const auth = require('../middleware/auth.middleware')

// Create new post
// api/sponsors/create
// Only admins
router.post('/create', [
    check(['name', 'category'], 'Нельзя оставлять пустые поля').exists().trim(),
], auth, async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные'
            })
        }

        const {name, category, img} = req.body

        const sponsor = new Sponsors({
            name, category, img
        })

        await sponsor.save()
        res.status(201).json({sponsor})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

// Delete post
// api/sponsors/delete/:id
// Only admins
router.delete('/delete/:url', auth, async (req, res) => {
    try {
        const id = req.params.id
        if (id === undefined || id === 'undefined') return res.status(404).json({message: 'Публикация не найдена'})

        const sponsor = await Sponsors.findByIdAndDelete(id)

        if (!sponsor) {
            return res.status(404).json({message: 'Спонсор не найден'})
        }

        res.status(201).json({message: "Спонсор был удален", id: sponsor.id})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

// Get list of posts
// api/sponsors/posts/
// Only with API key
router.get('/', async (req, res) => {
    try {
        const sponsor = await Sponsors.find().sort('-date')

        if (!sponsor) {
            return res.status(404).json({message: 'Спонсоры не найдены'})
        }

        res.status(201).json(sponsor)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

module.exports = router