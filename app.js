const express = require('express');
const history = require('connect-history-api-fallback'); // https://github.com/bripkens/connect-history-api-fallback fixes issue with # for SPA using single index file.
const app = express();

app.use(history());
app.use(express.static('./public'));

const routes = require('./routes/routes');
app.use('/', routes(app))

//Database
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    app.set('myDb', client.db('node-vue-mongo-demo-app'));
})

app.listen(3000, () => {
    console.log('Express on 3000')
});