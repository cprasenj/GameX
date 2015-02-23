var ld = require('lodash');
var paths=[
		[4,3,2,1,8,15,22,29,36,43,44,45,46,47,48,49,42,35,28,21,14,7,6,5,13,20,27,34,41,40,39,38,37,30,23,16,9,10,11,12,19,26,33,32,31,24,17,18,25],
		[22,29,36,43,44,45,46,47,48,49,42,35,28,21,14,7,6,5,4,3,2,1,8,15,9,10,11,12,13,20,27,34,41,40,39,38,37,30,23,16,17,18,19,26,33,32,31,24,25],
		[46,47,48,49,42,35,28,21,14,7,6,5,4,3,2,1,8,15,22,29,36,43,44,45,37,30,23,16,9,10,11,12,13,20,27,34,47,40,39,38,31,24,17,18,19,26,33,32,25],
		[28,21,14,7,6,5,4,3,2,1,8,15,22,29,36,43,44,45,46,47,48,49,42,35,41,40,39,38,37,30,23,16,9,10,11,12,13,20,27,34,33,32,31,24,17,18,19,26,25]
	];
var game = {
	who_sTurn:"player1",
	player1 : {
		"diceRolled":[], 
		coins:[
		{ position : 0, owner : "player1" },
		{ position : 0, owner : "player1" },
		{ position : 0, owner : "player1" },
		{ position : 0, owner : "player1" },
		{ position : 0, owner : "player1" },
		{ position : 0, owner : "player1" },
		],
		path:paths[0],
	},
	safeZones : [4,9,13,22,25,28,37,41,46],
	player2 : {
		"diceRolled":[1,5,5,2], 
		coins:[
		{ position : 10, owner : "player2" },
		{ position : 12, owner : "player2" },
		{ position : 16, owner : "player2" },
		{ position : 0, owner : "player2" },
		{ position : 0, owner : "player2" },
		{ position : 0, owner : "player2" },
		],
		path:paths[2]
	}
};

var thorowDice = function() {
	var dice = [1,2,3,0];
	return (ld.sample(dice)+ld.sample(dice) || 12);
}

var isAllowed = function(){
	var halts=[2,3,4];
}



exports.Game = game;
