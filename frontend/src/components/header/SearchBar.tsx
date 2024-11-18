import { Input } from "../ui/input";
import { Search } from "lucide-react";

export default function SearchBar({ isMobile }: { isMobile?: boolean }) {
  return (
    <div
      className={`${
        isMobile
          ? "flex w-full m-4"
          : "hidden md:flex relative md:w-[80px] lg:w-[200px] sm:w-[140px]"
      }`}
    >
      <Input
        className={`pl-8 ${isMobile ? "w-full" : ""}`}
        placeholder="Search products"
        type="search"
      />
      <Search
        className={`absolute left-2 top-2.5 h-3 w-4 text-muted-foreground ${
          isMobile ? "hidden" : "block"
        }`}
      />
    </div>
  );
}
