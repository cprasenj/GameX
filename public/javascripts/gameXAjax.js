var CHECKBOX = ['<tr><td><input',
				'id="n?id"',
				'type="checkbox"',
				'name="diceVlaue"',
				'value=?value>',
				'?newNumber',
				'</input>'].join(' ');

var throwDice = function(){
	var diceTable = document.getElementById("diceTable");
	sendAjaxGetRequest("/updateDiceTable",diceTable);
};
var updateTheDiceTable = function(newNumber){
	var newNumberId = $('#diceTable').children().length;
	return CHECKBOX.replace("?id",newNumberId)
					.replace("?value",newNumber)
					.replace("?newNumber",newNumber);
};
var sendAjaxGetRequest = function(request,elementToChange){
	var ajaxHttp = new XMLHttpRequest();
	ajaxHttp.onreadystatechange=function(){
		if (ajaxHttp.readyState==4 && ajaxHttp.status==200)
			elementToChange.innerHTML +=updateTheDiceTable(ajaxHttp.responseText);
	}
	ajaxHttp.open("GET",request,true);
	ajaxHttp.send();
};
var moveCoin = function (cId) {
	console.log($('#'+cId));
	console.log($('input:checked'));
};