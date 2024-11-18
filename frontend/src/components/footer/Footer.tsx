import { Link } from "react-router-dom";
import faceBookLogo from "../../assets/facebook.png";
import instagramLogo from "../../assets/instagram.png";
import MasterCard from "../../assets/mastercard.svg";
import stripe from "../../assets/stripe.svg";
import Visa from "../../assets/visa.svg";
import youtubeLogo from "../../assets/youtube.png";
import Logo from "../header/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t mt-auto py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="text-sm mt-4">
              Attwear is a fashion brand offering trendy, affordable clothing.
              Our mission is to make fashion accessible to everyone. Explore our
              range of dresses, tops, pants, and accessories.
            </p>
            <div className="flex gap-4 mt-6 justify-left items-center">
              <Link to="#" className="hover:opacity-80 transition-opacity">
                <img src={faceBookLogo} alt="Facebook" className="w-6" />
              </Link>
              <Link to="#" className="hover:opacity-80 transition-opacity">
                <img src={instagramLogo} alt="Instagram" className="w-6" />
              </Link>
              <Link to="#" className="hover:opacity-80 transition-opacity">
                <img src={youtubeLogo} alt="YouTube" className="w-6" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-xs hover:text-rose-600 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-xs hover:text-rose-600 transition-colors"
                >
                  Terms of use
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-xs hover:text-rose-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-xs hover:text-rose-600 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-xs hover:text-rose-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-xs hover:text-rose-600 transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">ACCEPTED PAYMENTS</h3>
            <div className="flex gap-2">
              <div className="w-12 h-8 border rounded flex justify-center items-center">
                <img src={Visa} alt="Visa" className="w-[36px] object-cover" />
              </div>
              <div className="w-12 h-8 border rounded flex justify-center items-center">
                <img
                  src={MasterCard}
                  alt="MasterCard"
                  className="w-[36px] object-cover"
                />
              </div>
              <div className="w-12 h-8 border rounded flex justify-center items-center">
                <img
                  src={stripe}
                  alt="Stripe"
                  className="w-[36px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-4 text-center text-xs">
          <p>&copy; {currentYear} Attwear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
