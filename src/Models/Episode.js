const { Model, DataTypes } = require('sequelize')

class Episode extends Model {
  static init (sequelize) {
    super.init({
      title: DataTypes.STRING,
      duration: DataTypes.INTEGER
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.belongsTo(models.Serie, { foreignKey: 'serie_id', as: 'serie' })
  }
}

module.exports = Episode
