var assert = require('assert'),
TestRunner = require('assert-runner');

var parseIntTests = {
		"Test that the default radix is 10": function(){
			var sIn = "1234";
			var nIn = parseInt(sIn);
			console.log("the output of parseInt(\"" + sIn + "\") is " + nIn);
			assert(nIn = 1234);
		},
		"Test that the radix of 8 produces a different result": function(){
			var sIn = "1234";
			var nIn = parseInt(sIn, 8);
			console.log("the output of parseInt(\"" + sIn + "\", 8) is " + nIn);
			assert(nIn != 1234);
		},
		"Test that the radix of 16 produces a different result": function(){
			var sIn = "1234";
			var nIn = parseInt(sIn, 16);
			console.log("the output of parseInt(\"" + sIn + "\", 16) is " + nIn);
			assert(nIn != 1234);
		},
		"Test that it detects the radix of a number starting with 0x": function(){
			var sIn = "0xA14";
			var nIn = parseInt(sIn);
			console.log("the output of parseInt(\"" + sIn + "\") is " + nIn);
			assert(nIn == 0xA14);
		},
		"Test that it doesn't parse an int 0x if the radix is 10": function(){
			var sIn = "0xA14";
			var nIn = parseInt(sIn, 10);
			console.log("the output of parseInt(\"" + sIn + "\", 10) is " + nIn);
			assert(nIn != 0xA14);
			
		}

		
};

new TestRunner(parseIntTests).again(0);