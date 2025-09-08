import React from "react";
import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function toggleEdit() {
    setIsEditing((editing) => !editing);
  }

  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span>{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        required
        className="border px-2"
        onChange={handleNameChange}
        value={playerName}
      />
    );
  }

  return (
    <span className="rounded-lg p-2 w-full flex  items-center justify-between ">
      <div className="flex items-center gap-3">
        <span>{editablePlayerName}</span>
        <span className="text-4xl font-bold">{symbol}</span>
      </div>
      <button
        onClick={toggleEdit}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </span>
  );
}
