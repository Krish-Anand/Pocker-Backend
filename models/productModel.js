const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    SeriesThumbnail: {
        type: String,
        unique: true
    },
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
    ProductImages: [{
        type: String,
        unique: true
    }],
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