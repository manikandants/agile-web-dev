var express = require('express');
var path = require('path');
var port = process.env.PORT || 80;
var app = express();
app.use(express.static(path.join(__dirname, 'www')));
app.listen(port);
console.log('Application running on port : ' + port);
