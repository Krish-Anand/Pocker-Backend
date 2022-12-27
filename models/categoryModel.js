const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    CategoryName: {
        type: String,
        required: true,
        unique: true
    },
    Commentries: [
        { type: mongoose.Schema.Types.ObjectId, ref:'Commentry' }
    ]
})

module.exports = mongoose.model('Category', categorySchema);