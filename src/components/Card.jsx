export default function CoreConcept({ image, title, description }) {
  return (
    <div className=" bg-white border-gray-500 w-[300px] shadow-md p-4 rounded-lg">
      <img src={image} className="mb-4 w-8 h-8" alt="Vite logo" />
      <p className="font-bold mb-2">{title}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
