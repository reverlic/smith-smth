//dependencies

var express = require('express');
var app = express();
var	path = require('path');


app.get('/', function(req,res){
	res.sendFile(path.join(__dirname+'/public/views/index.html'));
})

app.use(express.static(__dirname + '/public'));

app.listen(3050);
console.log('listening at :3050 ctrl+c to exit')