// Import necessary packages and modules
const router = require('express').Router();
const apiRoutes = require('./api');

// Define routes
router.use('/api', apiRoutes);

// Export the router
module.exports = router;
