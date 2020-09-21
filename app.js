const express = require('express');

const app = express();

app.use(express.static('./public'));

// Database
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    app.set('myDb', client.db('studendsDb'));
})

app.listen(3000, () => {
    console.log('Express on 3000')
});