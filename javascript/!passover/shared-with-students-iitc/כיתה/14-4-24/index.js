/*
********** data structure ********** 

board : two dimention array

********** operations \ algorithms ********** 

- get input from user 
    - board length e.g. 3 (3x3) --> validation . (getBoardLengthFromUser)
    - row index , col index --> validation       (getRowIndex , getColIndex)

- create board (createBoard)

- draw board (drawBoard)

- is game over (isGameOver)
    - is win (isWin): is win by rows (isWinByRows), is win by cols (isWinByCols) , is win by diagonals (isWinByDiagonals)
    - is draw (isDraw)
    - message win \ draw

- start game (startGame)

code a function and check it 

********** flow 
 
    -1. get board length from user
    -2. create board
    -3. draw board
    -4. get row \ col index from user
    -5. draw board
    -5. check is win
    -7. if yes -> message result and game end . if not got to 4

 */