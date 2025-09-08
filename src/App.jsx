import Player from "./components/Player";
import GameBoard from "./components/Gameboard";
export default function App() {
  return (
    <main className="bg-gray-100 min-h-screen flex justify-center items-center font-sans">
      <div className="w-[1020px] rounded-2xl mx-auto p-6 border bg-black text-white flex flex-col items-center">
        <ol className="w-full grid grid-cols-2 gap-4 text-center text-2xl font-bold mb-6">
          <Player initialName="Player 2" symbol="O" />
          <Player initialName="Player 1" symbol="X" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}
