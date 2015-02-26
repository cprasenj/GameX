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

var setupSVG = function() {
  $("#board")
  .append(
    '<svg id="Bsvg" width="700" height="700" style="border: 5px solid green;"></svg>'
    );
  var count = 1;
  var board = $("#Bsvg");
  var innerHtml = "";
  for(var i = 1;i <8;i++) {
    for(var j = 1;j<8;j++) {
      innerHtml+= '<rect x="'+j*80+'" y="'+i*80+'" width="80" height="80"'+'id ="'+count+'"'+'coins = "{player1:[],player2:[]}"';
      ([4,9,13,22,25,28,37,41,46].indexOf(count)>=0) ? (innerHtml += 'isSafe = "true"') :
      (innerHtml += 'isSafe = "false"');
    innerHtml+='style="fill:blue;stroke:green;stroke-width:1;fill-opacity:0.1;stroke-opacity:0.9" />';
    j==7 && (innerHtml+='</br>');
    count++;
    }
  }
  $("#Bsvg").html(innerHtml);
}