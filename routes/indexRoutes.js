const express = require('express');
const routes = express.Router();
const productRouts = require('./productRoutes');
const authRouts = require('./authRoutes');
const enqueryRouts = require('./enqueryRoutes');

routes.use('/product', productRouts);
routes.use('/auth', authRouts);
routes.use('/enquery', enqueryRouts);

module.exports = routes;