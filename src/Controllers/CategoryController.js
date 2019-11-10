const Category = require('../Models/Category')

module.exports = {
  async index (req, res) {
    const users = await Category.findAll()
    return res.json(users)
  },

  async create (req, res) {
    const { description } = req.body
    const user = await Category.create({ description })
    return res.json(user)
  }
}
