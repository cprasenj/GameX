var game = {
	who_sTurn:"player1",
	player1 : {
		"diceRolled":[], 
		coins:[
		{ position : 0, owner : "player1" },
		{ position : 0, owner : "player1" },
		{ position : 0, owner : "player1" },
		{ position : 0, owner : "player1" },
		{ position : 0, owner : "player1" },
		{ position : 0, owner : "player1" },
		],
		path:[]
	},
	safeZones : [4,9,13,22,25,28,37,41,46],
	player2 : {
		"diceRolled":[1,5,5,2], 
		coins:[
		{ position : 10, owner : "player2" },
		{ position : 12, owner : "player2" },
		{ position : 16, owner : "player2" },
		{ position : 0, owner : "player2" },
		{ position : 0, owner : "player2" },
		{ position : 0, owner : "player2" },
		],
		path:[]
	}


};

exports.Game = game;