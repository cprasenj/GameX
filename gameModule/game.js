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

plyayerproto ={
	hasToRollTheDiceAgain : function(){
		var halts=[2,3,4];
		return !(halts.indexOf(ld.last(this.diceRolled))>=0);
	},
	rollTheDice : function(callback) {
		diceval = giveDiceValue();
		this.diceRolled.push(diceval);
		callback(diceval);
	},
	areYouDone:function(){
		return this.diceRolled.length == 0;
	}
}

var players = function(numberOfPlayers) {
	for(var i=1;i<=numberOfPlayers;i++){
		this["player"+i] = JSON.parse(JSON.stringify(samplePlayer));
		this["player"+i].path = paths[i-1];	
		this["player"+i].hasToRollTheDiceAgain = plyayerproto.hasToRollTheDiceAgain;
		this["player"+i].rollTheDice = plyayerproto.rollTheDice;
		this["player"+i].areYouDone = plyayerproto.areYouDone;
	};

}

var GameX = function(numberOfPlayers){
	var game = {};
	game.safeZones = [4,9,13,22,25,28,37,41,46];
	game.who_sTurn = "player1";
	game.players  = new players(numberOfPlayers);
	game.playerList = Object.keys(game.players);

	game.moveTo = function(player,cId,dicevals,callAfterMoved){
		var distance = dicevals.reduce(function(sum,val){return sum+=val;},0);
		game.players[player].coins[cId].position +=parseInt(distance);
		dicevals.forEach(function(val){
			index = game.players[player].diceRolled.indexOf(val);
			game.players[player].diceRolled=ld.compact(ld.pullAt(game.players[player].diceRolled,index));
		});
		var isDone = game.players[player].areYouDone();
		isDone && game.changePlayer();
		callAfterMoved(game.players[player],cId,isDone);

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