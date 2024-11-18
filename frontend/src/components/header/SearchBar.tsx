import { Input } from "../ui/input";
import { Search } from "lucide-react";

export default function SearchBar({ isMobile }: { isMobile?: boolean }) {
  return (
    <div
      className={`flex items-center ${
        isMobile
          ? "w-full m-4"
          : "hidden md:flex relative md:w-[80px] lg:w-[200px] sm:w-[140px]"
      }`}
    >
      <div className="relative w-full">
        <Search
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground`}
        />
        <Input
          className={`pl-8 ${isMobile ? "w-full" : ""} h-8`}
          placeholder="Search products"
          type="search"
        />
      </div>
    </div>
  );
}
