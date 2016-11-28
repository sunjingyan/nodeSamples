var express = require('express');
var app = express();

app.get('/', function(req, res) {
	//console.log('hello express');
	res.end('hello express\n');
});
		
app.listen(1337);
