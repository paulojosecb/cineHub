/* eslint-disable camelcase */
const User = require('../Models/User')

module.exports = {
  async index (req, res) {
    const { id } = req.params

    try {
      if (id) {
        const user = await User.findByPk(id)
        return res.json(user)
      } else {
        const users = await User.findAll()
        return res.json(users)
      }
    } catch (error) {
      return res.json({ error: error })
    }
  },

  async update (req, res) {
    const { id } = req.params
    const { name, email, password, login } = req.body

    try {
      if (!id) {
        return res.json({ error: 'Bad Formatted request' })
      } else {
        const user = await User.update({ name, email, password, login }, { returning: false, where: { id: id } })
        user.password = null
        return res.json(user)
      }
    } catch (error) {
      return res.json({ error: error })
    }
  },

  async delete (req, res) {
    const { id } = req.params

    try {
      const user = await User.destroy({ where: { id: id } })
      return res.json(user)
    } catch (error) {
      return res.json(({ error: error }))
    }
  }
}
