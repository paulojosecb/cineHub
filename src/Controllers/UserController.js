/* eslint-disable camelcase */
const User = require('../Models/User')

module.exports = {
  async index (req, res) {
    const { user_id } = req.params

    try {
      if (user_id) {
        const user = await User.findByPk(user_id)
        return res.json(user)
      } else {
        const users = await User.findAll()
        return res.json(users)
      }
    } catch (error) {
      return res.json({ error: error })
    }
  }
}
