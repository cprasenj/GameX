
var throwDice = function(){
	$.ajax({url:"/updateDiceTable"}).done(function(data){
		data = JSON.parse(data);
		var diceTable = $("#diceTable");
		diceTableHTML = diceTable.html()+data.element; 
		diceTable.html(diceTableHTML);
		onFinish(data.isFinished);
	});
}
var onFinish= function (isFinish){
	if(isFinish){
		$("#TD").attr('disabled','true');
	}
}


var onPageLoad =function(){
	$("#TD").click(throwDice);

}


$(onPageLoad);