const express = require('express');
const app = express();
const PORT = 5000;

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

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})