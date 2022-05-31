const db = require("../models");
const config = require("../config/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = db.users;


exports.register = (req,res) => {
    users.create({
        username:req.body.username,
        password:bcrypt.hashSync(req.body.password,8),
        balance:req.body.balance
    }).then(user => {
        res.send("user registered successfully")
    }).catch(err => {
        res.status(500).send("fail! Error " + err)
    })
};

exports.login = (req,res) => {
    users.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(!user){
            return res.status(404).send('user not found');
        }

        var Validpassword = bcrypt.compareSync(req.body.password, user.password);
        if(!Validpassword){
            return res.status(401).send({
                auth:false,
                accessToken: null,
                reason: "invalid password"
            });
        }

        var token = jwt.sign({id: user.id}, config.secret,{
            expiresIn: 86400 // expires in 1 day
        })
    }).catch(err => {
        res.status(500).send("Error " + err)
    })
};