import { useState } from "react";
import TabNavigation from "./TabNavigation";
import ProductCard from "./ProductCard";

// Sample Product Data
const defaultProducts = [
  {
    name: "Men's Formal Shirt",
    description: "A classic white formal shirt, perfect for office wear.",
    price: "$25.00",
    stock: 10,
    image:
      "https://res.cloudinary.com/dcyupktj6/image/upload/v1731944390/uxgda7qet19c0zsy9hei.png",
    featured: true, // Added featured property for filtering
    tags: ["Shirt", "Men", "Formal"],
  },
  {
    name: "Leather Wallet",
    description: "Premium leather wallet with multiple compartments.",
    price: "$35.00",
    stock: 5,
    image:
      "https://res.cloudinary.com/dcyupktj6/image/upload/v1727351447/samples/chair.png",
    featured: false,
    tags: ["Accessories", "Wallet"],
  },
  {
    name: "Running Shoes",
    description: "Comfortable and lightweight running shoes.",
    price: "$50.00",
    stock: 0,
    image:
      "https://res.cloudinary.com/dcyupktj6/image/upload/v1727351439/samples/ecommerce/shoes.png",
    featured: false,
    tags: ["Shoes", "Running"],
  },
  {
    name: "Polo T-Shirt",
    description: "Casual polo t-shirt for both mens and womans everyday use.",
    price: "$20.00",
    stock: 8,
    image:
      "https://res.cloudinary.com/dcyupktj6/image/upload/v1731944319/wh73cuvhcmoidi7k4dkz.png",
    featured: true,
    tags: ["T-Shirt", "Men", "Casual"],
  },
];

const ProductsView = () => {
  const [activeTab, setActiveTab] = useState(1); // 1: Featured, 2: Latest
  const [products, setProducts] = useState(defaultProducts); // Setting up the products array

  // Filter products based on activeTab
  const filteredProducts =
    activeTab === 1 ? products.filter((product) => product.featured) : products;

  return (
    <div className="p-8">
      <TabNavigation setTab={setActiveTab} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsView;
