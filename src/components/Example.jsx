import { useState } from "react";
import { EXAMPLES } from "../data-with-examples.js";
import TabButton from "./TabButton.jsx";

export default function Examples() {
  const [selectTopic, setSelectedTopic] = useState("");

  function handleSelectTab(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectTopic);
  }

  return (
    <div className="py-12">
      <menu className="flex justify-center gap-6 py-2">
        <TabButton onSelect={() => handleSelectTab("jsx")}>JSX</TabButton>
        <TabButton onSelect={() => handleSelectTab("components")}>
          Components
        </TabButton>
        <TabButton onSelect={() => handleSelectTab("props")}>Props</TabButton>
        <TabButton onSelect={() => handleSelectTab("state")}>State</TabButton>
      </menu>

      {!selectTopic ? (
        <p className="text-center text-gray-500 py-12 text-2xl italic">
          No topic selected
        </p>
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
  );
}
