const db = require('../models');
const User = db.users;

exports.create = (req, res) => {

    User.create({

        user_name:"Mritunjay",
        phone:"9631524587",
        phone_verification:"0"

    }).then(data => {

        res.json("user_id :"+data.get('user_id'))

    }).catch(function (err) {

        res.json(err)
    });

};