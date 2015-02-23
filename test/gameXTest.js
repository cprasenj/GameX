var assert = require("chai").assert;
var ld = require('lodash');
var gameUtil = require("../gameModule/game.js").gameUtil;
var GameX = require("../gameModule/game.js").GameX;
var paths = require("../gameModule/paths.js").paths;

describe("GameX ",function(){
	beforeEach(function(){
		game = new GameX(2);
	});
	describe("#hasTurnCompleted",function(){
		it("It should give truthy value for ",function() {
			game.who_sTurn="player2";
			game.player2.diceRolled = [1,5,5,2];
			assert.equal(game.hasTurnCompleted(),true);
		});
		it("It should give falsy value for ",function() {
			game.who_sTurn="player1";
			game.player1.diceRolled = [6];
			assert.equal(game.hasTurnCompleted(),false);
		});
	});
	describe("Constructor",function(){
		it("should give an Object containing players of given number",function(done){
			assert.ok(game.player1);
			assert.ok(game.player2);
			done();
		});
	});
	describe("Constructor",function(){
		it("players will have an array for dice rolled",function(done){
			assert.ok(game.player1.diceRolled);
			assert.ok(game.player2.diceRolled);
			done();
		});
	});
	describe("Constructor",function(){
		it("players should have an array of 6 play coins",function(done){
			assert.equal(game.player1.coins.length,6);
			assert.equal(game.player2.coins.length,6);
			done();
		});
	});
	describe("Constructor",function(){
		it("players should have the path to travel along the board",function(done){
			assert.deepEqual(game.player1.path,paths[0]);
			assert.deepEqual(game.player2.path,paths[1]);
			done();
		});
	});
	describe("Constructor",function(){
		it("coins should have their positions",function(done){
			var coins = game.player1.coins;
			var allCoinsPositionsAreInitially_0 = function(coin){
				return coin.position == 0;
			}
			assert.ok(coins.every(allCoinsPositionsAreInitially_0));
			done();
		});
	});
	describe("moveTo",function(){
		it("should change the position of the coin with the given number",function(done){
			var player = "player1";
			var cId = 0;
			var distance = 5;
			game[player].coins[cId].position = 2;
			var afterMoved = function(player,cId){
				var coin = game[player].coins[cId];
				assert.deepEqual(coin, game.player1.coins[0]);
				assert.equal(coin.position, 7);
				done();
			};
			game.moveTo(player,cId,distance,afterMoved);
		});
	});
});
