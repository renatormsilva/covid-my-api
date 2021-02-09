const Sequelize = require('sequelize');
const database = require('../config/database')

const State = require('../models/State')


const connection = new Sequelize(database);

State.init(connection);


module.exports = connection

