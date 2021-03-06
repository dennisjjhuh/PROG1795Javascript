var assert = require('assert');
var TestRunner = require('assert-runner');
var wowJobs = require('./wowJobs.js').wowJobs;
var jQuery = require('js-toolbox')._jQuery;

var sJobs = null;

var wowJobsTests = {
		"simple passing test": function(){
			assert(true == true);
		},
		"test of retrieving xml": function(done){
			var req = new TestRunner.TestRequest();
			var res = new TestRunner.TestResponse();
			wowJobs(req, res, null, function(err){
				assert(err == null);
				assert(res.sBody != "");
				sJobs = res.sBody;
				done();
			});
		},
		"test of parsing xml with my jQuery": function(){
			var aItems = jQuery(sJobs.replace(/<!\[CDATA\[([^\]]+)]\]>/ig, "$1")).find("item");
			aItems.each(function(){
				var oItem = jQuery(this);
				console.log(oItem.find("author").text());
			});
		}
}


new TestRunner(wowJobsTests).again(0);