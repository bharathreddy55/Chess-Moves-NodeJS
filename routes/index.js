var express = require('express');
var router = express.Router();
var pawn = require('./pawn');
var rook = require('./rook');
var knight = require('./knight');
var bishop = require('./bishop');
var king = require('./king');
var queen = require('./queen');
var allPositions = require('./values');

var selectedposition = []



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chess' });
});

router.get('/positions',function(req,res,next){

     var piece = req.query.piece.toUpperCase();
     var position = req.query.position;

      var check = true;
     if (check && !(piece == 'PAWN' || piece == 'KNIGHT'|| piece == 'QUEEN'
     ||piece == 'KING' || piece == 'ROOK' || piece == 'BISHOP')) {

      res.render('index', { title: 'Chess' , message:'******* Please enter a valid Chess Piece *******'});
      check = false;
     }
     else if (check && position.length !=2){

      res.render('index', { title: 'Chess' , message:'******* Please enter a valid Position. Check the instructions *******'});
      check = false;
     }
     var row = parseInt(position.substring(0,1));
     var column = position.charAt(1);
     var columnValue = column.charCodeAt(0) - 96;

      if (check && row == NaN){

      res.render('index', { title: 'Chess' , message:'******* Please enter a valid Position. Check the instructions *******'});
      check = false;
     }
     else if (check && !((row >=1 && row <=8) && (column == 'a' || column == 'b' || column == 'c' || column == 'd' || column == 'e' || column == 'f' || column == 'g' ||column == 'h' ))) {

      res.render('index', { title: 'Chess' , message:'******* Please enter a valid Position. Check the instructions *******'});
      check = false;
     }
     else if (check && allPositions[row-1][columnValue-1] == 1) {

      res.render('index', { title: 'Chess' , message:'******* This position is filled. Please select a different position *******'});
      check = false;
     }

     else if (check) {
       
        switch(piece){
          case "PAWN" :
            selectedposition = pawn.getAvailablePositions(row-1, columnValue-1,allPositions);
            if (selectedposition.length == 0) {
       
              res.render('index', { title: 'Chess', message: 'Pawn is blocked in given ' + position +' position , it cannot move forward'}); 
            }
            else {
            res.render('index', { title: 'Chess',groupedData:selectedposition});
            }
	     break;
			
           case "ROOK" :
            selectedposition = rook.getAvailablePositions(row-1, columnValue-1,allPositions);
            if (selectedposition.length == 0) {
       
              res.render('index', { title: 'Chess', message: 'Rook is blocked in given ' + position +' position , it cannot move forward'}); 
            }
            else{
            res.render('index', { title: 'Chess',groupedData:selectedposition});
            }
	     break;
			
	    case "KNIGHT" :
            selectedposition = knight.getAvailablePositions(row-1, columnValue-1,allPositions);
            if (selectedposition.length == 0) {
       
              res.render('index', { title: 'Chess', message: 'Knight is blocked in given ' + position +' position , it cannot move forward'}); 
            }
            else{
            res.render('index', { title: 'Chess',groupedData:selectedposition});
            }
	     break;
			
            case "BISHOP" :
            selectedposition = bishop.getAvailablePositions(row-1, columnValue-1,allPositions);
            if (selectedposition.length == 0) {
       
              res.render('index', { title: 'Chess', message: 'Bishop is blocked in given ' + position +' position , it cannot move forward'}); 
            }
            else{
              res.render('index', { title: 'Chess',groupedData:selectedposition});
              }
	      break;
			
	    case "KING" :
            selectedposition = king.getAvailablePositions(row-1, columnValue-1,allPositions);
            if (selectedposition.length == 0) {
       
              res.render('index', { title: 'Chess', message: 'King is blocked in given ' + position +' position , it cannot move forward'}); 
            }
            else{
              res.render('index', { title: 'Chess',groupedData:selectedposition});
              }
	      break;
			
	     case "QUEEN" :
            selectedposition = queen.getAvailablePositions(row-1, columnValue-1,allPositions);
            if (selectedposition.length == 0) {
       
              res.render('index', { title: 'Chess', message: 'Queen is blocked in given ' + position +' position , it cannot move forward'}); 
            }
            else{
              res.render('index', { title: 'Chess',groupedData:selectedposition});
              }
              break;
        }
     }
    

});

router.get('/move', function(req,res){

     var position = req.query.position;
     var row = parseInt(position.substring(0,1));
     var column = position.charAt(1);
     if (position.length != 2 || !(selectedposition.includes(row + " " + column))){

      res.render('index', { title: 'Chess',groupedData:selectedposition , selmessage: 'Enter correct position in correct format. Check game instructions for correct format'});
         
     }
     else {
     var columnValue = column.charCodeAt(0) - 96;
     allPositions[row-1][columnValue-1] = 1;
     var beforepositions = allPositions;
     res.redirect('/');
     allPositions = beforepositions;
     }
})

module.exports = router;
