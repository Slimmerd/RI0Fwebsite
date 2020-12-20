//Imports
const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

// /api/auth/register -- Register POST
router.post('/register', [
        //Check validators is email/password format correct
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Мнимальная длина пароля 8 символов').isLength({min: 8}),
        check('name_ru', 'Имя должно состоять из букв').isString(),
        check('name_en', 'Имя должно состоять из букв').isString()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации'
                })
            }

            const {email, password, name_ru, name_en} = req.body

            // Logic to find if there a user in database with same email
            const candidate = await User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: 'Пользователь с данным Email уже существует'})
            }

            //Register process logic
            const hashedPassword = await bcrypt.hash(password, 12) //Encrypting password

            const user = new User({email, password: hashedPassword, name_ru, name_en})  //Making new user

            await user.save() // Waiting until user is saved

            res.status(201).json({message: 'Пользователь создан'})

        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так'})
        }
    })


// /api/auth/login -- Login POST
router.post('/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        try {
            //Error handler
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе в систему'
                })
            }

            const {email, password} = req.body //Requesting password and email
            console.warn(req.body)

            const user = await User.findOne({email}) // Is there a user in database

            if (!user) {
                return res.status(400).json({message: 'Пользователь не найден'})
            }

            const isMatch = await bcrypt.compare(password, user.password) // Is password right or not

            if (!isMatch) {
                return res.status(400).json({message: 'Неверный пароль'})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )

            res.json({token, userId: user.id, name_ru: user.name_ru, name_en: user.name_en})


        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так'})
            console.warn(e)
        }
    })

router.post('/name', [check('id', 'Author ID не найден').exists()], async (req, res) => {
    try {
        const {id} = req.body
        const user = await User.findById(id)

        if (!user) {
            return res.status(400).json({message: 'Пользователь не найден'})
        }

        res.json({author_ru: user.name_ru, author_en: user.name_en})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так'})
        console.warn(e)
    }
})


module.exports = router