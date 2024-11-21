const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
const cors = require('cors');

const db = require('./app/models');

db.mongoose
    .connect(db.url, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then((result) => {
        console.log("database connection")
    }).catch((err) => {
        console.log("database not connected", err)
    })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static(path.join(__dirname, './public/img')));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World")
})

require('./app/routes/product.routes')(app)
require('./app/routes/order.routes')(app)

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})