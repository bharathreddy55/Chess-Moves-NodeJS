var checkValid = require('./instructions');
var bishop = {

    getAvailablePositions : function(row,column,positions) {

        var posit = [];

        var rowwise = row;
        var columnwise = column;

        while(checkValid(++rowwise, --columnwise) && positions[rowwise][columnwise] == 0) {
		
			//console.log(rowwise+1 + " " + String.fromCharCode((columnwise-1)+98));
			posit.push(rowwise+1 + " " + String.fromCharCode((columnwise-1)+98));
		}
		 rowwise = row;
		 columnwise = column;
		while(checkValid(++rowwise, ++columnwise) && positions[rowwise][columnwise] == 0) {
			
			//console.log(rowwise+1 + " " + String.fromCharCode((columnwise-1)+98));
			posit.push(rowwise+1 + " " + String.fromCharCode((columnwise-1)+98));
		}
		rowwise = row;
		 columnwise = column;
		while(checkValid(--rowwise, --columnwise) && positions[rowwise][columnwise] == 0) {
			
			//console.log(rowwise+1 + " " + String.fromCharCode((columnwise-1)+98));
			posit.push(rowwise+1 + " " + String.fromCharCode((columnwise-1)+98));
		}
		rowwise = row;
		 columnwise = column;
		while(checkValid(--rowwise, ++columnwise) && positions[rowwise][columnwise] == 0) {
			
			//console.log((rowwise+1 + " " + String.fromCharCode((columnwise-1)+98)));
			posit.push(rowwise+1 + " " + String.fromCharCode((columnwise-1)+98));
        }
        
        return posit;
    }
}

module.exports = bishop;