const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

//@route POST api/auth/register
//@desc Register user
//@access Public
router.post('/register', async (req, res) => {
    const {username, password} = req.body;
    //simple validation
    if(!username || !password)
        return res.status(400).json({success: false, message: 'Missing username or password'});

        try{
            //check for existing user
            const user = await User.findOne({username});
            if (!user){
                return res.status(404).json({success: false, message: 'User ....'});
            }

            //all good 
            const hashedPassword = await argon2.hash(password);
            const newUser = new User({username, password: hashedPassword});
            await newUser.save();
            //return token
            const accessToken = jwt.sign({userId: newUser._id}, )
        }
        catch(err){

        }
});

module.exports = router;