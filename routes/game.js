coin1 = {
	player: "player1",
	position: 6,
};
Players = {
	player1: {
		coins: {
			coin1: {}, coin2: {}, coin3: {}, coin4: {}, coin5: {}, coin6: {}
		},
		isAssassin: true,
		DiceThrown: [],
		hasToRollTheDiceAgain: function(){},
		rollTheDice: function(callback){},
		areYouDone: function(){}
	},
	player2: {
		coins: {
			coin1: {}, coin2: {}, coin3: {}, coin4: {}, coin5: {}, coin6: {}
		},
		isAssassin: false,
		DiceThrown: [6,12,1,3],
		hasToRollTheDiceAgain: function(){},
		rollTheDice: function(callback){},
		areYouDone: function(){}
	},
	player3: {
		coins: {
			coin1: {}, coin2: {}, coin3: {}, coin4: {}, coin5: {}, coin6: {}
		},
		isAssassin: true,
		DiceThrown: [],
		hasToRollTheDiceAgain: function(){},
		rollTheDice: function(callback){},
		areYouDone: function(){}
	},
	player4: {
		coins: {
			coin1: {}, coin2: {}, coin3: {}, coin4: {}, coin5: {}, coin6: {}
		},
		isAssassin: false,
		DiceThrown: [],
		hasToRollTheDiceAgain: function(){},
		rollTheDice: function(callback){},
		areYouDone: function(){}
	}
};
cell = {
	coinsDetails: [
		coin1sDetail: {
			player: "player1",
			whichCoin: "coin1",
			drawCoin: function(..,drawCoinInterface)
		},
		coin2sDetail: {
			player: "player2",
			whichCoin: "coin5",
			drawCoin: function(..,drawCoinInterface)
		},
		coin3sDetail: {
			player: "player1",
			whichCoin: "coin6",
			drawCoin: function(..,drawCoinInterface)
		}
	],
	id: 20, //(1 to 49)
	drawCell: function(..,drawCellInterface,drawCoinInterface)
};
Board = {
	cells: [
		{},
		{},
		{},....49 cell objects
	],
	paths: {
		player1: [4,3,2,.........18,25],
		player2: [22,29,.........24,25],
		player3: [46,47,.........32,25],
		player4: [28,21,.........26,25]
	},
	drawCells: function(..,drawCellInterface,drawCoinInterface)
};
Game = {
	safeZones: [4,9,13,22,25,28,37,41,46],
	who_sTurn: "player1",
	players: {....},
	playerList: {"player1","player2","player3","player4"},
	board: {.....},
	moveTo: function(...,callAfterMoved){},
	changePlayer: function(){},
	getAtHome: function(){},
	getOnBoard: function(){}
};
exports.Game = Game;
