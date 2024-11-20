module.exports = (app) => {
    const products = require('../controller/product.controller');
    const router = require('express').Router();

    router.get('/', products.findAll)

    app.use('/api/products', router)
}