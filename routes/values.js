var allPositions = new Array(8);

for (var i =0; i<8 ; i++){
    allPositions[i] = new Array(8);
  }
  
  for (var i =0; i<8 ; i++){
    for(var j=0;j<8;j++){
    allPositions[i][j] = 0;
  }
  }

  module.exports = allPositions