# Chess-Moves-NodeJS

Chess Moves is a NodeJS application using which we can find the available positions for a given chess piece from given position. 

## Requirement ##
* [Expressjs](http://expressjs.com/zh-tw/) - API Server
* [Nodejs](https://nodejs.org/en/) - Backend Framework
* [NPM](https://www.npmjs.com/) - Package Management
* [ExpressGenerator](https://www.npmjs.com/package/express-generator) - Application Template Generator
* [Jade](http://jade-lang.com) - Node Template Engine

There are 6 Chess Pieces. 
>1. Rook  
>2. Knight. 
>3. Bishop. 
>4. Queen. 
>5. King
>6. Pawn

First User can enter a valid chess piece name and valid position, on submit all the positions to which the chess piece can be moved will be shown in drop down. From the available positions user can select a position and the piece will be moved to the selected position. Then the selected position will not be available for other chess pieces.

If incorrect piece name or incorrect position is provided , then error messages will be shown to the user. User can see the game instructions if he is not sure of format of the input.

### Assumed Chess Board

```
//    '   +------------------------+
//      1 | r  n  b  q  k  b  n  r |
//      2 | p  p  p  p  .  p  p  p |
//      3 | .  .  .  .  .  .  .  . |
//      4 | .  .  .  .  p  .  .  . |
//      5 | .  .  .  .  P  P  .  . |
//      6 | .  .  .  .  .  .  .  . |
//      7 | P  P  P  P  .  .  P  P |
//      8 | R  N  B  Q  K  B  N  R |
//        +------------------------+
//          a  b  c  d  e  f  g  h'
```

### Steps to Run this Application:

>1. npm install (to install all packages)  
>2. npm start. (to start the application ) 

This application runs on port 3000 and can be seen by just going to http://localhost:3000/




