/* eslint-disable camelcase */
const Episode = require('../Models/Episode')
const Serie = require('../Models/Serie')

module.exports = {
  async index (req, res) {
    const { serie_id } = req.params

    if (!serie_id) {
      return res.json({ error: 'Bad formatted request' })
    } else {
      const serie = await Serie.findByPk(serie_id)

      if (!serie) {
        return res.status(400).json({ error: 'Serie Not found ' })
      } else {
        const episodes = await Episode.findAll({ where: { serie_id: serie_id } })
        return res.json(episodes)
      }
    }
  },

  async create (req, res) {
    const { serie_id } = req.params
    const { title, duration } = req.body

    if (!title || !duration) {
      return res.json({ error: 'Bad formatted Request' })
    }

    const serie = await Serie.findByPk(serie_id)

    if (!serie) {
      return res.status(400).json({ error: 'Serie not found' })
    }

    const episode = await Episode.create({ title, duration, serie_id: serie_id })
    return res.json(episode)
  },

  async update (req, res) {
    const { episode_id } = req.params
    const { title, duration } = req.body

    if (!title || !duration) {
      return res.json({ error: 'Bad formatted Request' })
    }

    try {
      if (!episode_id) {
        return res.json({ error: 'Bad Formatted request' })
      } else {
        const episode = await Episode.update({ title, duration }, { returning: true, where: { id: episode_id } })
        return res.json(episode)
      }
    } catch (error) {
      return res.json({ error: error })
    }
  },

  async delete (req, res) {
    const { episode_id } = req.params

    try {
      const episode = await Episode.destroy({ where: { id: episode_id } })
      return res.json(episode)
    } catch (error) {
      return res.json(({ error: error }))
    }
  }
}
