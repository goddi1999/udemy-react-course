export default function Card() {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg bg-white rounded-2xl">
      <img
        className="w-[350px] h-[250px] object-cover"
        src="https://github.com/shadcn.png"
        alt="Product"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Product Name</div>
        <p className="text-gray-700 text-base">
          This is a product description.
        </p>
        <p className="text-gray-900 font-semibold">Price: $99.99</p>
        <p className="text-gray-500 text-sm">ID: 12345</p>
      </div>
    </div>
  );
}
