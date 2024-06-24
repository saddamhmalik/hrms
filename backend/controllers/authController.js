const ResponseHelper = require('../utils/responseHelper')
const userModel = require('../models/userModel')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Login = async (req, res) => {
    try {
        const { email, password } = req.body
        const existingUser = await userModel.find({ email: email })
        if (!existingUser) {
            return ResponseHelper.error(res, 'User not found')
        }
        const isMatch = await bycrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return ResponseHelper.error(res, 'Invalid password', 400)
        }
        const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
        const data = {
            'token': token,
            'user': existingUser
        }
        return ResponseHelper.success(res, data, 'Login successfull')
    } catch (error) {
        return ResponseHelper.error(res, error.message)
    }


}

const Register = (req, res) => {
    // const

}


module.exports = {
    Login,
    Register
}