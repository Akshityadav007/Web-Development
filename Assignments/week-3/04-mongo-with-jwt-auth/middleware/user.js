const jwt = require('jsonwebtoken');
const { JWT_SECRET_PASS } = require('../config');

function userMiddleware(req, res, next) {
    const auth = req.headers['authorization'];

    if (!auth || !auth.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header missing or malformed.' });
    }

    const token = auth.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET_PASS);
        if (decoded.username) {
            req.username = decoded.username;
            next();
        } else {
            res.status(403).json({ message: 'Unauthenticated user' });
        }
    } catch (err) {
        res.status(401).json({ message: 'Invalid signature.' });
    }
}

module.exports = userMiddleware;