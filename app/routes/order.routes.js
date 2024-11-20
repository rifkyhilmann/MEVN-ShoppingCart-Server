module.exports = (app) => {
    const order = require('../controller/order.controller');
    const router = require('express').Router();

    router.get('/user/:id', order.findOrder)

    app.use('/api/orders', router)
}