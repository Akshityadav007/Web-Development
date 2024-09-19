const jwt = require('jsonwebtoken');
const { JWT_SECRET_PASS } = require('../config');

function adminMiddleware(req, res, next) {
    const auth = req.headers['authorization'];

    if (!auth || !auth.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header missing or malformed.' });
    }

    const token = auth.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET_PASS);
        if (decoded.username) {
            // You can add additional checks to validate if the user is an admin
            next();
        } else {
            res.status(403).json({ message: 'Unauthenticated user' });
        }
    } catch (err) {
        res.status(401).json({ message: 'Invalid signature.' });
    }
}

module.exports = adminMiddleware;

/*
    -- the above is code modified by chagpt
    -- my original code is below : 

    function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const auth = req.headers['authorization']; // Note the lowercase 'authorization'
    const authArray = auth ? auth.split(" ") : [];
    const token = authArray[1];

    try{
        const decoded = jwt.verify(token, JWT_SECRET_PASS);
        if(decoded.username) next();
        else res.status(403).json({messsage : 'Unauthenticated user'});
        
    }
    catch (err) {
        res.status(411).json({message : 'Invalid signature.'});
    }
}
*/