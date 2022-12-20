const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes/indexRoutes');
require('dotenv/config');

const app = express();

app.use(bodyParser.json());


// Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))


app.use('/api', routes);

module.exports = app;
