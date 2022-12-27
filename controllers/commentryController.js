const Commentries = require('../models/commentryModel');
const Categories = require('../models/categoryModel');

const commentryList = async(req, res) => {
    try {
        const finalCommentryResults = await Commentries.find();
        res.send({ CommentryResults: finalCommentryResults, Status: 200, message: 'Successfully Listed' });

    } catch (err) {
        res.json({ message: 'Couldn`t Connect the  Commentry List' });
    }
}

const commentryAdd = async(req, res) => {
    try {
        const category = await Categories.findById({ _id: req.params.categoryId });
        if(category) {   
            const commentries = new Commentries({
                Categories: req.params.categoryId,
                CommentryName: req.body.CommentryName,
                CommentryAudio: req.body.CommentryAudio
            })
            const commentry = await commentries.save().then(async(commentryData) => {
                if(commentryData) {
                    const postCommentryCategory = await Categories.findOneAndUpdate({ _id: req.params.categoryId }, {$push: {Commentries: commentryData._id}}, { new: true })
                    res.send(postCommentryCategory);
                }
            })
            res.send(commentry);
        } else {
            return res.status(400).send('Categories Dosn`t Exits')
        }
    } catch(err) {
        res.json({ message: 'Couldn`t Connect the commentries List' });
    }
}

const commentryUpdate = async(req, res) => {
    try {
        let postCommentry = req.body;
        const UpdatedCommentry = await Commentries.findOneAndUpdate({ _id: req.params.commentryId }, { $set:  postCommentry  }, {new: true})
        res.send(UpdatedCommentry)
    } catch (err) {
        res.json({ message: err })
    }
}

const commentryDelete = async(req, res) => {
    try {
        const commentry = await Commentries.findOneAndDelete({ _id: req.params.commentryId })
        res.send(commentry)
    } catch (err) {
        res.json({ message: err })
    }
}


module.exports = { commentryList, commentryAdd, commentryUpdate, commentryDelete }