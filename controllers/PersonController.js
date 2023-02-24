const Person = require("../models/Person")

exports.addPerson = (req, res) => {
    const per = new Person({
        Name: req.body.name,
        Age: req.body.age,
        Gender: req.body.gender,
    })
    per.save()
        .then((insertedPer) => {
            res.status(200).json(insertedPer)
        }).catch((err) => {
            res.status(500).send(err)
        });
}