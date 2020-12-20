//Imports
const {Router} = require('express')
const router = Router()
const Photos = require('../models/Photos')
const {check, validationResult} = require('express-validator')
const auth = require('../middleware/auth.middleware')
const apiCheck = require('../middleware/access.middleware')
const multer = require("multer");
const storage = multer.memoryStorage()
const upload = multer({storage: storage})

// Create new post
// api/photos/upload
//Only admins
router.post('/upload', [check(['img'], 'Выберите фотографию').exists()], auth, apiCheck, upload.array('img', 6), async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные'
            })
        }

        const promises = req.files.map(file => {
            const photos = new Photos({img: file.buffer}) // create the new Image
            return photos.save() // return the promise without calling it yet
        })

        const photos = await Promise.all(promises) // calls all the porimises returned in `promises`

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
        const photo = await Photos.findById(req.params.id)

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
        const photos = await Photos.find().sort('-date').distinct('_id')
        res.json(photos)

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        console.error('Error', e)
    }
})

// Delete news by ID
// api/photos/delete/:id
// Only admins
router.delete('/delete/:id', auth, apiCheck, async (res, req) => {
    try {
        const photo = await Photos.findByIdAndDelete(req.params.id)

        res.status(201).json({message: "Фото было удално", id: photo.id})
        //TODO: Test photo deleting feature

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        console.error('Error', e)
    }

})


module.exports = router