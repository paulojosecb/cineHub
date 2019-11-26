const Category = require('../Models/Category')

module.exports = {
  async index (req, res) {
    try {
      const { id } = req.params
      if (id) {
        const category = await Category.findByPk(id)
        return res.json(category)
      } else {
        const categories = await Category.findAll()
        return res.json(categories)
      }
    } catch (error) {
      return res.json(error)
    }
  },

  async create (req, res) {
    const { description } = req.body
    try {
      if (!description) {
        return res.json({ error: 'Bad formatted Request' })
      }
      const user = await Category.create({ description })
      return res.json(user)
    } catch (error) {
      return res.json(error)
    }
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
