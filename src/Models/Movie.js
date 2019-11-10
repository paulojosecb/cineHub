const { Model, DataTypes } = require('sequelize')

class Movie extends Model {
  static init (sequelize) {
    super.init({
      title: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      photo: DataTypes.STRING,
      year: DataTypes.INTEGER
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

module.exports = Movie
