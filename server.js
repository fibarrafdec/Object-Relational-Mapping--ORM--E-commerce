// Import necessary packages and routes
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the defined routes
app.use(routes);

// Sync the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
