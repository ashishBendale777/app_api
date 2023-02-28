const Customer = require("../models/Customer")

exports.addCustomer = (req, res) => {
    const cust = new Customer({
        CustName: req.body.cname,
        CustMobNo: req.body.cmobno,
        CustAddress: req.body.caddress,
        CustCity: req.body.ccity,
    })
    cust.save()
        .then((insCust) => {
            res.status(200).json(insCust)
        }).catch((err) => {
            res.status(500).send(err)
        });
}