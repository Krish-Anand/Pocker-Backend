const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const fileUpload = require("express-fileupload");
const routes = require('../routes/indexRoutes');
require('dotenv/config');

const app = express();
app.use(cors())

app.use(bodyParser.json());

app.use(
    fileUpload()
  );


// Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))


app.use('/api', routes);

module.exports = app;
