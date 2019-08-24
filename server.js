const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/src'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', __dirname + '/src');

app.get('/', (req, res) => {
    res.render('src/index.html');
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})