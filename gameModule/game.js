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
	],
	"isAssassin" : false
};

var players = function(numberOfPlayers) {
	var players = {};
	for(var i=1;i<=numberOfPlayers;i++){
		players["player"+i] = JSON.parse(JSON.stringify(samplePlayer));
		players["player"+i].path = paths[i-1];
	};
	return players;
}

var GameX = function(numberOfPlayers){
	var game = {};
	game.safeZones = [4,9,13,22,25,28,37,41,46];
	game.who_sTurn = "player1";
	game.players  = new players(numberOfPlayers);
	game.playerList = Object.keys(game.players);
	game.moveTo = function(player,cId,distance,callAfterMoved){
		game.players[player].coins[cId].position +=distance;
		callAfterMoved(player,cId);
	};
	game.hasToRollTheDiceAgain = function(){
		var halts=[2,3,4];
		var player=game.who_sTurn;
		var diceVal = ld.last(game.players[player].diceRolled);
		return !(halts.indexOf(diceVal)>=0);
	};
	game.rollTheDice = function(callback) {
		diceval = giveDiceValue();
		game.players[game.who_sTurn].diceRolled.push(diceval);
		callback(diceval);
	};
	game.changePlayer = function() {
		var turn = game.playerList.indexOf(game.who_sTurn);
		turn == game.playerList.length - 1 ? (game.who_sTurn = game.playerList[0]) :
		(game.who_sTurn = game.playerList[turn+1]); 
	};
	game.getAtHome = function() {
		return game.playerList.map(function(player){
			return game.players[player].coins.reduce(function(count,coin){
				return coin.position == 49 ? (count + 1) : count;
			},0);
		})
	};
	game.getOnBoard = function(){
		return game.playerList.map(function(player){
			return game.players[player].coins.reduce(function(count,coin){
				return coin.position && coin.position < 49 ? (count + 1) : count;
			},0);
		})	
	};
	return game;
}

exports.GameX = GameX;