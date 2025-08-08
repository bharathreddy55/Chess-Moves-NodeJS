var checkValid = require('./instructions');
var knight = {

    getAvailablePositions : function(row,column,positions) {

        var posit = [];

        var rowwise = row;
        var columnwise = column;
        var tcount = 2;

        while(tcount>0 && checkValid(rowwise, --columnwise)) {
			
			tcount--;
		}
		if(tcount == 0) {
//			rowwise = row;
			if (checkValid(rowwise - 1, columnwise) && positions[rowwise-1][columnwise] == 0) {
				//console.log(rowwise + " " + String.fromCharCode((columnwise-1)+98));
				posit.push(rowwise + " " + String.fromCharCode((columnwise-1)+98));
			}
			if (checkValid(rowwise + 1, columnwise) && positions[rowwise+1][columnwise] == 0) {
				//console.log(rowwise+2 + " " + String.fromCharCode((columnwise-1)+98));
				posit.push(rowwise+2 + " " + String.fromCharCode((columnwise-1)+98));
			}	
		}
		 tcount=2;
		 rowwise = row;
		 columnwise = column;
		while(tcount>0 && checkValid(rowwise, ++columnwise) ) {
			
			tcount--;
		}
		
		if(tcount == 0) {
//			columnwise = column;
			if (checkValid(rowwise - 1, columnwise) && positions[rowwise-1][columnwise] == 0) {
				//console.log(rowwise + " " + String.fromCharCode((columnwise-1)+98));
				posit.push(rowwise + " " + String.fromCharCode((columnwise-1)+98));
			}
			if (checkValid(rowwise + 1, columnwise) && positions[rowwise+1][columnwise] == 0) {
				//console.log(rowwise+2 + " " + String.fromCharCode((columnwise-1)+98));
				posit.push(rowwise+2 + " " + String.fromCharCode((columnwise-1)+98));
			}	
		}
		 tcount=2;
		 rowwise = row;
		 columnwise = column;
		 while(tcount>0 && checkValid(--rowwise, columnwise)) {
				
				tcount--;
			}
			
			if(tcount == 0) {
//				columnwise = column;
				if (checkValid(rowwise, columnwise-1) && positions[rowwise][columnwise-1] == 0) {
					//console.log(rowwise+1 + " " + String.fromCharCode((columnwise-2)+98));
					posit.push(rowwise+1 + " " + String.fromCharCode((columnwise-2)+98));
				}
				if (checkValid(rowwise, columnwise+1) && positions[rowwise][columnwise+1] == 0) {
					//console.log(rowwise+1 + " " + String.fromCharCode((columnwise)+98));
					posit.push(rowwise+1 + " " + String.fromCharCode((columnwise)+98));
				}	
			}
			 tcount=2;
			 rowwise = row;
			 columnwise = column;
			 while(tcount>0 && checkValid(++rowwise, columnwise)) {
					
					tcount--;
				}
				
				if(tcount == 0) {
//					columnwise = column;
					if (checkValid(rowwise, columnwise-1) && positions[rowwise][columnwise-1] == 0) {
						//console.log(rowwise+1 + " " + String.fromCharCode((columnwise-2)+98));
						posit.push(rowwise+1 + " " + String.fromCharCode((columnwise-2)+98));
					}
					if (checkValid(rowwise, columnwise+1) && positions[rowwise][columnwise+1] == 0) {
						//console.log(rowwise+1 + " " + String.fromCharCode((columnwise)+98));
						posit.push(rowwise+1 + " " + String.fromCharCode((columnwise)+98));
					}	
				}

                return posit;
    }
}

module.exports = knight;