const { Model, DataTypes } = require('sequelize')

class Format extends Model {
  static init (sequelize) {
    super.init({
      description: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.hasMany(models.Movie, { foreignKey: 'format_id', as: 'format' })
  }
}

module.exports = Format
