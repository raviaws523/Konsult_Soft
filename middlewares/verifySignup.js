const User = require('../models').User;
const Role = require('../models/role');
const ROLES = ['admin', 'HR', 'user'];

const verifySignUp = {};

verifySignUp.checkUserExist = async(req, res, next) => {
    let user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if(user){
        res.send("Email Already Exists");
        next();
    }
    return;
}

verifySignUp.checkRoleExists = async(req, res, next)=>{
    if(req.body.roles){
        for(let i =0 ; i<req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i].name)){
                res.send({message: "Role Does not exist" + req.body.roles[i]})
            }
            return;
        }
    }
    next();
}

module.exports = verifySignUp;