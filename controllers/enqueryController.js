const Enqueries = require('../models/enqueryModel');
const Products = require('../models/productModel');

const enqueryList = async(req, res) => {
    try {
        const finalEnqueryResults = await Enqueries.find();
        res.send({ EnqueryResults: finalEnqueryResults, Status: 200, message: 'Successfully Listed' });

    } catch (err) {
        res.json({ message: 'Couldn`t Connect the Enquery List' });
    }
}

const enqueryAdd = async(req, res) => {
    try {
        const product = await Products.findById({ _id: req.params.productId });
        if(product) {
            const enqueries = new Enqueries({
                Products: req.params.productId,
                EnqueryName: req.body.EnqueryName,
                Email: req.body.Email,
                Phone: req.body.Phone,   
            })
            const enquery = await enqueries.save().then(async(enqueryData) => {
                if(enqueryData) {
                    const postEnqueryProducts =  await Products.findOneAndUpdate({ _id: req.params.productId }, {$push: {Enqueries: enqueryData._id}}, { new: true })
                    res.send(postEnqueryProducts);
                }
            })
            res.send(enquery);
        } else {
            return res.status(400).send('Product Dosn`t Exits')
        }
    } catch(err) {
        res.json({ message: 'Couldn`t Connect the Enquery List' });
    }
}

module.exports = { enqueryList, enqueryAdd }