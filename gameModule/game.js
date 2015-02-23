var ld = require('lodash');
var paths = require('./paths.js').paths;

var gameUtil = {};
gameUtil.giveDiceValue = function() {
	var dice = [1,2,3,0];
	return (ld.sample(dice)+ld.sample(dice) || 12);
}
gameUtil.thorowUntilFinish = function(diceVal){
	var halts=[2,3,4];
	return halts.indexOf(diceVal)<0;
}

gameUtil.throwDice = function() {
	var diceVal = thorowDice();

}

var samplePlayer = {
	diceRolled: [],
	coins: [
		{position:0}, {position:0}, {position:0},
		{position:0}, {position:0}, {position:0}
	]
};

var GameX = function(numberOfPlayers){
	var game = {};
	for(var i=1;i<=numberOfPlayers;i++){
		game["player"+i] = JSON.parse(JSON.stringify(samplePlayer));
		game["player"+i].path = paths[i-1];
	}
	game.moveTo = function(player,cId,distance,callAfterMoved){
		game[player].coins[cId].position +=distance;
		callAfterMoved(player,cId);
	};
	game.hasToRollTheDiceAgain = function(){
		var halts=[2,3,4];
		var player=game.who_sTurn;
		var diceVal = ld.last(game[player].diceRolled);
		return !(halts.indexOf(diceVal)>=0);
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

// gameUtil.throwDice = function() {
// 	var dice = [1,2,3,0];
// 	game[game.who_sTurn].diceRolled.push((ld.sample(dice)+ld.sample(dice) || 12));
// }

exports.gameUtil = gameUtil;
exports.GameX = GameX;
