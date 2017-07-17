var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Yo World');
});

app.listen(3000, function () {
    console.log('Example app running on port 3000');
});
