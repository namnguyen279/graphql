const { Sequelize } = require('sequelize');
console.log(process.env.POSTGRESQL_DATABASE, process.env.POSTGRESQL_REPLICATION_USER);
async function init() {
  const sequelize = new Sequelize(process.env.POSTGRESQL_DATABASE, process.env.POSTGRESQL_REPLICATION_USER, process.env.POSTGRESQL_REPLICATION_PASSWORD, {
    host: 'postgresql-master',
    dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('E-DB:' + error);
    throw new Error('Unable to connect to the database');
  }
}

exports.init = init;
