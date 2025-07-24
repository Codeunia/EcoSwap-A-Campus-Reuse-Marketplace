const User = require("../models/User"); 
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken"); 

const registerUser = async(req, res) => {
    const {email , password} = req.body ; 
    try {
        const user = await User.findOne({email}); 
        if(user){
            return res.status(400).json({message : "User already exists "}); 
        }
        const hashedPassword = await bcrypt.hash(password , 10) ;
        const adduser = await User.create({
            email : email , 
            password : hashedPassword
        })
        res.status(200).json({message : "user registered successfully"}); 
    }
    catch(err){
        res.status(400).json({message : err.message}); 
    }
}
module.exports = registerUser; 

const loginUser = async(req, res) => {
    const {email , password} = req.body ; 
    try{
        const user = await User.findOne({email}); 
        if(!user){
            return res.status(400).json({message : "User does not exists"}); 
        }
        const isMatch = await bcrypt.compare(password , user.password); 
        if(!isMatch){
            return res.status(400).json({message :  "Invalid password"}); 
        }
        const token = jwt.sign({userId : user._id} , process.env.JWT_SECRET , {expiresIn : "1y"}); 
        res.json({token}); 
    }
    catch(error){
        res.status(500).json({message : error.message}); 
    }
}

module.exports = loginUser; 