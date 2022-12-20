const mongoose = require('mongoose');

const enquerySchema = mongoose.Schema({
    Products: {type: mongoose.Schema.Types.ObjectId, ref:'Product'},
    EnqueryName: {
        type: String,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    CreatedDateTime: {
        type: Date,
        default: Date.now
    },
    

})

module.exports = mongoose.model('Enquery', enquerySchema);