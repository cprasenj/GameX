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
	})
});

