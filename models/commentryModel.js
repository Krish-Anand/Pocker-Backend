const mongoose = require('mongoose');

const commentrySchema = mongoose.Schema({
    Categories: {type: mongoose.Schema.Types.ObjectId, ref:'Category'},
    CommentryName: {
        type: String,
        required: true,
        unique: true
    },
    CommentryAudio: {
        type: String,
        unique: true
    }
    
})

module.exports = mongoose.model('Commentry', commentrySchema);