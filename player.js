var http = require ('http');
var events = require('events');
var util = require('util');
var changePm = require('./add.js');
util.inherits(Player , events.EventEmitter);





function Player (Name){
	this.name = Name;
	this.pm = 0;						// pm stands for plus/minus witch is an overall stats of a basktalball player. 
										//Just to put some logic into it.
	events.EventEmitter.call(this);					
}


exports.create = function (Name){
	
	var player = new Player(Name);
	player.on("addHappened" , displayadd);
	player.on("subHappened" , displaysub);
	return player;
};



Player.prototype.addPoints = function(points) {
	changePm.add(points , this); 
	this.emit('addHappened'); // fire event
	
}

Player.prototype.subPoints = function(points) {
	changePm.sub(points , this);
	this.emit('subHappened'); // fire event
	
}


//callBacks

function displayadd(){
	changePm.displayAdd(this);
}

function displaysub(){
	changePm.displaySub(this);
}









