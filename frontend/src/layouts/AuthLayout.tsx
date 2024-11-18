import Logo from "@/components/header/Logo";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full flex items-center justify-center mt-12">
      {/* Container to hold logo and content */}
      <div className="w-full max-w-md rounded-lg shadow-sm p-6">
        {/* Logo */}
        <div className="flex justify-center">
          <Logo />
        </div>

        {/* Outlet for Login/Register pages */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
