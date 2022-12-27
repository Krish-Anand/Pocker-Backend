const Products = require('../models/productModel');

const productList = async(req, res) => {
    try {
        const finalPostResults = await Products.find().populate('Enqueries');
        res.send({ ProductResults: finalPostResults, Status: 200, message: 'Successfully Listed' });

    } catch (err) {
        res.json({ message: 'Couldn`t Connect the Post List' });
    }
}

const productAdd = async(req, res) => {
    const productExits = await Products.findOne({ ProductName: req.body.ProductName })
    if (productExits) return res.status(400).send('Product Already Exits')

    const product = new Products({
        SeriesThumbnail: req.body.SeriesThumbnail,
        ProductName: req.body.ProductName,
        ProductDescription: req.body.ProductDescription,
        ProductImages: req.body.ProductImages
    })
    try {
        const products = await product.save();
        res.send(products);
    } catch (err) {
        res.json({ message: err });
    }
}

const oneProductDetails = async(req, res) => {
    try {
        const Product = await Products.findById({ _id: req.params.productId })
        res.send(Product)
    } catch (err) {
        res.json({ message: err })
    }
}

const productDelete = async(req, res) => {
    try {
        const products = await Products.findOneAndDelete({ _id: req.params.productId })
        res.send(products)
    } catch (err) {
        res.json({ message: err })
    }
}

const productUpdate = async(req, res) => {
    try {
        let postProducts = req.body;
        postProducts.ModifiedDateTime = Date.now();
        const UpdatedProducts = await Products.findOneAndUpdate({ _id: req.params.productId }, { $set:  postProducts  }, {new: true})
        res.send(UpdatedProducts)
    } catch (err) {
        res.json({ message: err })
    }
}

module.exports = { productList, productAdd, oneProductDetails, productDelete, productUpdate }