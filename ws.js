var http = require ('http');
var sportMen = require('./player.js');
var print = require('./add.js');


var a = sportMen.create('david');
var b = sportMen.create('shlomi');

a.addPoints(22);
b.addPoints(54);
b.subPoints(31);
b.subPoints(98);



http.createServer(function(req, res){
	res.writeHead(200);
	res.write(savedStrings);
	res.end();
}).listen(8080);













