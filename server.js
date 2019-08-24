const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')

app.use(express.static(__dirname + '/app/src'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', __dirname + '/app/src');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})