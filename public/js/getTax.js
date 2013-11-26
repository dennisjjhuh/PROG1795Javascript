var getTax = function(nIn, sProv){
	if(typeof sProv == "undefined") sProv = 'ON';
	if(sProv == 'PEI'){
		return (nIn * 1.14).toFixed(2);
	}else if(sProv == 'NB' || sProv == 'NL' || sProv == 'ON'){
		return (nIn * 1.13).toFixed(2);
	}else if(sProv == 'NS'){
		return (nIn * 1.15).toFixed(2);
	}
	return (nIn * 1.05).toFixed(2);
};

if(typeof module != "undefined") module.exports = getTax;