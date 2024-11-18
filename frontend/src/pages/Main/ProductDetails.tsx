import ProductCarousel from "@/components/product/ProductCarousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Assuming these are custom tabs components
import { Heart, Minus, Plus, Share2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const product = {
  title: "Raw Black T-Shirt Lineup",
  price: "75.00",
  description:
    "A stylish black t-shirt made from premium materials. This is a great shirt for the office. It's made from premium materials and is very durable.",
  reviews: 4,
  stock: true,
  images: [
    "https://res.cloudinary.com/dcyupktj6/image/upload/v1731944319/wh73cuvhcmoidi7k4dkz.png",
    "https://res.cloudinary.com/dcyupktj6/image/upload/v1727351439/samples/ecommerce/shoes.png",
    "https://res.cloudinary.com/dcyupktj6/image/upload/v1727351447/samples/chair.png",
    "https://res.cloudinary.com/dcyupktj6/image/upload/v1731944390/uxgda7qet19c0zsy9hei.png",
  ],
  colors: [
    { name: "Blue", value: "blue", class: "bg-blue-300" },
    { name: "Beige", value: "beige", class: "bg-[#FFE4C4]" },
    { name: "Red", value: "red", class: "bg-red-300" },
  ],
  sizes: ["S", "M", "L", "XL"],
  reviews: [
    {
      id: 1,
      author: "Emily Davis",
      initials: "ED",
      rating: 4,
      date: "3 WEEKS AGO",
      content:
        "This company always goes above and beyond to satisfy their customers.",
    },
    {
      id: 2,
      author: "Daniel Smith",
      initials: "DS",
      rating: 4,
      date: "2 MONTHS AGO",
      content: "I can't believe how affordable and high-quality this item is!",
    },
    {
      id: 3,
      author: "Benjamin Clark",
      initials: "BC",
      rating: 4,
      date: "22 APRIL",
      content: "These guys know their stuff, and it shows in their products.",
    },
  ],
};

const ProductDetails = () => {
  const { title, price, description, images, colors, sizes, reviews, stock } =
    product;
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm font-medium">
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              to="/"
              className="hover:text-rose-600 transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              to="/shop"
              className="hover:text-rose-600 transition duration-300 ease-in-out"
            >
              Shop
            </Link>
          </li>
          <li>/</li>
          <li>{title}</li>
        </ol>
      </nav>

      <div className="mt-10 md:grid md:grid-cols-2 gap-16">
        {/* Product Image Carousel */}
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
          <ProductCarousel images={images} />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <Button size="icon" variant="ghost" aria-label="Share Product">
              <Share2 className="h-5 w-5 text-gray-600 hover:text-rose-600" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center text-sm text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < reviews.length ? "fill-current" : "text-gray-300"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500">{reviews.length} reviews</span>
            <Badge variant="secondary" className="text-xs">
              {stock ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>

          <div className="text-3xl font-semibold text-rose-600">${price}</div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-lg mb-2">Available Colors</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    className={`w-10 h-10 rounded-full ${
                      color.class
                    } hover:ring-4 ${
                      selectedColor === color.value
                        ? "ring-rose-600"
                        : "ring-transparent"
                    }`}
                    onClick={() => setSelectedColor(color.value)}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-2">Select Size</h3>
              <div className="flex gap-3 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 text-sm font-medium border rounded-md transition duration-200 ease-in-out ${
                      selectedSize === size
                        ? "border-rose-600 bg-rose-50 text-rose-600"
                        : "border-gray-300 hover:border-rose-600"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-2">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-5 w-5" />
                </Button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-16 px-4 py-2 text-center text-lg font-semibold border rounded-md"
                />
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <Button className="flex-1 bg-rose-600 hover:bg-rose-700 text-white">
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1">
              <Heart className="h-5 w-5 text-gray-600 hover:text-rose-600" />
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs for Product Details and Reviews */}
      <div className="mt-12">
        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">Description</h3>
              <p>{description}</p>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-500 text-white flex items-center justify-center">
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-semibold">{review.author}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating ? "fill-current" : "text-gray-300"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mt-2">{review.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetails;
