const jwt = require("jsonwebtoken");

function authMiddleware(req,res, next){
    const token = req.headers.token;

    const decoded = jwt .verify(token, "secretkey123");
    const userId = decoded.userId;
    if (userId){
        req.userId;
        next();
    }else{
        res.json({
            message:"incorrect token!"
        })
    }
    
}

module.exports = {authMiddleware: authMiddleware};