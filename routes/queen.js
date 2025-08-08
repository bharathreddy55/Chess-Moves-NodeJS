var checkValid = require('./instructions');
var queen = {

    getAvailablePositions : function(row,column,positions) {

        var posit = [];

        var rowwise = row;
		var columnwise = column;
		
		while(checkValid(--rowwise, column) && positions[rowwise][column] == 0) {
			
			//console.log(rowwise+1 + " " + String.fromCharCode((column+1)+96));
			posit.push(rowwise+1 + " " + String.fromCharCode((column+1)+96));
			
		}
		rowwise = row;
		while(checkValid(++rowwise, column) && positions[rowwise][column] == 0) {
			
			//console.log(rowwise+1 + " " + String.fromCharCode((column+1)+96));
			posit.push(rowwise+1 + " " + String.fromCharCode((column+1)+96));
			
		}
		
		
		while(checkValid(row, --columnwise) && positions[row][columnwise] == 0) {
			
			//console.log(row+1 + " " + String.fromCharCode((columnwise+1)+96));
			posit.push(row+1 + " " + String.fromCharCode((columnwise+1)+96));
		}
		columnwise = column;
		
		while(checkValid(row, ++columnwise) && positions[row][columnwise] == 0) {
			
			//console.log(row+1 + " " + String.fromCharCode((columnwise+1)+96));
			posit.push(row+1 + " " + String.fromCharCode((columnwise+1)+96));
        }
        rowwise = row;
        columnwise = column;

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

module.exports = queen;