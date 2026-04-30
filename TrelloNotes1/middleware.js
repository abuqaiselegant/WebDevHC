const jwt = require("jsonwebtoken");
function authMiddleware(req,res, next){
    const token = req.headers.token;

    const decoded = jwt.verify(token, "secretkey123");
    const userId = decoded.userId;
    if (userId){
        req.userId = decoded.userId;
        next();
    }else{
        res.status(403).json({
            message:"incorrect token!"
        })
    }
}
module.export ={authMiddleware:authMiddleware};