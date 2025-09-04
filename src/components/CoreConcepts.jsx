import { CORE_CONCEPTS } from "../data-with-examples.js";
import Card from "./Card.jsx";

export default function CoreConcept() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto py-4">
      {CORE_CONCEPTS.map((item) => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
