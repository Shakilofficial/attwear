import { Badge } from "../ui/badge";

export default function ProductCard({ product }) {
  return (
    <div className="group relative border rounded-lg shadow-lg p-2 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      {/* Product Image with Fixed Height and Hover Effect */}
      <div className="aspect-w-1 aspect-h-1 w-full h-72 overflow-hidden rounded-md relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 backdrop-blur-lg flex items-center justify-center flex-col px-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <h2 className="text-2xl font-semibold text-center capitalize">
            {product.name}
          </h2>
          <p className="text-sm text-center mt-3">{product.description}</p>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="mt-4 space-y-3 py-2">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-rose-500">{product.price}</p>
          <Badge
            className={`${
              product.stock > 0 ? "bg-green-600" : "bg-red-600"
            } text-white py-1 px-2 rounded-full text-xs`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
      </div>
    </div>
  );
}
