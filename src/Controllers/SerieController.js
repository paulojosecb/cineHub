/* eslint-disable camelcase */
const Serie = require('../Models/Serie')
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
        const series = await Serie.findAll({ where: { user_id: id } })
        return res.json(series)
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
      const serie = await Serie.create({ title, photo, id, user_id: id, format_id: format, category_id: category })
      return res.json(serie)
    }
  },

  async update (req, res) {
    const { serie_id } = req.params
    const { title, photo, owner, format, category } = req.body

    if (!title || !photo || !owner || !format || !category) {
      return res.json({ error: 'Bad formatted Request' })
    }

    try {
      if (!serie_id) {
        return res.json({ error: 'Bad Formatted request' })
      } else {
        const serie = await Serie.update({ title, photo, user_id: owner, format_id: format, category_id: category }, { returning: false, where: { id: serie_id } })
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
