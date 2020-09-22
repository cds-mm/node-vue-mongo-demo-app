const express = require('express');
const history = require('connect-history-api-fallback'); // https://github.com/bripkens/connect-history-api-fallback fixes issue for SPA using single index file.
const app = express();

app.use(history());
app.use(express.static('./public'));

// Database
// var MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true}, () => {
//     app.set('myDb', client.db('studendsDb'));
// })

app.listen(3000, () => {
    console.log('Express on 3000')
});