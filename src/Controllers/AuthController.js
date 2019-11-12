const User = require('../Models/User')
const Admin = require('../Models/Admin')

module.exports = {
  async signIn (req, res) {
    try {
      const { email, password } = req.body

      if (!email || !password) {
        return res.json({ error: 'Bad formatted request' })
      }

      const admin = await Admin.findOne({ where: { email: email } })

      if (admin && admin.password === password) {
        admin.password = null
        return res.json({ user: admin, role: 'admin' })
      } else {
        const user = await User.findOne({ where: { email: email } })

        if (user && user.password === password) {
          user.password = null
          return res.json({ user: user, role: 'user' })
        } else {
          return res.json({ error: 'User not found' })
        }
      }
    } catch (error) {
      return res.json({ error: error })
    }
  },

  async signUp (req, res) {
    try {
      const { name, email, password, login } = req.body

      if (!name || !email || !password || !login) {
        return res.json({ error: 'Bad formatted request' })
      }

      const user = await User.create({ name, email, password, login })
      user.password = null
      return res.json({ user: user, role: 'user' })
    } catch (error) {
      return res.json({ error: error })
    }
  }
}
