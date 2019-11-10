const Sequelize = require('sequelize')
const dbConfig = require('../Config/database')

const Admin = require('../Models/Admin')
const Category = require('../Models/Category')
const Episode = require('../Models/Episode')
const Format = require('../Models/Format')
const Movie = require('../Models/Movie')
const Serie = require('../Models/Serie')
const User = require('../Models/User')

const connection = new Sequelize(dbConfig)

Admin.init(connection)
Category.init(connection)
Episode.init(connection)
Format.init(connection)
Movie.init(connection)
Serie.init(connection)
User.init(connection)

Category.associate(connection.models)
Episode.associate(connection.models)
Format.associate(connection.models)
Movie.associate(connection.models)
Serie.associate(connection.models)

module.exports = connection
