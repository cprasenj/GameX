var throwDice = function(){
	var diceTable = document.getElementById("diceTable");
	sendAjaxGetRequest("/updateDiceTable",diceTable);
}

var sendAjaxGetRequest = function(request,elementToChange){
	var ajaxHttp = new XMLHttpRequest();
	ajaxHttp.onreadystatechange=function(){
		if (ajaxHttp.readyState==4 && ajaxHttp.status==200){
			var response = ajaxHttp.responseText;
			elementToChange.innerHTML=elementToChange.innerHTML+response;
		}
	}
	ajaxHttp.open("GET",request,true);
	ajaxHttp.send();
};