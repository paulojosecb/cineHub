/* eslint-disable camelcase */
const Movie = require('../Models/Movie')
const User = require('../Models/User')

module.exports = {
  async index (req, res) {
    const movies = await Movie.findAll()
    return res.json(movies)
  },

  async create (req, res) {
    const { user_id } = req.params
    const { title, duration, photo, year, format_id, category_id } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    const movie = await Movie.create({ title, duration, photo, year, user_id, format_id, category_id })
    return res.json(movie)
  }
}
