const Sequelize = require('sequelize');


const State = require('../models/State')


const connection = new Sequelize(process.env.DATABASE_URL);

State.init(connection);


module.exports = connection

