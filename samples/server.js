var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/sample1', express.static(__dirname + '/sample1/public'));

app.listen(3000);
console.log('Listening on port 3000...');
