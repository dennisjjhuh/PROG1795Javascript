var jQuery = require('js-toolbox')._jQuery;

var wowJobs = function(req, res, callback){
	jQuery.ajax({url: "http://www.wowjobs.ca/wowrss.aspx?q=Web+Developer&l=N2T1G8&s=r&sr=25&t=30&f=r&e=&si=A&Dup=H"})
	.done(function(xml){
		res.setHeader("Content-Type", "text/xml");
		res.end(xml);
		if(callback) callback(null);
	})
	.fail(function(err){
		if(callback) callback(err);
	});
}


module.exports.wowJobs = wowJobs;