const { Model, DataTypes } = require('sequelize')

class Category extends Model {
  static init (sequelize) {
    super.init({
      description: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.hasMany(models.Movie, { foreignKey: 'category_id', as: 'category' })
  }
}

module.exports = Category
