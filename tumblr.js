var jQuery = require('js-toolbox')._jQuery;

module.exports.tumblr = function(req, res, next, callback){
	jQuery.ajax("http://<your tumblr name>.tumblr.com/api/read/json").done(function(sJs){
		res.setHeader("Content-Type", "application/json");
		res.end(sJs.replace("var tumblr_api_read = ", "").replace(/;\s.*$/, ""));
		if(callback)callback(null);
	}).fail(function(err){
		console.log(err);
		res.send(err.status, err.code);	
		if(callback)calback(err);
	});
}