const Joi = require('joi');

const registerValidation = (registerData) => {
    const registerSchema = Joi.object({
        Email: Joi.string().email().min(6).required(),
        Type: Joi.string().required(),
        Password: Joi.string().min(6).required(),
    })
    return registerSchema.validate(registerData);
}

const loginValidation = (loginData) => {
    const registerSchema = Joi.object({
        Email: Joi.string().email().min(6).required(),
        Password: Joi.string().min(6).required(),
    })
    return registerSchema.validate(loginData);
}

module.exports = {
    registerValidation,
    loginValidation
}