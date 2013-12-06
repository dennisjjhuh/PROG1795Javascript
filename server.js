//npm modules that also need to be in the package.json file
var express = require('express'),
login = require('./login.js').login,
webServer = require('./webServer.js').webServer,
wowJobs = require('./wowJobs.js').wowJobs;
wowJSON = require('./wowJSON.js').wowJSON;

//factory for a new app
var app=express();


// the dummy login needs to be there for a get or post request
app.get("/chapter11/login.php", login);
app.post("/chapter11/login.php", login);
app.get("/login.php", login);
app.post("/login.php", login);

/// make url for wow Jobs

app.get("/wowJobs", function(req, res){wowJobs(req, res);});

app.get("/wowJSON", function(req, res){wowJSON(req, res);});

//server everything index.html welcome file
app.use(webServer);



//set ipaddress from openshift, to command line or to localhost:8080
var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || parseInt(process.argv.pop()) || 8080;

//start the server listening for requests
app.listen(port, ipaddr);
console.log('node.js running at port ' + port);