const db = require('../models');

const Order = db.orders;

exports.findOrder = (req, res) => {
    const id = Number(req.params.id);

    Order.aggregate([
        {
            $match : {
                user_id : id
            }
        }, {
            $lookup : {
                from : "products",
                localField : "cart_itms",
                foreignField : "code",
                as : "products"
            }
        }
    ])
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(409).send({
            message : err.message,
        })
    })
}