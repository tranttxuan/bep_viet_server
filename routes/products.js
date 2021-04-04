const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get("/", (req, res, next) => {
    const catRequest = req.query.cat;
    const query = catRequest ? { category: catRequest } : {};
    // console.log(query)
    Product.find(query)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: err }))
});

router.get("/:idProduct", (req, res, next) => {
    Product.findById(req.params.idProduct)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: err }))
})

module.exports = router;