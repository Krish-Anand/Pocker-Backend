const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/authModel');
const { registerValidation, loginValidation } = require('../helpers/authValidation');

const registerController = async(req, res) => {

    // Lets validate the data before the users
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check for existing user emails in user collections
    const emailExits = await User.findOne({ Email: req.body.Email, Type: req.body.Type }).then(async(typeWithEmail) => {
        return await typeWithEmail
    })
    if (emailExits) return res.status(400).send('Email Already Exits')

    // Hashing the password from userdetails
    const salt = await bycrypt.genSalt(10)
    const hashedPassword = await bycrypt.hash(req.body.Password, salt)

    const user = new User({
        Email: req.body.Email,
        Type: req.body.Type,
        Password: hashedPassword
    })
    try {
        const savedDetails = await user.save();
        res.send({results:savedDetails, status: 'success'});
    } catch (err) {
        res.json({ message: err, status: err.status })
    }
}

const loginController = async(req, res) => {
    // Checking the username and password validation here
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    // Check for existing emails in user collections
    const user = await User.findOne({ Email: req.body.Email })
    if (!user) return res.status(400).send('Username and Password are incorrect')

    // Checking the correct passwords
    const validPass = await bycrypt.compare(req.body.Password, user.Password)
    if (!validPass) return res.status(400).send('Password are incorrect')

    if(user['Type'] === 'admin') {
        const token = jwt.sign({ _id: user._id }, process.env.ADMIN_TOKEN_SECRET);
        res.header('auth-admin-token', token).send({access_token: token, status: 'admin login successfully'});
    } else {
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.header('auth-token', token).send({access_token: token, status: 'login successfully'});
    } 

}

module.exports = { loginController, registerController }