const Format = require('../Models/Format')

module.exports = {
  async index (req, res) {
    const formats = await Format.findAll()
    return res.json(formats)
  },

  async create (req, res) {
    const { description } = req.body
    const format = await Format.create({ description })
    return res.json(format)
  }
}
