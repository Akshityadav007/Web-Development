const express = require("express");
const z =  require("zod");
const { Account, User } = require("../db");
const { authMiddleware } = require("../middleware");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET;

const router = express.Router();        // New router


// input validation schema for zod during sign up
const signupSchema = z.object({
    username: z.string().min(3).max(25).trim().toLowerCase(),
    firstName: z.string().trim(),
    lastName: z.string().trim(),
    password: z.string().min(6)
})

// input validation schema for zod during sign in
const signinSchema = z.object({
    username: z.string().min(3).max(25).trim().toLowerCase(),
    password: z.string().min(6)
})


// input validation schema for zod during updation
const updatedBodySchema = z.object({
    password: z.string().min(6).optional(),
    firstName: z.string().trim().optional(),
    lastName: z.string().trim().optional()
})


router.post("/signup", async (req, res) => {
    // 1. input validation
    const response = signupSchema.safeParse(req.body);
    if(!response.success){
        // failure
        return res.status(400).json({message: "Incorrect inputs"});
    }
    
    // 2. check if user already exists in database
    try{
        const user = await User.findOne({ username: req.body.username });
        if(user){
            // user already exists
            return res.status(409).json({message: "Email already taken"});
        }

        // 3. password hashing
        const newUser = new User({
            username : req.body.username,
            firstName : req.body.firstName,
            lastName : req.body.lastName
        })

        const plainTextPassword = req.body.password;
        const hashedPassword = await newUser.createHash(plainTextPassword);
        newUser.password = hashedPassword;

        // 4. create user in mongo db
        const dbUser = await newUser.save();            // we can also use '.create()' method in step 3, but that will result in two '.save'
        const userId = dbUser._id;
        //5. Generate JWT token
        const token = jwt.sign({ userId: userId }, SECRET_KEY);


        // 6. create new account an assign random balance to it
        try{
            await Account.create({
                userId,
                balance: Math.floor(1 + Math.random() * 10000)
            })
        }
        catch(err){
            return res.status(500).json({message: "Account creation unsuccessful! Internal Error"});
        }

        return res.status(200).json({
            message: "User created successfully",
            token: token
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message: "Signup error | Internal server error!"});
    }
    
});


router.post("/signin", async (req, res) => {

     // 1. input validation
     const response = signinSchema.safeParse(req.body);
     if(!response.success){
         // failure
         return res.status(400).json({message: "Incorrect inputs"});
     }

     const { username, password } = req.body;

    // 2. get the user
    const user = await User.findOne({username});

    // user not available
    if(!user){
        return res.status(404).json({message:"User not found!"});
    }

    // 3. validate the password
    const validation = await user.validatePassword(password);

    if(!validation){
        return res.status(401).json({message: "Incorrect password!"});
    }

    // 4. Jwt sign in
    const userPayload = {
        userId: user._id,
        username: user.username
    }

    const token = jwt.sign(userPayload, SECRET_KEY);
    return res.status(200).json({token: token});
});


router.put('/', authMiddleware, async (req, res) => {

    // 1. input validation
    const response = updatedBodySchema.safeParse(req.body);
    if(!response.success){
        return res.status(411).json({message: "Password is too small"});
    }

    try{
        // 2. make hash of the updated password  
        if(req.body.password){
            const user = await User.findById(req.userId);
            const password_hash = await user.createHash(req.body.password);
            req.body.password = password_hash;
        }

        // 3. update changes
        await User.updateOne({ id: req.userId }, { $set: req.body });
        
        return res.status(200).json({message: "Updated successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Could not update | Internal server error"});
    }
});


router.get('/bulk', async (req, res) => {
    const name = req.query.filter || "";  

    try {
        // Filter users directly in the database
        const filteredUsers = await User.find({
            $or: [
                { firstName: 
                    {
                        "$regex":name,
                        "$options": "i"          // i = case-insensitive

                    } 
                },
                { lastName: 
                    {
                        "$regex": name,
                        "$options": "i"          // i = case-insensitive
                    } 
                }
            ]
        });

        return res.status(200).json({
            user: filteredUsers.map(user => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});




module.exports = router;
