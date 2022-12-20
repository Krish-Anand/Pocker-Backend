const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
        unique: true
    },
    ProductDescription: {
        type: String,
        required: true
    },
    Enqueries: [
       { type: mongoose.Schema.Types.ObjectId, ref:'Enquery' }
    ],
    CreatedDateTime: {
        type: Date,
        default: Date.now
    },
    ModifiedDateTime: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Product', productSchema);