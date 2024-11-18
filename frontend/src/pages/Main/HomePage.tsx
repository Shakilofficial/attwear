import Banner from "@/components/banner/Banner";
import FeaturesList from "@/components/features/FeaturesList";
import SectionHeader from "@/components/SectionHeader";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FeaturesList />
      <SectionHeader
        title="Our Features"
        subtitle="Discover the amazing functionalities we offer."
        alignment="center"
      />

      <h1>This is Home</h1>
    </div>
  );
};

export default HomePage;
