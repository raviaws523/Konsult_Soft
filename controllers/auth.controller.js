const Sequelize = require('sequelize');
require('dotenv').config();
const User = require('../models/').User;
const Role = require('../models/role');

const Op = Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");



exports.signup = async(req, res) => {
    // Save User to Database
    try{
        let user = await User.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
          })
            if(req.body.roles){
                let roles = await Role.findAll({
                    where: {
                        name:{
                            [Op.or]: req.body.roles
                        }
                    }    
                })
                await user.setRoles(roles);
                return res.send({ message: "User was registered successfully!" });
            }else{
                user.setRoles([2]);
                return res.send({ message: "User was registered successfully!" });
            }
        }

    catch(err){
        res.status(500).send({message: err.message});
    }
    
}
  exports.signin = async(req, res) => {
    
    try{
        let user = await User.findOne({
            where: { email: req.body.email}
        });

        if(!user ){
            return res.status(404).send({message: "Wrong login credentials!"})
        }

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
        if(!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Wrong login credentials!"
              });
        }
        var token = jwt.sign( {id: user.id}, process.env.SECRETKEY, {
            expiresIn: 86400 //24 hours
        })
        var authorities = [];
        let roles = await user.getRoles();
        for(let i= 0; i<roles.length;i++){
            authorities.push("ROLE_" + roles[i].role_name)
        }

        res.status(200).send({
            id: user.id,
            email: user.email,
            roles: authorities,
            accessToken: token
          });

    }

    catch(e){
        res.status(500).send({message: e.message});
    }
      
  };