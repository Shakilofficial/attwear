import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-11/12 max-w-screen-xl mx-auto">
      <Header />
      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer Placeholder */}
    </div>
  );
};

export default MainLayout;
