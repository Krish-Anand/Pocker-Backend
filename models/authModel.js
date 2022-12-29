const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    Email: {
        type: String,
        required: true,
        min: 6,
        max: 256
    },
    Type: {
        type: String,
        required: false
    },
    RegisterType: {
        type: String
    },
    Password: {
        type: String,
        required: true,
        min: 6,
        max: 256
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', authSchema);