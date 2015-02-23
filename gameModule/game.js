var ld = require('lodash');
var paths = require('./paths.js').paths;

giveDiceValue = function() {
	var dice = [1,2,3,0];
	return (ld.sample(dice)+ld.sample(dice) || 12);
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
	game.who_sTurn = "player1";
	for(var i=1;i<=numberOfPlayers;i++){
		game["player"+i] = JSON.parse(JSON.stringify(samplePlayer));
		game["player"+i].path = paths[i-1];
	};
	game.moveTo = function(player,cId,distance,callAfterMoved){
		game[player].coins[cId].position +=distance;
		callAfterMoved(player,cId);
	};
	game.hasToRollTheDiceAgain = function(){
		var halts=[2,3,4];
		var player=game.who_sTurn;
		var diceVal = ld.last(game[player].diceRolled);
		return !(halts.indexOf(diceVal)>=0);
	};
	game.rollTheDice = function(player,callback) {
		diceval = giveDiceValue();

	};
	// game.changePlayer = function() {

	// };
	return game;
}

exports.GameX = GameX;