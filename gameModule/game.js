var ld = require('lodash');
var paths = require('./paths.js').paths;

var gameUtil = {};

var GameX = function(numberOfPlayers){
	var game = {};
	for(var i=1;i<=numberOfPlayers;i++){
		var player = {
			diceRolled: [],
			coins: [{},{},{},{},{},{}],
			path: paths[i-1]
		};
		game["player"+i] = player;
	}
	return game;
}


// help content
var game = {
	who_sTurn:"player1",
	player1 : {
		"diceRolled":[6], 
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

gameUtil.throwDice = function() {
	var dice = [1,2,3,0];
	game[game.who_sTurn].diceRolled.push((ld.sample(dice)+ld.sample(dice) || 12));
}

gameUtil.isFinish = function(){
	var halts=[2,3,4];
	var diceVal = ld.last(game[game.who_sTurn].diceRolled);
	return halts.indexOf(diceVal)>=0;
}


exports.game= game;
exports.gameUtil = gameUtil;
exports.GameX = GameX;
