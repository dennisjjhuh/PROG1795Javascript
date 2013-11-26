var assert = require('assert');
var TestRunner = require('assert-runner');
var getTax = require('./public/js/getTax.js');

var tests = {
	"Test of assert": function(){
		assert(true == true);
	},
	"Test of getTax with no province": function(){
		var nIn = 12.99;
		var nWithTax = getTax(nIn);
		console.log("getTax(" + nIn + ") = " + nWithTax );
		assert(nWithTax == 14.68);
	},
	"Test of getTax for PEI": function(){
		var nIn = 12.99;
		var nWithTax = getTax(nIn, 'PEI');
		console.log("getTax(" + nIn + ", \"PEI\") = " + nWithTax );
		assert(nWithTax == 14.81);		
	},
	"Test of getTax for NB": function(){
		var nIn = 12.99;
		var nWithTax = getTax(nIn, 'NB');
		console.log("getTax(" + nIn + ", \"NB\") = " + nWithTax );
		assert(nWithTax == 14.68);
	},
	"Test of getTax for NS": function(){
		var nIn = 12.99;
		var nWithTax = getTax(nIn, 'NS');
		console.log("getTax(" + nIn + ", \"NS\") = " + nWithTax );
		assert(nWithTax == 14.94);
	},
	"Test of getTax for AB": function(){
		var nIn = 12.99;
		var nWithTax = getTax(nIn, 'AB');
		console.log("getTax(" + nIn + ", \"AB\") = " + nWithTax );
		assert(nWithTax == 13.64);
	}
};

new TestRunner(tests).again(0);