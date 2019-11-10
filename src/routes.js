const UserController = require('./Controllers/UserController')

const Router = require('express')

const router = Router()

router.get('/users', UserController.index)
router.post('/users', UserController.create)

module.exports = router
