import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import React from "react";

function App() {
  const [activePlayer, setActivePlayer] = React.useState("X");

  function handleSelectSqure() {
    setActivePlayer((currentactivePlayer) =>
      currentactivePlayer === "X" ? "0" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="0" isActive={activePlayer === "0"} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSqure}
          activePlayer={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
