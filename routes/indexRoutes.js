const express = require('express');
const routes = express.Router();
const productRouts = require('./productRoutes');
const authRouts = require('./authRoutes');
const enqueryRouts = require('./enqueryRoutes');
const commentryRouts = require('./commentryRoutes');
const categoryRouts = require('./categoryRoutes');

routes.use('/product', productRouts);
routes.use('/auth', authRouts);
routes.use('/enquery', enqueryRouts);
routes.use('/commentry', commentryRouts);
routes.use('/category', categoryRouts);

module.exports = routes;