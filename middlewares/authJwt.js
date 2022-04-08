const jwt = require('jsonwebtoken');
const User = require('../models/').User;

const authJwt = {};

authJwt.verifyToken = async(req, res, next)=>{
    let token = req.headers['x-access-token'];
    
    console.log(token);
        if(!token){
            res.status(401).send({
                message: "No token provided"
            });
            return;
        }
    
        jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
            if(err){
                return res.status(401).send({
                    message: "Unauthorized"
                });
            }
            req.userId = decoded.id;
            next();
        });
}

authJwt.isAdmin = async(req, res, next)=>{
   let user = await User.findByPk(req.userId);
   let roles = await user.getRoles();
   for(let i=0; i<roles.length;i++){
       if(roles[i].name === 'admin') {
           next();
           return;
       }
   }
    res.status(403).send({message: "Admin Role Required"});
    return;
}


authJwt.isModerator = async (req, res, next) => {

    let user = await User.findByPk(req.userId);
   let roles = await user.getRoles();
    for(let i = 0; i< roles.length; i++){
        if(roles[i].role_name === 'HR'){
            next();
            return;

        }
    }
    res.status(403).send({message: "HR Role Required"})
}


authJwt.isModeratorOrAdmin = async(req, res, next )=> {
    let user = await User.findByPk(req.userId);
    let roles = await user.getRoles();

    for ( let i=0; i<roles.length; i++ ){
        if(roles[i].role_name === 'admin'){
            next();
            return;
        }
        if(roles[i].role_name === 'moderator'){
            next();
            return;
        }
        
    }
    res.status(403).send({ message: "Required Admin or Moderator Role"})
}

 module.exports = authJwt;
