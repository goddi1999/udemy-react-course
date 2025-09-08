const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {initialGameBoard.flat().map((playerSymbol, index) => (
        <button
          key={index}
          className="border border-gray-300 flex items-center justify-center h-16 w-16"
        >
          {playerSymbol}
        </button>
      ))}
    </div>
  );
}
