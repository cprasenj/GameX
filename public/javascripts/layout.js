var setupSVG = function(){
  var unit=80;
  var LINE = '<line x1="X1" y1="Y1" x2="X2" y2="Y2" stroke="black" stroke-width="2" />'
  $("#board")
  .append(
    '<svg id="Bsvg" width="700" height="700" style="border: 5px solid red;"></svg>'
    );
  var board = $("#Bsvg");
  var innerHtml = "";
  for(var i=1; i<=8; i++){
    var line = LINE
      .replace("X1",""+unit*1)
      .replace("X2",""+unit*8)
      .replace("Y1",""+(i*unit))
      .replace("Y2",""+(i*unit));
    innerHtml += line;
    var line = LINE
      .replace("X1",""+(i*unit))
      .replace("X2",""+(i*unit))
      .replace("Y1",""+unit*1)
      .replace("Y2",""+unit*8);
    innerHtml += line;
  }
  $("#Bsvg").html(innerHtml);
}

// has to be done
//     if(cell.isSafe) drawSafe(cell.id);
