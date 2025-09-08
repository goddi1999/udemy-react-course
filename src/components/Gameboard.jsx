import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard.map((row) => [...row])];
      updatedGameBoard[rowIndex][colIndex] = "X";

      return updatedGameBoard;
    });
  };
  return (
    <div className="grid grid-cols-3 gap-2">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex} className="list-none">
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <button
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleSelectSquare(rowIndex, colIndex)}
                className="border border-gray-300 flex items-center justify-center h-16 w-16"
              >
                {playerSymbol}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </div>
  );
}
