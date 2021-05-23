import LandingScreen from "../components/layout/LandingScreen";
import AboutScreen from "../components/layout/AboutScreen";
import FeatureScreen from "../components/layout/FeatureScreen";
import ProductSection from "../components/layout/ProductSection";
import ReviewSection from "../components/layout/ReviewSection";
import ContactSection from "../components/layout/ContactSection";
import FooterSection from "../components/layout/FooterSection";

const HomePage = () => {
  return (
    <>
      <LandingScreen />
      <AboutScreen />
      <FeatureScreen />
      <ProductSection />
      <ReviewSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
