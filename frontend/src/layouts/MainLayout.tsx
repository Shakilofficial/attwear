import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import NotificationBar from "@/components/header/NotificationBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-11/12 max-w-screen-xl mx-auto">
      <NotificationBar />
      <Header />
      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
