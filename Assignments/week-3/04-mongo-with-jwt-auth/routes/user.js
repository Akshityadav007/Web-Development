const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_SECRET_PASS} = require('../config')

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({username : username, password : password});

    res.status(200).json({ message: 'User created successfully' });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({username});

    if(user.length > 0){
        const token = jwt.sign({username}, JWT_SECRET_PASS);
        res.status(200).json({ token });
    }
    else res.status(411).json({'message' : "Invalid username or password"});
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});

    res.json({courses : allCourses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseToPurchase = req.params.courseId;
    const username = req.username;          // Assuming userMiddleware sets req.username

    if (!courseToPurchase || !username) {
        return res.status(400).json({ message: 'Course ID or username missing.' });
    }

    try {
        await User.updateOne(
            { username: username },
            { "$push": { purchasedCourses: courseToPurchase } }
        );

        res.status(200).json({ message: 'Course purchased successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while purchasing the course.', error });
    }
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username              // req.username is set by userMiddleware
    });

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router