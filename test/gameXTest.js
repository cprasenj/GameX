var assert = require("chai").assert;
var gameUtil = require("../gameModule/game.js").gameUtil;
var GameX = require("../gameModule/game.js").GameX;

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


// describe("#thorowUntilFinish",function(){
// 	it("It should give truthy value for ",function() {
// 		assert.equal(2,2);
// 	})
// })

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
});

