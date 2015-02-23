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
		console.log("here something went wrong ------",newCount);
		var newCountHtmlElement='<tr><td><input type="checkbox" name="diceVlaue" value="1"><td>'+newCount+'</td></tr>';
		res.end(newCountHtmlElement);
	});
});

module.exports = router;
