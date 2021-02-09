const parse = require('pg-connection-string').parse;



let dataBaseConfig 

if (process.env.NODE_ENV === 'production') {
  const config = parse(process.env.DATABASE_URL);

  dataBaseConfig = {
    dialect: 'postgres',
    host: config.host,
    username: config.user,
    password: config.password,
    database: config.database,
    define: {
      timestamps: true,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }

} else {
  dataBaseConfig = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '8100',
    database: 'db_contry_list',
    define: {
      timestamps: true,
    }
  }
}


module.exports = dataBaseConfig