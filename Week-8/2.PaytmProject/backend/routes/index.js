const express = require("express");
const userRouter = require('./user');
const accountRouter = require('./account');

const router = express.Router();        // New router

router.use("/user", userRouter);        // route all requests of '/api/v1/user'
router.use("/account", accountRouter);

module.exports = router;
