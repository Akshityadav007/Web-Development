const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db');

// User Routes
router.post('/signup', async function (req, res) {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // create a new account in db(user folder)
    User.create({
        'username' : username,
        'password' : password
    })

    res.json({'message' : 'User created successfully'});
});

// view all courses
router.get('/courses', async function (req, res)  {
    // Implement listing all courses logic
    const allCourses = await Course.find({});

    // get all the courses from db and return (same as admin)
    return res.json({'courses' : allCourses});
});


// purchase course
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    
    // add the course in the user account in db
    await User.updateOne({
        username : username
    },{
        "$push" : {
        courses : courseId
    }   
    })
    
    res.json({ 'message': 'Course purchased successfully' });
});


// show purchased courses
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;

    // return all the purchased courses by the user from db
    const user = await User.findOne({ username : username });

    const userPurchasedCourses = await Course.find({ _id : { "$in" : user.courses }});
    
    res.json({courses : userPurchasedCourses});
});

module.exports = router