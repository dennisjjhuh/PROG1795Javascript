var assert = require('assert');
var TestRunner = require('assert-runner');
var tumblr = require('./tumblr.js').tumblr;
var jQuery = require('js-toolbox')._jQuery;

var sPosts = null;

var wowJSONTests = {
		"simple passing test": function(){
			assert(true == true);
		},
		"test of retrieving JSON": function(done){
			var req = new TestRunner.TestRequest();
			var res = new TestRunner.TestResponse();
			tumblr(req, res, null, function(err){
				assert(err == null);
				assert(res.sBody != "");
				sPosts = res.sBody;
				done();
			});
		},
		"test of parsing JSON with my jQuery": function(){
			var oPosts = JSON.parse(sPosts);
			oPosts.posts.forEach(function(oPost){
				console.log(oPost["regular-title"]);
			});
		}
}


new TestRunner(wowJSONTests).again(0);