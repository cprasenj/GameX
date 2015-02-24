var express = require('express');
var router = express.Router();
var Game = require("./game.js").Game;
var GameX = require("../gameModule/game.js").GameX;
Game.rollTheDice = (new GameX(2)).rollTheDice;

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'GameX', Game: Game});
});
router.get('/updateDiceTable',function(req,res){
	Game.rollTheDice(function(newCount){
		res.end(newCount+'');
	});
});

module.exports = router;
