var assert = require('assert');
var TestRunner = require('assert-runner');
var wowJobs = require('./wowJobs.js').wowJobs;

var wowJobsTests = {
		"simple passing test": function(){
			assert(true == true);
		},
		"test of retrieving xml": function(done){
			var req = new TestRunner.TestRequest();
			var res = new TestRunner.TestResponse();
			wowJobs(req, res, function(err){
				assert(err == null);
				assert(res.body != "");
				done();
			});
		}
}


new TestRunner(wowJobsTests).again(0);