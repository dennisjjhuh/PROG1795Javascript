//need simple dummy login for page 366 **** don't use this for a real login *****

var login = function(req, res){
        var password="secret";
        var username="007";

        var user=req.param('username');
        var pass=req.param('password');

        res.setHeader("Content-Type", "text/html");
        if (user==username && pass==password) {
         res.end('pass');
        } else {
         res.end('fail');
        }

};

module.exports.login = login;
