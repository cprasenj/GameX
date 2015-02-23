var express = require('express');
var router = express.Router();
var Game = require("./game.js").Game;

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'GameX', Game: Game});
});

module.exports = router;
