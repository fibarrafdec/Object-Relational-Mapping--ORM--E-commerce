// Import necessary packages
require('dotenv').config();
const Sequelize = require('sequelize');

// Create a Sequelize instance and configure it with environment variables
const sequelize = new Sequelize(
  process.env.JAWSDB_URL || process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

// Export the configured Sequelize instance
module.exports = sequelize;
