var express = require('express');
var router = express.Router();
var GameX = require("../gameModule/game.js").GameX;
var Game = new GameX(2);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'GameX',
		Game: Game
	});
});
router.get('/updateDiceTable',function(req,res){
	Game.players[Game.who_sTurn].rollTheDice(function(newNumber){
		var response = {
			"newNumber":newNumber,
			"isFinished":!Game.players[Game.who_sTurn].hasToRollTheDiceAgain()
		};
		res.end(JSON.stringify(response));
	});
});
router.get('/moveCoin',function(req,res){
	var cId = req.query.cId;
	var dices = JSON.parse(req.query.dices);
	Game.moveTo(Game.who_sTurn,cId,dices,function(player,cId,isDone){
		var response = {
			player: player,
			cId: cId,
		};
		res.end(JSON.stringify(response));
	});
});
router.get("/updatePlayerInfo",function(req,res) {
	var atHome = Game.getAtHome();
	var onBoard = Game.getOnBoard();
	var response = {
		"atHome" : atHome,
		"onBoard" : onBoard
	}
	res.end(JSON.stringify(response));
});
module.exports = router;
