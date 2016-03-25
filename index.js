var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 3000;

app.get('/', function(req, res) {
	res.sendfile('views/index.html');
});

http.listen(port, function(){
  	console.log('listening on *:' + port);
});
