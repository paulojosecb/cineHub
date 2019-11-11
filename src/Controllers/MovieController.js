/* eslint-disable camelcase */
const Movie = require('../Models/Movie')
const User = require('../Models/User')

module.exports = {
  async index (req, res) {
    const { id } = req.params

    if (!id) {
      return res.json({ error: 'Bad formatted request' })
    } else {
      const user = await User.findByPk(id)

      if (!user) {
        return res.status(400).json({ error: 'User Not found ' })
      } else {
        const movies = await Movie.findAll({ where: { user_id: id } })
        return res.json(movies)
      }
    }
  },

  async create (req, res) {
    const { id } = req.params
    const { title, duration, year, photo, format, category } = req.body

    if (!title || !duration || !year || !photo || !format || !category) {
      return res.json({ error: 'Bad formatted Request' })
    }

    const user = await User.findByPk(id)

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    } else {
      const movie = await Movie.create({ title, duration, year, photo, user_id: id, format_id: format, category_id: category })
      return res.json(movie)
    }
  },

  async update (req, res) {
    const { movie_id } = req.params
    const { title, duration, year, photo, owner, format, category } = req.body

    if (!title || !duration || !year || !photo || !format || !category) {
      return res.json({ error: 'Bad formatted Request' })
    }

    try {
      if (!movie_id) {
        return res.json({ error: 'Bad Formatted request' })
      } else {
        const movie = await Movie.update({ title, duration, year, photo, id: owner, format_id: format, category_id: category }, { returning: false, where: { id: movie_id } })
        return res.json(movie)
      }
    } catch (error) {
      return res.json({ error: error })
    }
  },

  async delete (req, res) {
    const { movie_id } = req.params

    try {
      const movie = await Movie.destroy({ where: { id: movie_id } })
      return res.json(movie)
    } catch (error) {
      return res.json(({ error: error }))
    }
  }
}
