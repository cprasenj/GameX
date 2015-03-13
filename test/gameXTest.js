var assert = require("chai").assert;
var GameX = require("../gameModule/game.js").GameX;
var paths = require("../gameModule/paths.js").paths;

describe("GameX ",function(){
	beforeEach(function(){
		game = new GameX(2);
	});
	describe("#hasToRollTheDiceAgain",function(){
		it("It should give truthy value for diceRolled containing 2",function() {
			game.who_sTurn="player2";
			game.players[game.who_sTurn].diceRolled = [1,5,5,2];
			assert.equal(game.players[game.who_sTurn].hasToRollTheDiceAgain(),false);
		});
		it("It should give falsy value for diceRolled containing 3",function() {
			game.who_sTurn="player1";
			game.players[game.who_sTurn].diceRolled = [6,3];
			assert.equal(game.players[game.who_sTurn].hasToRollTheDiceAgain(),false);
		});
		it("It should give falsy value for diceRolled containing 4",function() {
			game.who_sTurn="player1";
			game.players[game.who_sTurn].diceRolled = [6,4];
			assert.equal(game.players[game.who_sTurn].hasToRollTheDiceAgain(),false);
		});
		it("It should give falsy value for diceRolled doesn't contain 2 3 4",function() {
			game.who_sTurn="player1";
			game.players[game.who_sTurn].diceRolled = [6,5,5,12];
			assert.equal(game.players[game.who_sTurn].hasToRollTheDiceAgain(),true);
		});
	});
	describe("who_sTurn",function() {
		it("initially it is the turn of player1",function() {
			assert.equal(game.who_sTurn,"player1");
		})
		it("should show player2 after player1 has finished his turn",function() {
			game.who_sTurn = "player1";
			game.changePlayer();
			assert.equal(game.who_sTurn,"player2");
			game.changePlayer();
			assert.equal(game.who_sTurn,"player1");
		})
	})
	describe("Constructor",function(){
		it("should give an Object containing players of given number",function(done){
			assert.ok(game.players.player1);
			assert.ok(game.players.player2);
			done();
		});
		it("players will have an array for dice rolled",function(done) {
			assert.ok(game.players["player1"].diceRolled);
			assert.ok(game.players.player2.diceRolled);
			done();
		});
		it("players should have an array of 6 play coins",function(done){
			assert.equal(game.players.player1.coins.length,6);
			assert.equal(game.players.player2.coins.length,6);
			done();
		});
		it("players should have the path to travel along the board",function(done){
			assert.deepEqual(game.players.player1.path,paths[0]);
			assert.deepEqual(game.players.player2.path,paths[1]);
			done();
		});
		it("coins should have their positions",function(done){
			var coins = game.players.player1.coins;
			var allCoinsPositionsAreInitially_0 = function(coin){
				return coin.position == 0;
			}
			assert.ok(coins.every(allCoinsPositionsAreInitially_0));
			done();
		});
		it("game have safeZone",function(done){
			assert.deepEqual(game.safeZones,[4,9,13,22,25,28,37,41,46]);
			done();
		});
	});
	describe("moveTo",function(){
		it("should change the position of the coin with the given number on outer ring",function(done){
			var cId = 0;
			var distance = [2,3];
			game.players.player1.coins[cId].position = 2;
			var afterMoved = function(player,cId){
				var coin = player.coins[cId];
				assert.deepEqual(coin, game.players.player1.coins[0]);
				assert.equal(coin.position, 7);
				done();
			};
			game.moveTo("player1",cId,distance,afterMoved);
		});
		it("should change the position of the coin with the given number inner ring",function(done){
			var cId = 0;
			var distance = [6,6];
			game.players.player2.coins[cId].position = 25;
			var afterMoved = function(player,cId){
				var coin = player.coins[cId];
				assert.deepEqual(coin, game.players.player2.coins[0]);
				assert.equal(coin.position, 37);
				done();
			};
			game.moveTo("player2",cId,distance,afterMoved);
		});
	});
	describe("#rollTheDice",function() {
		it("should insert a value inbetween valid range into diceRolled of who_sTurn",function() {
			var len = game.players[game.who_sTurn].diceRolled.length;
			var rollTheDiceCallback = function(val) {
				assert.ok(val < 7 || val == 12);
				assert.equal(game.players[game.who_sTurn].diceRolled.length,len+1);
			};
			game.players[game.who_sTurn].rollTheDice(rollTheDiceCallback);
			len = game.players[game.who_sTurn].diceRolled.length;
			game.players[game.who_sTurn].rollTheDice(rollTheDiceCallback);
			len = game.players[game.who_sTurn].diceRolled.length;
			game.players[game.who_sTurn].rollTheDice(rollTheDiceCallback);
		});
	})
	describe("#getAtHome",function() {
		it("initially no coin is At Home",function() {
			assert.deepEqual(game.getAtHome(),[0,0]);
		});
		it("player1 has 1 coin at home",function() {
			game.players["player1"].coins[0].position = 49;
			assert.deepEqual(game.getAtHome(),[1,0]);
		})
		it("player1 and player2 each has 1 coin at home",function() {
			game.players["player1"].coins[0].position = 49;
			game.players["player2"].coins[0].position = 49;
			assert.deepEqual(game.getAtHome(),[1,1]);
		})
		it("player1 and player2 each has 6 coin at home",function() {
			game.players["player1"].coins.forEach(function(coin) {
				coin.position = 49;
			});
			game.players["player2"].coins.forEach(function(coin) {
				coin.position = 49;
			});
			assert.deepEqual(game.getAtHome(),[6,6]);
		})
	})
	describe("#getOnboard",function() {
		it("initially no coin is on board",function() {
			assert.deepEqual(game.getOnBoard(),[0,0]);
		});
		it("player1 has 1 coin at on board",function() {
			game.players["player1"].coins[0].position = 42;
			assert.deepEqual(game.getOnBoard(),[1,0]);
		})
		it("player1 and player2 each has 1 coin on board",function() {
			game.players["player1"].coins[0].position = 41;
			game.players["player2"].coins[0].position = 45;
			assert.deepEqual(game.getOnBoard(),[1,1]);
		})
		it("player1 and player2 each has 6 coin on board",function() {
			game.players["player1"].coins.forEach(function(coin) {
				coin.position = 12;
			});
			game.players["player2"].coins.forEach(function(coin) {
				coin.position = 13;
			});
			assert.deepEqual(game.getOnBoard(),[6,6]);
		})
	})
	describe("#areYouDone",function() {
		it("player is done when all dice count is finished ",function() {
			game.players["player1"].diceRolled =[];
			assert.ok(game.players["player1"].areYouDone());
		});
	});
	// describe("#isAllowedToplay",function() {
	// 	it("it should say false if the player has all the coins out of the board",function(){
			
	// 	})
	// })

	describe("#isSafeZone",function() {
		it("it should return true if given cell is safe",function() {
			assert.ok(game.isSafeZone(4));
		});
		it("it should return true if given cell is safe cell",function() {
			assert.ok(game.isSafeZone(13));
		});
		it("it should return false if given cell is not safe",function() {
			assert.notOk(game.isSafeZone(2));
		});
	})

});
