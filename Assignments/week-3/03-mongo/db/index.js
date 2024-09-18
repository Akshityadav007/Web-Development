const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://AkshitYadav:Akshit123@cluster0.y9pwl.mongodb.net/courseSellingWebsite');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : {type : String, required : true, unique : true},
    password : {type : String, required : true}
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    courses : [{type : mongoose.Schema.Types.ObjectId, ref : 'Course'}]
});

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, min: 0 }, // Use Number instead of int
    imageLink: { type: String }, // Use String for URLs
    published: { type: Boolean, default: true } // Default value for published
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}