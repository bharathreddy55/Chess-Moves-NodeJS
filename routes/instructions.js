
var checkValid = function(row,column){

    if ((row >=0 && row <=7) && (column >=0 && column <=7)) {
        return true;
    }
    
    return false;

} 

module.exports = checkValid;