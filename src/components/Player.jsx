import React from "react";
import { useState } from "react";

function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let EditplayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    EditplayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  console.log(isActive);
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">{EditplayerName}</span>
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
