var assert = require("chai").assert;
var ld = require('lodash');
var gameUtil = require("../gameModule/game.js").gameUtil;
var GameX = require("../gameModule/game.js").GameX;
var paths = require("../gameModule/paths.js").paths;

describe("GameX ",function(){
	beforeEach(function(){
		game = new GameX(2);
	});
	describe("#hasToRollTheDiceAgain",function(){
		it("It should give truthy value for diceRolled containing 2",function() {
			game.who_sTurn="player2";
			game.player2.diceRolled = [1,5,5,2];
			assert.equal(game.hasToRollTheDiceAgain(),false);
		});
		it("It should give falsy value for diceRolled containing 3",function() {
			game.who_sTurn="player1";
			game.player1.diceRolled = [6,3];
			assert.equal(game.hasToRollTheDiceAgain(),false);
		});
		it("It should give falsy value for diceRolled containing 4",function() {
			game.who_sTurn="player1";
			game.player1.diceRolled = [6,4];
			assert.equal(game.hasToRollTheDiceAgain(),false);
		});
		it("It should give falsy value for diceRolled doesn't contain 2 3 4",function() {
			game.who_sTurn="player1";
			game.player1.diceRolled = [6,5,5,12];
			assert.equal(game.hasToRollTheDiceAgain(),true);
		});
	});
	describe("Constructor",function(){
		it("should give an Object containing players of given number",function(done){
			assert.ok(game.player1);
			assert.ok(game.player2);
			done();
		});
		it("players will have an array for dice rolled",function(done){
			assert.ok(game.player1.diceRolled);
			assert.ok(game.player2.diceRolled);
			done();
		});
		it("players should have an array of 6 play coins",function(done){
			assert.equal(game.player1.coins.length,6);
			assert.equal(game.player2.coins.length,6);
			done();
		});
		it("players should have the path to travel along the board",function(done){
			assert.deepEqual(game.player1.path,paths[0]);
			assert.deepEqual(game.player2.path,paths[1]);
			done();
		});
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
		it("should change the position of the coin with the given number on outer ring",function(done){
			var cId = 0;
			var distance = 5;
			game.player1.coins[cId].position = 2;
			var afterMoved = function(player,cId){
				var coin = game[player].coins[cId];
				assert.deepEqual(coin, game.player1.coins[0]);
				assert.equal(coin.position, 7);
				done();
			};
			game.moveTo("player1",cId,distance,afterMoved);
		});
		it("should change the position of the coin with the given number inner ring",function(done){
			var cId = 0;
			var distance = 12;
			game.player2.coins[cId].position = 25;
			var afterMoved = function(player,cId){
				var coin = game[player].coins[cId];
				assert.deepEqual(coin, game.player2.coins[0]);
				assert.equal(coin.position, 37);
				done();
			};
			game.moveTo("player2",cId,distance,afterMoved);
		});
	});
});
