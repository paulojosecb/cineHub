const User = require('../Models/User')

module.exports = {
  async index (req, res) {
    const users = await User.findAll()
    return res.json(users)
  },

  async create (req, res) {
    const { name, email, password, login } = req.body
    const user = await User.create({ name, email, password, login })
    return res.json(user)
  }
}
