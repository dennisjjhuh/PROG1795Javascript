var assert = require('assert');
var TestRunner = require('assert-runner');
var login = require('./login.js').login;

var loginTest = {
	"trivial passing test": function(){
		assert(true == true);
	},
	"test of a bad login": function(){
		var req = new TestRunner.TestRequest();
		req.params.username = "007";
		req.params.password = "not this";
		var res = new TestRunner.TestResponse();
		login(req, res);
		console.log(res.sBody);
		assert(res.sBody == 'fail');
	},
	"test of a good login": function(){
		var req = new TestRunner.TestRequest();
		req.params.username = "007";
		req.params.password = "secret";
		var res = new TestRunner.TestResponse();
		login(req, res);
		console.log(res.sBody);
		assert(res.sBody == 'pass');
	}
};

new TestRunner(loginTest).again(0);
