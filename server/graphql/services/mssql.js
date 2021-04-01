const { Sequelize } = require('sequelize');
const tedious = require('tedious');

async function init() {
  try {
    const sequelize = (global.db = new Sequelize('', process.env.SQL_ROOT_USER, process.env.SQL_ROOT_PASSWORD, {
      host: 'mssql',
      dialect: 'mssql',
      dialectModule: tedious,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    }));

    //Only run on first build
    await sequelize.query(`
        IF NOT EXISTS (
          SELECT name FROM master.dbo.sysdatabases 
          WHERE name = N'${process.env.SQL_PROJECT_TABLE}'
        )
        CREATE DATABASE [${process.env.SQL_PROJECT_TABLE}]
    `);

    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {
  init,
};
