import Banner from "@/components/banner/Banner";
import FeaturesList from "@/components/features/FeaturesList";
import ProductGrid from "@/components/product/ProductGrid";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FeaturesList />
      <ProductGrid />

      <h1>This is Home</h1>
    </div>
  );
};

export default HomePage;
