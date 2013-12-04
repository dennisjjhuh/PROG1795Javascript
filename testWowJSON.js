var assert = require('assert');
var TestRunner = require('assert-runner');
var wowJSON = require('./wowJSON.js').wowJSON;
var jQuery = require('js-toolbox')._jQuery;

var sJobs = null;

var wowJSONTests = {
		"simple passing test": function(){
			assert(true == true);
		},
		"test of retrieving JSON": function(done){
			var req = new TestRunner.TestRequest();
			var res = new TestRunner.TestResponse();
			wowJSON(req, res, null, function(err){
				assert(err == null);
				assert(res.sBody != "");
				sJobs = res.sBody;
				done();
			});
		},
		"test of parsing xml with my jQuery": function(){
			var oItems = JSON.parse(sJobs);
			oItems.rss.channel[0].item.forEach(function(oItem){
				console.log(oItem.title);
			});
		}
}


new TestRunner(wowJSONTests).again(0);