import React from "react";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard() {
  return (
    <div id="game-board">
      {intialGameBoard.map((row, rowIndex) => (
        <li>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={handleSelectSqure}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </div>
  );
}

export default GameBoard;
