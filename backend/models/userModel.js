const mongoose = require('mongoose')
const joi = require('joi')

const userSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: true,
    },
    'email': {
        type: String,
        required: true
    },
    'password': {
        type: String,
        required: true
    },
    'role': {
        type: String,
        default: 'user'
    },
})
const validateUser = (user) => {
    const Schema = joi.object({
        name: joi.string().min(3).required(),
        email: joi.string().email().required(),
        password: joi.string().min(5).required()
    })
    return Schema.validate(user)

}

module.exports = mongoose.model('user', userSchema);
module.exports.validate = validateUser
