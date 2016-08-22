//dependencies
var bsContext = require('./mssql/blacksmithApi')

var express = require('express');
var app = express();
var	path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
	res.header('Expires', '-1');
	res.header('Pragma', 'no-cache');
  next();
});


app.get('/', function(req,res){
	res.sendFile(path.join(__dirname+'/public/views/index.html'));
})

app.get('/api/getallbs', function(req,res){
	bsContext.getAllCharacter(function(result){
		res.send(result)
	});
	//res.send('isDbWorks : '+isDbWorks );.
})

app.post('/api/getbs', function(req,res){	
	bsContext.getCharacter(req.body,function(result){
		if(result.isError)
			res.status(500);
		res.send(result);
	});
	//res.send('isDbWorks : '+isDbWorks );.
})

app.post('/api/stamp', function(req, res) {
  bsContext.stamp(req,function(result){
  	res.send('success + ' + result);
  });
  
});

app.post('/api/updatebs',function(req,res){
	bsContext.updateBlackSmith(req.body,function(result){
		if(result.isError)
			res.status(500);
		res.send(result);
	})
})

app.post('/api/createbs',function(req,res){
	bsContext.createBlackSmith(req.body,function(result){
		if(result.isError)
			res.status(500);
		res.send(result);
	})
})

app.get('/api/getallmap', function(req,res){
	bsContext.getAllMap(function(result){
		res.send(result)
	});
	//res.send('isDbWorks : '+isDbWorks );.
})

app.post('/api/getmap', function(req,res){	
	bsContext.getMap(req.body,function(result){
		if(result.isError)
			res.status(500);
		res.send(result);
	});
	//res.send('isDbWorks : '+isDbWorks );.
})

app.post('/api/createmap', function(req,res){
	bsContext.createMap(req.body,function(result){
		if(result.isError)
			res.status(500);
		res.send(result);
	})
})

app.post('/api/updatemap',function(req,res){
	bsContext.updateMap(req.body,function(result){
		if(result.isError)
			res.status(500);
		res.send(result);
	})
})

app.use(express.static(__dirname + '/public'));

app.listen(3050);
console.log('listening at :3050 ctrl+c to exit')