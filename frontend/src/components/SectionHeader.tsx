type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right"; // Optional alignment prop
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
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100">
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
