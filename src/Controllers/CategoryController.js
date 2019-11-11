const Category = require('../Models/Category')

module.exports = {
  async index (req, res) {
    const users = await Category.findAll()
    return res.json(users)
  },

  async create (req, res) {
    const { description } = req.body
    if (!description) {
      return res.json({ error: 'Bad formatted Request' })
    }
    const user = await Category.create({ description })
    return res.json(user)
  },

  async update (req, res) {
    const { id } = req.params
    const { description } = req.body

    if (!description) {
      return res.json({ error: 'Bad formatted Request' })
    }

    try {
      if (!id) {
        return res.json({ error: 'Bad Formatted request' })
      } else {
        const category = await Category.update({ description }, { returning: false, where: { id: id } })
        return res.json(category)
      }
    } catch (error) {
      return res.json({ error: error })
    }
  },

  async delete (req, res) {
    const { id } = req.params

    try {
      const category = await Category.destroy({ where: { id: id } })
      return res.json(category)
    } catch (error) {
      return res.json(({ error: error }))
    }
  }
}
