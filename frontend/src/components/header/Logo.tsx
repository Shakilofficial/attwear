import { Link } from "react-router-dom";
import logoImg from "../../assets/attwear.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={logoImg}
        alt="Attwear Logo"
        className="h-10 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;
