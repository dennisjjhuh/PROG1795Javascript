var jQuery = require('js-toolbox')._jQuery;
var parseString = require('xml2js').parseString;

module.exports.wowJSON = function(req, res, next, callback){
	jQuery.ajax({url: "http://www.wowjobs.ca/wowrss.aspx?q=Web+Developer&l=N2T1G8&s=r&sr=25&t=30&f=r&e=&si=A&Dup=H"})
	.done(function(xml){
		parseString(xml, function (err, result) {
			if(err){
				console.log(err);
				res.send(err.status, err.code);	
				if(callback)calback(err);
			}else{
				res.setHeader("Content-Type", "application/json");
				res.end(JSON.stringify(result.rss.channel[0].item));
				if(callback)callback(null);
			}
		});		
	});
}
