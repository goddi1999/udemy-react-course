import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data-with-examples.js";
import CoreConcept from "./components/CoreConcepts.jsx";
import Examples from "./components/Example.jsx";
import Section from "./components/Section.jsx";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Section title="Core concpets">
        <CoreConcept />
      </Section>
      <Section title="Examples">
        <Examples />
      </Section>
    </div>
  );
}
