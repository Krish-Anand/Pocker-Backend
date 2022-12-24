const mongoose = require('mongoose');
const app = require('./config/express')

// connect the mongoose database

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}, err => {
    if (err) throw err;
    else console.log('connected to DB')
});

app.listen(process.env.PORT || 3000);