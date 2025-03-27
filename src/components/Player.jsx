import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    {
      isEditing && onChangeName(playerName, symbol);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setIsEditing(false);
      onChangeName(playerName, symbol);
    }
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button type="submit" onClick={handleEditClick}>
        {isEditing ? "ذخیره" : "نام"}
      </button>
    </li>
  );
}
