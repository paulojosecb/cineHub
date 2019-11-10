const { Model, DataTypes } = require('sequelize')

class Admin extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      login: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Admin
