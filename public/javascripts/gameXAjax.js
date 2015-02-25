var CHECKBOX = ['<tr><td><input',
				'id="n?id"',
				'class="diceNumbers"',
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
var changeTurn = function(isDone){
	console.log("turn changed "+isDone);

	if(isDone){
		$("#TD").attr('disabled','false');
	}
};

var moveCoin = function (cId) {
	var cId = Number(cId[1])-1;
	var checkboxes = $('.diceNumbers');
	var checkedBoxes = Array.prototype.filter.call(
		checkboxes,
		function(checkbox){
			return checkbox.checked;
		}
	);
	var diceCounts = checkedBoxes.map(function(checkbox){
		return checkbox.value;
	});

	$.ajax({url:"/moveCoin?cId="+cId+"&dices="+diceCounts.toString()})
	 .done(function(MoveCoinResponse){
	 	var Res = JSON.parse(MoveCoinResponse);
	 	var coin = Res.player.coins[Res.cId]
	 	var cellId = Res.player.path[+coin.position - 1];
	 	var cell = $("#"+cellId);
	 	cell.append("<div>B</div>");
	 	removeCheckBox();
	 	changeTurn(Res.isDone);
	 });
	 var removeCheckBox = function(){
	 	console.log("ima here");
	 	var diceTable = $('#diceTable');
	 	checkedBoxes.forEach(function(box){
	 		$("#"+box.id).parent().parent().remove();
	 	});
	 }
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