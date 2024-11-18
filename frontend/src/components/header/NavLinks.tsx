import { Link } from "react-router-dom";

export default function NavLinks({ isMobile }: { isMobile?: boolean }) {
  return (
    <nav
      className={`${
        isMobile
          ? "flex flex-col space-y-3 mt-4"
          : "flex items-center space-x-4"
      }`}
    >
      <Link
        to="/"
        className="text-sm font-medium hover:text-rose-600 transition-colors"
      >
        HOME
      </Link>
      <Link
        to="/categories"
        className="text-sm font-medium hover:text-rose-600 transition-colors"
      >
        CATEGORIES
      </Link>
      <Link
        to="/about"
        className="text-sm font-medium hover:text-rose-600 transition-colors"
      >
        ABOUT
      </Link>
      <Link
        to="/contact"
        className="text-sm font-medium hover:text-rose-600 transition-colors"
      >
        CONTACT
      </Link>
    </nav>
  );
}
