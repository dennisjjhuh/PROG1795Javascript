var assert = require('assert');
var TestRunner = require('assert-runner');

var tests = {
	"Test of assert": function(){
		assert(true == true);
	},
	"Test of parseInt without a radix": function(){
		var sIn = "1234";
		var nIn = parseInt(sIn);
		console.log("parseInt(\"" + sIn + "\") = " + nIn);
		assert(nIn == 1234);
	},
	"Test of parseInt with radix 8": function(){
		var sIn = "1234";
		var nIn = parseInt(sIn, 8);
		console.log("parseInt(\"" + sIn + "\", 8) = " + nIn);
		assert(nIn != 1234);
	}
};


new TestRunner(tests).again(0);