const mongoose = require("mongoose");
require('dotenv').config(); // for .env file
const MONGO_URI = process.env.MONGO_URI; // Ensure this is correctly set in your .env file
const argon2 = require("argon2"); // hashing

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error('MongoDB connection failed:', err.message); // Improved error message
        process.exit(1); // Exit with failure
    }
};

// Call the function to connect to the database
connectDB();


// schema initialization
const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 25
    },

    password : {
        type: String,
        required : true,
        minLength: 6
    },

    firstName : {
        type: String,
        required: true,
        trim: true,
    },

    lastName : {
        type: String,
        required: true,
        trim: true
    }
})


// Method to generate Hash from plain text  using argon2
UserSchema.methods.createHash = async function (plainTextPassword) {
    return await argon2.hash(plainTextPassword);     // return password hash
};

// Method to validate the entered password using argon2
UserSchema.methods.validatePassword = async function (candidatePassword) {
  return await argon2.verify(this.password, candidatePassword)
};



const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,           // referene to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})


// model declaration
const User = mongoose.model('User', UserSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
};