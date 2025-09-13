import { useState, useRef } from "react";

export default function App() {
  const userNameRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function onSubmit() {
    setIsSubmitted(true);
    setUserName(userNameRef.current.value);
    userNameRef.current.value = "";
  }


    return (
    <main className="bg-gray-100 min-h-screen flex justify-center items-center font-sans">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Hello {isSubmitted ? userName : "unknown user"}!
        </h1>

        <input
          ref={userNameRef}
          type="text"
          placeholder="Type something..."
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />

        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Click Me
        </button>
      </div>
    </main>
  );
}
