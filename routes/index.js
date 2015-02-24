var express = require('express');
var router = express.Router();
var GameX = require("../gameModule/game.js").GameX;
var Game = new GameX(2);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'GameX', Game: Game});
});
router.get('/updateDiceTable',function(req,res){
	Game.rollTheDice(function(newCount){
		var newCountHtmlElement='<tr><td><input type="checkbox" name="diceVlaue" value="1"><td>'+newCount+'</td></tr>';
		var response = {"element":newCountHtmlElement,"isFinished":!Game.hasToRollTheDiceAgain()}
		res.end(JSON.stringify(response));
	});
});

module.exports = router;
