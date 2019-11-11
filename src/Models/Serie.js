const { Model, DataTypes } = require('sequelize')

class Serie extends Model {
  static init (sequelize) {
    super.init({
      title: DataTypes.STRING,
      photo: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' })
    this.belongsTo(models.Format, { foreignKey: 'format_id', as: 'format' })
    this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' })
  }
}

module.exports = Serie
