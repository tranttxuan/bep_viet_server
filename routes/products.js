const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get("/", (req, res, next) => {
    const catRequest = req.query.cat;
    const query = catRequest ? { category: catRequest } : {};
    // console.log(query)
    Product.find(query)
        .then(data => {
            // console.log(data)
            res.status(200).json(data)
        })
        .catch(err => res.status(500).json({ message: "not found product" }))
});

module.exports = router;