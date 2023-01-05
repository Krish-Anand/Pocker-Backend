const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    Email: {
        type: String,
        min: 6,
        max: 256
    },
    Type: {
        type: String,
        require: true
    },
    RegisterType: {
        type: String
    },
    Password: {
        type: String,
        min: 6,
        max: 256
    },
    GuestId: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', authSchema);