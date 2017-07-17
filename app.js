var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hi World');
});

app.listen(3000, function () {
    console.log('Example app running on port 3000');
});
