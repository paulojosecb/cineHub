/* eslint-disable camelcase */
const Serie = require('../Models/Serie')
const User = require('../Models/User')

module.exports = {
  async index (req, res) {
    const { id, serie_id } = req.params

    if (!id) {
      return res.json({ error: 'Bad formatted request' })
    } else {
      const user = await User.findByPk(id)

      if (!user) {
        return res.status(400).json({ error: 'User Not found ' })
      } else {
        if (serie_id) {
          const serie = await Serie.findByPk(serie_id)
          return res.json(serie)
        } else {
          const series = await Serie.findAll({ where: { user_id: id } })
          return res.json(series)
        }
      }
    }
  },

  async create (req, res) {
    const { id } = req.params
    const { title, photo, format, category } = req.body

    if (!title || !photo || !format || !category) {
      return res.json({ error: 'Bad formatted Request' })
    }

    const user = await User.findByPk(id)

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    } else {
      console.log(req.body)
      const serie = await Serie.create({ title, photo, user_id: id, format_id: format, category_id: category })
      return res.json(serie)
    }
  },

  async update (req, res) {
    const { serie_id, id } = req.params
    const { title, photo, format, category } = req.body

    if (!title || !photo || !format || !category) {
      return res.json({ error: 'Bad formatted Request' })
    }

    try {
      if (!serie_id) {
        return res.json({ error: 'Bad Formatted request' })
      } else {
        const serie = await Serie.update({ title, photo, user_id: id, format_id: format, category_id: category }, { returning: false, where: { id: serie_id } })
        return res.json(serie)
      }
    } catch (error) {
      return res.json({ error: error })
    }
  },

  async delete (req, res) {
    const { serie_id } = req.params

    try {
      const serie = await Serie.destroy({ where: { id: serie_id } })
      return res.json(serie)
    } catch (error) {
      return res.json(({ error: error }))
    }
  }
}
