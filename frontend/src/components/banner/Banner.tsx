import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";

const slides = [
  {
    title: "New Galaxy Smart Watch 5",
    description: "Explore some Trendy new collection of Smart Watch Here",
    imageUrl:
      "https://res.cloudinary.com/dcyupktj6/image/upload/v1731944319/wh73cuvhcmoidi7k4dkz.png",
    buttonText: "View Collection",
    link: "/collections/new-arrivals",
    gradient: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  },
  {
    title: "Exclusive Footwear Sale",
    description: "Step into comfort and style with our premium footwear.",
    imageUrl:
      "https://res.cloudinary.com/dcyupktj6/image/upload/v1727351439/samples/ecommerce/shoes.png",
    buttonText: "Shop Footwear",
    link: "/collections/footwear",
    gradient: "bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500",
  },
  {
    title: "Woden Materials Chair Collection",
    description: "Elevate your style with our premium chairs.",
    imageUrl:
      "https://res.cloudinary.com/dcyupktj6/image/upload/v1727351447/samples/chair.png",
    buttonText: "Show More",
    link: "/collections/gadgets",
    gradient: "bg-gradient-to-r from-green-400 via-teal-500 to-blue-500",
  },
  {
    title: "Trending Laptops Collection",
    description: "Stay ahead of the curve with our latest laptop collection.",
    imageUrl:
      "https://res.cloudinary.com/dcyupktj6/image/upload/v1731944390/uxgda7qet19c0zsy9hei.png",
    buttonText: "View Collections",
    link: "/collections/accessories",
    gradient: "bg-gradient-to-r from-orange-400 via-pink-500 to-red-500",
  },
];

export default function CarouselSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      className={`relative py-12 ${slides[currentSlide].gradient} transition-colors duration-500`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-gray-800 dark:text-gray-100">
                {slides[currentSlide].title}
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                {slides[currentSlide].description}
              </p>
              <Button
                variant="secondary"
                className="py-3 px-8 rounded-md shadow-lg"
              >
                <a href={slides[currentSlide].link}>
                  {slides[currentSlide].buttonText}
                </a>
              </Button>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src={slides[currentSlide].imageUrl}
                alt={slides[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bg-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-5 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-5 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-gray-800 dark:bg-gray-100"
                : "bg-gray-400 dark:bg-gray-700"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
