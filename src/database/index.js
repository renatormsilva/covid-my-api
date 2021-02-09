const Sequelize = require('sequelize');


const State = require('../models/State')


const connection = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false
  }
});

State.init(connection);


module.exports = connection

