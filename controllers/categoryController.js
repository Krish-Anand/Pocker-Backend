const Categories = require('../models/categoryModel');


const categoryList = async(req, res) => {
    try {
        const finalCategoryResults = await Categories.find().populate('Commentries');
        res.send({ CategoryResults: finalCategoryResults, Status: 200, message: 'Successfully Listed Category' });

    } catch (err) {
        res.json({ message: 'Couldn`t Connect the Enquery List' });
    }
}

const categoryAdd = async(req, res) => {
    const categoryExits = await Categories.findOne({ CategoryName: req.body.CategoryName })
    if (categoryExits) return res.status(400).send('Category Already Exits')

    const category = new Categories({
        CategoryName: req.body.CategoryName
    })
    try {
        const categories = await category.save();
        res.send(categories);
    } catch (err) {
        res.json({ message: err });
    }
}

const categoryUpdate = async(req, res) => {
    try {
        let postCategory = req.body;
        postCategory.ModifiedDateTime = Date.now();
        const UpdatedCateogry = await Categories.findOneAndUpdate({ _id: req.params.categoryId }, { $set:  postCategory  }, {new: true})
        res.send(UpdatedCateogry)
    } catch (err) {
        res.json({ message: err })
    }
}

const categoryDelete = async(req, res) => {
    try {
        const categories = await Categories.findOneAndDelete({ _id: req.params.categoryId })
        res.send(categories)
    } catch (err) {
        res.json({ message: err })
    }
}

module.exports = {categoryList, categoryAdd, categoryUpdate, categoryDelete}