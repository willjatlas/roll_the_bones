const express = require('express');
const app = express();
const parser = require('body-parser');
app.use(parser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
    .then((client)=>{
        const db = client.db('players');
        const scoresCollection = db.collection('scores');
        const playersRouter = createRouter(scoresCollection);
        app.use('/api/players', playersRouter);
    })
    .catch(console.err);

app.listen(5000, function() {
    console.log('App is running on port 5000');
});