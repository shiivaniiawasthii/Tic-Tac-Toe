import React from "react";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard() {
const[gameBoard,setGameBoard]=React.useState(intialGameBoard)
const handleSelectSqure =(row,col)=>{
setGameBoard((prevGameBoard)=>{
  const newGameBoard =[...prevGameBoard.map(innerArray=>[...innerArray])]
  newGameBoard[row][col]='X'
  return newGameBoard

})
}



  return (
    <div id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSqure(rowIndex, colIndex)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </div>
  );
}

export default GameBoard;
