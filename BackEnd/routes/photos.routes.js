//Imports
const {Router} = require('express')
const router = Router()
const Photos = require('../models/Photos')
const auth = require('../middleware/auth.middleware')
const apiCheck = require('../middleware/access.middleware')
const multer = require("multer");
const storage = multer.memoryStorage()
const upload = multer({storage: storage})

// Create new post
// api/photos/upload
//Only admins
router.post('/upload', auth, apiCheck, upload.array('img', 6), async (req, res) => {
    try {

        const promises = req.files.map(file => {
            const photos = new Photos({img: file.buffer})
            return photos.save()
        })

        const photos = await Promise.all(promises)

        res.status(201).json({photos})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        console.error('Error', e)
    }
})


// Get particular picture by id
// api/photos/:id
//Everyone
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        if (id === undefined || id === 'undefined') return res.status(404).json({message: 'Фото не найдено'})

        const photo = await Photos.findById(id)

        if (!photo) {
            return res.status(404).json({message: 'Фото не найдено'})
        }

        res.set('Content-Type', 'image')
        res.send(photo.img)

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        console.error('Error', e)
    }

})


//Get picture list
// api/photos/
//Only admins
router.get('/', auth, apiCheck, async (req, res) => {
    try {
        const photos = await Photos.find().sort('-date')

        if (!photos) {
            return res.status(404).json({message: 'Фотографии не найдены'})
        }

        res.json(photos)

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        console.error('Error', e)
    }
})


// Delete news by ID
// api/photos/delete/:id
// Only admins
router.delete('/delete/:id', auth, apiCheck, async (req, res) => {
    try {
        const id = req.params.id
        if (id === undefined || id === 'undefined') return res.status(404).json({message: 'Фото не найдено'})

        const photo = await Photos.findByIdAndDelete(id)

        if (!photo) {
            return res.status(404).json({message: 'Фотографии не найдены'})
        }

        res.status(201).json({message: "Фото было удалено", id: photo.id})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        console.error('Error', e)
    }

})


module.exports = router