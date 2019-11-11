/* eslint-disable camelcase */
const Serie = require('../Models/Serie')
const User = require('../Models/User')

module.exports = {
  async index (req, res) {
    const movies = await Serie.findAll()
    return res.json(movies)
  },

  async create (req, res) {
    const { user_id } = req.params
    const { title, photo, format_id, category_id } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    const movie = await Serie.create({ title, photo, user_id, format_id, category_id })
    return res.json(movie)
  }
}
