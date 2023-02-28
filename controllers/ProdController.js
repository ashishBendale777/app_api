const Product = require("../models/Product")

exports.addproduct = (req, res) => {
    const prod = new Product({
        ProdName: req.body.prodname,
        ProdCategory: req.body.prodcategory,
        ProdPrice: Number(req.body.prodprice),
        ProdImage: req.body.prodimg
    })

    prod.save()
        .then((insProd) => {
            res.status(200).json(insProd)
        }).catch((err) => {
            res.status(500).send(err)
        });
}

exports.allprod = (req, res) => {
    Product.find()
        .then((allprod) => {
            res.status(200).json(allprod)
        }).catch((err) => {
            res.status(500).send(err)
        });
}