import SectionHeader from "../SectionHeader";
import ProductCard from "./ProductCard";

const defaultProducts = [
  {
    name: "Men's Formal Shirt",
    description: "A classic white formal shirt, perfect for office wear.",
    price: "$25.00",
    stock: 10,
    image: "https://res.cloudinary.com/dcyupktj6/image/upload/v1731944390/uxgda7qet19c0zsy9hei.png",
  },
  {
    name: "Leather Wallet",
    description: "Premium leather wallet with multiple compartments.",
    price: "$35.00",
    stock: 5,
    image: "https://res.cloudinary.com/dcyupktj6/image/upload/v1727351447/samples/chair.png",
  },
  {
    name: "Running Shoes",
    description: "Comfortable and lightweight running shoes.",
    price: "$50.00",
    stock: 0,
    image: "https://res.cloudinary.com/dcyupktj6/image/upload/v1727351439/samples/ecommerce/shoes.png",
  },
  {
    name: "Polo T-Shirt",
    description: "Casual polo t-shirt for both mens and womans everyday use.",
    price: "$20.00",
    stock: 8,
    image: "https://res.cloudinary.com/dcyupktj6/image/upload/v1731944319/wh73cuvhcmoidi7k4dkz.png",
  },
];

export default function ProductGrid({ products = defaultProducts }) {
  return (
    <section className="px-6 py-10">
      {/* Section Title */}
      <SectionHeader
        title="Featured Products"
        subtitle="Explore our hand-picked selection of quality items."
        alignment="center"
      />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
