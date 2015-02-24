var express = require('express');
var router = express.Router();
var GameX = require("../gameModule/game.js").GameX;
var Game = new GameX(2);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'GameX', Game: Game});
});
router.get('/updateDiceTable',function(req,res){
	Game.rollTheDice(function(newNumber){
// <<<<<<< HEAD
// 		res.end(newCount+'');
// =======
// 		// var newCountHtmlElement='<tr><td><input type="checkbox" name="diceVlaue" value="1"><td>'+newCount+'</td></tr>';
		var response = {
			"newNumber":newNumber,
			"isFinished":!Game.hasToRollTheDiceAgain()
		};
		res.end(JSON.stringify(response));
// >>>>>>> 3409398657a2c5d3ef3995ac9011f62defae6c8f
	});
});

module.exports = router;
