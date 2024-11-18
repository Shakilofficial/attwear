import React, { useRef, useState } from "react";
import { CreditCard, Package, Shield } from "lucide-react";

type FeatureCardProps = {
  icon: "Package" | "Shield" | "CreditCard";
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Determine the icon component dynamically
  const IconComponent = icon === "Package" ? Package : icon === "Shield" ? Shield : CreditCard;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={cardRef}
      className="relative w-full border border-gray-200 dark:border-gray-700 rounded-lg p-6 overflow-hidden cursor-pointer transition-shadow hover:shadow-lg"
    >
      {/* Radial Gradient Hover Effect */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none blur-[50px]"
          style={{
            background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, #DB06F9, transparent)`,
          }}
        />
      )}

      {/* Icon */}
      <div className="mb-4">
        <IconComponent className="h-10 w-10 text-rose-600 dark:text-rose-400" />
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    </div>
  );
}
