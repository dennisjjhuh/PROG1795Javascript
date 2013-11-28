//npm modules that also need to be in the package.json file
var express = require('express');


var app=express();

//need simple dummy login for page 366 **** don't use this for a real login

var login = function(req, res){
	var password="secret";
	var username="007";

	var user=req.param('username');
	var pass=req.param('password');

	res.setHeader("Content-Type", "text/html");
	if (user==username && pass==password) {
	  res.end('pass');
	} else {
	  res.end('fail');
	}

};

app.get("/chapter11/login.php", login);
app.post("/chapter11/login.php", login);

//server everything (no welcome file)
app.use(function(req, res){
	res.sendfile(__dirname + '/public' + req._parsedUrl.path, function(err){
		if(err){
			console.log(err);
			res.send(err.status, err.code);
		}
	});
});


//set ipaddress from openshift, to command line or to localhost:8080
var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || parseInt(process.argv.pop()) || 8080;

//start the server listening for requests
app.listen(port, ipaddr);
console.log('node.js running at port ' + port);