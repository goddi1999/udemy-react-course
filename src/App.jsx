import { useState } from "react";
import Card from "./components/Card.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data-with-examples.js";

function App() {
  const [selectTopic, setSelectedTopic] = useState("");

  function handleSelectTab(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectTopic);
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card {...CORE_CONCEPTS[0]} />
          <Card {...CORE_CONCEPTS[1]} />
          <Card {...CORE_CONCEPTS[2]} />
        </div>
        <div className="py-12">
          <menu className="flex justify-center gap-6 py-2">
            <TabButton onSelect={() => handleSelectTab("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelectTab("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelectTab("props")}>
              Props
            </TabButton>
            <TabButton onSelect={() => handleSelectTab("state")}>
              State
            </TabButton>
          </menu>

          {!selectTopic ? (
            <p>select topic</p>
          ) : (
            <div className="py-6 bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800">
                {EXAMPLES[selectTopic]?.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {EXAMPLES[selectTopic]?.description}
              </p>
              <pre className="bg-gray-900 text-white p-4 rounded mt-4 overflow-auto">
                <code>{EXAMPLES[selectTopic]?.code}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
