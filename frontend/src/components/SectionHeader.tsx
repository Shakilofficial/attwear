type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
};

export default function SectionHeader({
  title,
  subtitle,
  alignment = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`w-full mb-8 ${
        alignment === "left"
          ? "text-left"
          : alignment === "right"
          ? "text-right"
          : "text-center"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-300 via-rose-500 to-purple-300 text-transparent bg-clip-text">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
          {subtitle}
        </p>
      )}

      {/* Decorative Line */}
      <div
        className={`mt-4 mx-auto ${
          alignment === "center" ? "block" : "hidden"
        } w-16 h-1 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full`}
      ></div>
    </div>
  );
}
