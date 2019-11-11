const UserController = require('./Controllers/UserController')
const FormatController = require('./Controllers/FormatController')
const CategoryController = require('./Controllers/CategoryController')
const MovieController = require('./Controllers/MovieController')
const SerieController = require('./Controllers/SerieController')
const AuthController = require('./Controllers/AuthController')
const EpisodeController = require('./Controllers/EpisodeController')

const Router = require('express')

const router = Router()

router.post('/auth/signIn', AuthController.signIn)
router.post('/auth/signUp', AuthController.signUp)

router.get('/users', UserController.index)
router.get('/users/:id', UserController.index)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)

router.get('/formats', FormatController.index)
router.post('/formats', FormatController.create)
router.put('/formats/:id', FormatController.update)
router.delete('/formats/:id', FormatController.delete)

router.get('/categories', CategoryController.index)
router.post('/categories', CategoryController.create)
router.put('/categories/:id', CategoryController.update)
router.delete('/categories/:id', CategoryController.delete)

router.get('/users/:id/movies', MovieController.index)
router.post('/users/:id/movies', MovieController.create)
router.put('/users/:id/movies/:movie_id', MovieController.update)
router.delete('/users/:id/movies/:movie_id', MovieController.delete)

router.get('/users/:id/series', SerieController.index)
router.post('/users/:id/series', SerieController.create)
router.put('/users/:id/series/:serie_id', SerieController.update)
router.delete('/users/:id/series/:serie_id', SerieController.delete)

router.get('/users/:id/series/:serie_id/episodes', EpisodeController.index)
router.post('/users/:id/series/:serie_id/episodes', EpisodeController.create)
router.put('/users/:id/series/:serie_id/episodes/:episode_id', EpisodeController.update)
router.delete('/users/:id/series/:serie_id/episodes/:episode_id', EpisodeController.delete)

module.exports = router
