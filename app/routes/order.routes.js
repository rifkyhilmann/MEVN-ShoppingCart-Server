module.exports = (app) => {
    const order = require('../controller/order.controller');
    const router = require('express').Router();

    router.get('/user/:id', order.findOrder)
    router.post('/user/:id/add', order.addToCart)
    router.delete('/user/:id/delete/:product', order.removeFromCart)

    app.use('/api/orders', router)
}