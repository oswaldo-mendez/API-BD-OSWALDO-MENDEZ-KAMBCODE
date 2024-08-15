const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'postgress',
    }
);

sequelize.authenticate()
    .then(() => console.log(`Conexión a base de datos, fue exitosa`))
    .cathc(err => console.error(`No se pudo conectar la base de datos`, err));

module.exports = sequelize;