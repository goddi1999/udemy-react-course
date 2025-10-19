import { CartContext } from "./store/shopping-cart-context";
import Card from "./components/Card";

export default function App() {
  return (
    <CartContext.Provider>
      <main className="bg-gray-100 min-h-screen flex justify-center items-center font-sans">
        <Card />
      </main>
    </CartContext.Provider>
  );
}
