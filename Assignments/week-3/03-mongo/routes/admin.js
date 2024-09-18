const { Router } = require("express");
const router = Router();
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db")

// Admin Routes
router.post('/signup', async function (req, res) {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // create a new account in db (admin directory)
    await Admin.create(
        {
            'username' : username, 
            'password' : password
        }
    );

    res.json({'message' : 'Admin created successfully'});
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic

    // details of course
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    // insert the course details in the account in db
    const newCourse = Course.create({
        title,
        description,
        price,
        imageLink,
    });

    res.json({ 'message': 'Course created successfully', 'courseId': newCourse._id });
});

router.get('/courses', adminMiddleware, async function (req, res) {    
    // get all the courses in this account in db and return
    const allCourses = await Course.find({});

    res.json({courses : allCourses});
});

module.exports = router;