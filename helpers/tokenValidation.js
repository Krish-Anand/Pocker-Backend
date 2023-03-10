const jwt = require('jsonwebtoken');

const authUserLoginValidation = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied');
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}

const authAdminLoginValidation = (req, res, next) => {
    const token = req.header('auth-admin-token');
    if (!token) return res.status(401).send('Admin Access Denied');
    try {
        const verified = jwt.verify(token, process.env.ADMIN_TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Admin Token');
    }
}

module.exports = {authUserLoginValidation, authAdminLoginValidation}