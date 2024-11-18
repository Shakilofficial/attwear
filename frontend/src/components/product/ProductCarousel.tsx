import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const ProductCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative aspect-square">
      <Card className="w-full h-full">
        <CardContent className="p-0 h-full">
          <img
            src={images[currentSlide]}
            alt="Product Image"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </CardContent>
      </Card>
      <ChevronLeft
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-[2rem] cursor-pointer"
        onClick={prevSlide}
      />
      <ChevronRight
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-[2rem] cursor-pointer"
        onClick={nextSlide}
      />
    </div>
  );
};

export default ProductCarousel;
