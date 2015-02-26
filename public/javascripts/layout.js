// paths = require("../gameModule/path.js");
// Board = {
//   cells: [],
//   paths: {
//     player1: [4,3,2,.........18,25],
//     player2: [22,29,.........24,25],
//     player3: [46,47,.........32,25],
//     player4: [28,21,.........26,25]
//   },
// };

// var createCells = function() {
//   var i;
//   for(i=1;i<=49;i++) {

//   }
// }

var setupSVG = function() {
  $("#board")
  .append(
    '<svg id="Bsvg" width="700" height="700" style="border: 5px solid green;"></svg>'
    );
  var board = $("#Bsvg");
  var innerHtml = "";
  for(var i = 0;i <8;i++) {
    for(var j = 0;j<8;j++) {
      innerHtml+= '<rect x="'+j*87.3+'" y="'+i*87.3+'" width="87.3" height="87.3"'+
    'style="fill:blue;stroke:green;stroke-width:1;fill-opacity:0.1;stroke-opacity:0.9" />';
    j==7 && (innerHtml+='</br>');
    }
  }
  $("#Bsvg").html(innerHtml);
}