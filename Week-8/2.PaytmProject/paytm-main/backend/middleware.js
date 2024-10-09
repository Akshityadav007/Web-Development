require('dotenv').config();
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET;


const authMiddleware = (req, res, next) => {
    const authHead = req.headers.authorization;

    // check if the header is correct
    if(!authHead || !authHead.startsWith('Bearer ')){
        return res.status(401).json({message: 'Invalid header'});
    }

    const token = authHead.split(' ')[1];

    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        
        if(decoded.userId){
            req.userId = decoded.userId;
            next();
        }
        else{
            return res.status(403).json({message: 'Unauthorized access!'})
        }
    }
    catch(err){
        return res.status(402).json({message: 'Unauthorized signature'});
    }
}


module.exports = {authMiddleware};