var assert = require('assert'),
TestRunner = require('assert-runner');
var jQuery = require('js-toolbox')._jQuery;
var getWowJobs = require('./getWowJobs');

var ajaxTests = {
	"test of simple get of google": function(done){
		jQuery.ajax("http://www.google.com").done(function(html){
			done();
		})
		.fail(function(err){
			assert(err != null);
		});
	},
	"test of rss feed": function(done){
		jQuery.ajax({url: "http://wowjobs.ca/wowrss.aspx?q=web+developer&l=N2T1G8&s=r&sr=25&t=30&f=r&e=&si=A&Dup=H", 
			dataType: "xml"})
			.done(function(xml){
				console.log(xml);
				done();
			})
			.fail(function(err){
				assert(err != null);
			});
	},
	"test of getWowJobs": function(done){
		var req = new TestRunner.TestRequest();
		var res = new TestRunner.TestResponse();
		getWowJobs(req, res, function(err){
			assert(err == null);
			console.log(res.sBody);
			done();
		})
	}
}

new TestRunner(ajaxTests).again(0);