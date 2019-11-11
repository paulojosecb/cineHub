const UserController = require('./Controllers/UserController')
const FormatController = require('./Controllers/FormatController')
const CategoryController = require('./Controllers/CategoryController')
const MovieController = require('./Controllers/MovieController')
const SerieController = require('./Controllers/SerieController')
const AuthController = require('./Controllers/AuthController')

const Router = require('express')

const router = Router()

router.post('/auth/signIn', AuthController.signIn)
router.post('/auth/signUp', AuthController.signUp)

router.get('/users', UserController.index)
router.get('/users/:user_id', UserController.index)

router.get('/formats', FormatController.index)
router.post('/formats', FormatController.create)

router.get('/categories', CategoryController.index)
router.post('/categories', CategoryController.create)

router.get('/users/:user_id/movies', MovieController.index)
router.post('/users/:user_id/movies', MovieController.create)

router.get('/users/:user_id/series', SerieController.index)
router.post('/users/:user_id/series', SerieController.create)

module.exports = router
