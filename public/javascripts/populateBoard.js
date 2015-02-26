var drawCoinInterface = function(cellId, coin, whereToDraw){
	var svgCell = $('#'+cellId);
	var x = findX(cellId);
	var y = findY(cellId);
	var drawCoin(x,y,coin);
};
var drawCoin = function(x,y,coin,whereToDraw){
	// var svgBoard = $('#svgBoard');
	// var coin = ""
};

var board = new Board();

board.drawCells(players,drawCoinInterface);
