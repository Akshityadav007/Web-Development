const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET_PASS} = require("../config");

const {Admin, Course} = require("../db");


// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username : username,
        password : password
    });

    res.json({ message: 'Admin created successfully' });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if the user is present
    const admin = await Admin.find({username, password});
    
    if(admin.length > 0){
        const token = jwt.sign({username}, JWT_SECRET_PASS);
        res.status(200).json({ token });
    }
    else res.status(411).json({'message' : 'Invalid username or password'});    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    // insert the course details in the account in db
    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink,
    });

    res.json({ 'message': 'Course created successfully', 'courseId': newCourse._id });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});

    res.json({courses : allCourses});
});

module.exports = router;