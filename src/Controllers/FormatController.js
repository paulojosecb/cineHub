const Format = require('../Models/Format')

module.exports = {
  async index (req, res) {
    try {
      const formats = await Format.findAll()
      return res.json(formats)
    } catch (error) {
      return res.json(error)
    }
  },

  async create (req, res) {
    const { description } = req.body

    if (!description) {
      return res.json({ error: 'Bad formatted Request' })
    }

    const format = await Format.create({ description })
    return res.json(format)
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
        const format = await Format.update({ description }, { returning: false, where: { id: id } })
        return res.json(format)
      }
    } catch (error) {
      return res.json({ error: error })
    }
  },

  async delete (req, res) {
    const { id } = req.params

    try {
      const format = await Format.destroy({ where: { id: id } })
      return res.json(format)
    } catch (error) {
      return res.json(({ error: error }))
    }
  }
}
