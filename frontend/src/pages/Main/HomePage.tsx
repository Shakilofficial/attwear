import Banner from "@/components/banner/Banner";
import FeaturesList from "@/components/features/FeaturesList";
import CTA from "@/components/newsletter/CTA";
import Newsletter from "@/components/newsletter/NewsLater";
import ProductGrid from "@/components/product/ProductGrid";
import ProductsView from "@/components/product/ProductsView";

const HomePage = () => {
  return (
    <div className="space-y-8">
      <Banner />
      <FeaturesList />
      <ProductGrid />
      <CTA />
      <ProductsView />
      <Newsletter />
      <h1>This is Home</h1>
    </div>
  );
};

export default HomePage;
