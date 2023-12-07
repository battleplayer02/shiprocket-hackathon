const express = require('express')
const User = require('../models/user')

// Route group for authentication
const authRouter = express.Router()

// POST /auth/login
authRouter.post('/login',async (req, res) => {
    const { email, password } = req.body
    
    // get the user on the basis of email and varify the password with bcrypt
    // if the user is not found or password is incorrect then send the error response
    // else generate the token and send it to the user

    // get the user from the database on the basis of email using the findOne method of the User model
    let user = await User.findOne({
        where: {
            email: email
        }
    })
    // if the user is not found then send the error response
    if (!user) {
        return res.status(404).json({
            error: 'User not found'
        })
    }
    // if the user is found then verify the password using the comparePassword method of the User model
    let isPasswordValid = await user.comparePassword(password)
    // if the password is invalid then send the error response
    if (!isPasswordValid) {
        return res.status(401).json({
            error: 'Invalid password'
        })
    }
    // if the password is valid then generate the token using the generateJWT method of the User model
    let token = await user.generateJWT()
    // send the token in the response
    res.json({
        token: token
    })
})

// POST /auth/signup
authRouter.post('/signup',async (req, res) => {
    const { username, email, password } = req.body

    // create a new user using the create method of the User model
    // send the newly created user as response

    // create a new user using the create method of the User model
    let newUser = await User.create({
        username: username,
        email: email,
        password: password
    })
    // send the newly created user as response
    res.json(newUser)
})


// logout route
authRouter.post('/logout', (req, res) => {
    // destroy the session
    // send the success response
    // and invalidate the token
    req.session.destroy()
    
    res.json({
        message: 'Logout successful'
    })
})

exports.authRouter = authRouter