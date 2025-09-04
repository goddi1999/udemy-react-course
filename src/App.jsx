import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data-with-examples.js";
import CoreConcept from "./components/CoreConcepts.jsx";
import Examples from "./components/Example.jsx";
export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <CoreConcept />
      <div className="container mx-auto p-6">
        <Examples />
      </div>
    </div>
  );
}
