const UserController = require('./Controllers/UserController')
const FormatController = require('./Controllers/FormatController')
const CategoryController = require('./Controllers/CategoryController')
const MovieController = require('./Controllers/MovieController')

const Router = require('express')

const router = Router()

router.get('/users', UserController.index)
router.post('/users', UserController.create)

router.get('/formats', FormatController.index)
router.post('/formats', FormatController.create)

router.get('/categories', CategoryController.index)
router.post('/categories', CategoryController.create)

router.get('/users/:user_id/movies', MovieController.index)
router.post('/users/:user_id/movies', MovieController.create)

module.exports = router
