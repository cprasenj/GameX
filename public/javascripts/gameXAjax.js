var CHECKBOX = ['<tr><td><input',
				'id="n?id"',
				'type="checkbox"',
				'name="diceVlaue"',
				'value=?value>',
				'?newNumber',
				'</input>'].join(' ');
var getCheckBox = function(newNumber){
	var newNumberId = $('#diceTable').children().length;
	return CHECKBOX.replace("?id",newNumberId)
					.replace("?value",newNumber)
					.replace("?newNumber",newNumber);
};
var moveCoin = function (cId) {
	console.log($('#'+cId));
	console.log($('input:checked'));
};
var throwDice = function(){
	$.ajax({url:"/updateDiceTable"}).done(function(diceDataAfterRolled){
		diceDataAfterRolled = JSON.parse(diceDataAfterRolled);
		var diceTable = $("#diceTable");
		var newCheckBox = getCheckBox(diceDataAfterRolled.newNumber);
		diceTableHTML = diceTable.html()+newCheckBox;
		diceTable.html(diceTableHTML);
		onFinish(diceDataAfterRolled.isFinished);
	});
};
var onFinish= function (isFinish){
	if(isFinish){
		$("#TD").attr('disabled','true');
	}
};
var onPageLoad =function(){
	$("#TD").click(throwDice);
};