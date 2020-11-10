const jwt = require('jsonwebtoken');
const secret = require('../secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ message: 'You shall not pass'})
            } else {
                req.jwt = decodedToken
                next();
            }
        } )
    } else {
        res.status(401).json({ message: 'Please provide credentials'})
    }
}