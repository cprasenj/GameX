exports.Game = {
	who_sTurn : "player1",
	player1 : {
		diceRolled: [5,5,1,2],
		coins: [
			{position:0}, {position:0}, {position:0},
			{position:0}, {position:0}, {position:0}
		]
	},
	player2 : {
		diceRolled: [1,5,6,2],
		coins: [
			{position:0}, {position:0}, {position:0},
			{position:0}, {position:0}, {position:0}
		]		
	},
	safeZones : [4,9,13,22,25,28,37,41,46]
};