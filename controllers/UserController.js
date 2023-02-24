const User = require("../models/User")

exports.adduser = (req, res) => {
    const usr = new User({
        FirstName: req.body.fname,
        LastName: req.body.lname,
        Age: req.body.age
    })

    usr.save()
        .then((insertedUser) => {
            res.status(200).json(insertedUser)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.allusers = (req, res) => {
    User.find()
        .then((allusers) => {
            res.status(200).json(allusers)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.updateuser = (req, res) => {
    User.findOneAndUpdate({ _id: req.body.id }
        , { Age: req.body.age }, { new: false })
        .then((updatedUser) => {
            res.status(200).json(updatedUser)
        }).catch((err) => {
            res.status(500).send(err)
        });
}