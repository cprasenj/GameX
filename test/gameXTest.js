var assert = require("chai").assert;
var ld = require('lodash');
var gameUtil = require("../gameModule/game.js").gameUtil;
var GameX = require("../gameModule/game.js").GameX;
var game = require("../gameModule/game.js").game;
var paths = require("../gameModule/paths.js").paths;

// describe("Adda", function(){
// 	beforeEach(function(){
// 		fs.writeFileSync('./tests/data/instance.db',backUpDb);
// 	});

// 	describe("getMyTopics", function(){
// 		it("should give all created and joined topics of mail mahesh@gmail.com", function(done){
// 			records.getMyTopics("mahesh@gmail.com",function(err,myTopics){
// 				assert.deepEqual(myTopics,[ 
// 					{ id: 2, name: 'Music' },
//   					{ id: 7, name: 'Vijayawada'},
//   					{ id: 1, name: 'Cricket' },
//   					{ id: 3, name: 'STEP' } ]);
// 				done();
// 			});
// 		});
// 	});


describe("#isFinish",function(){
	it("It should give truthy value for ",function() {
		var halts =[2,3,4];
		game.who_sTurn="player2";
		var isFinish = gameUtil.isFinish();
		assert.equal(isFinish,true);
	})
	it("It should give falsy value for",function() {
		var halts =[2,3,4];
		game.who_sTurn="player1";
		var isFinish = gameUtil.isFinish();
		assert.equal(isFinish,true);
	})
})

describe("GameX ",function(){
	describe("Constructor",function(){
		it("should give an Object containing players of given number",function(done){
			var game = new GameX(2);
			assert.ok(game.player1);
			assert.ok(game.player2);
			done();
		});
	});
	describe("Constructor",function(){
		it("players will have an array for dice rolled",function(done){
			var game = new GameX(2);
			assert.ok(game.player1.diceRolled);
			assert.ok(game.player2.diceRolled);
			done();
		});
	});
	describe("Constructor",function(){
		it("players should have an array of 6 play coins",function(done){
			var game = new GameX(2);
			assert.equal(game.player1.coins.length,6);
			assert.equal(game.player2.coins.length,6);
			done();
		});
	});
	describe("Constructor",function(){
		it("players should have the path to travel along the board",function(done){
			var game = new GameX(2);
			assert.deepEqual(game.player1.path,paths[0]);
			assert.deepEqual(game.player2.path,paths[1]);
			done();
		});
	});
});
