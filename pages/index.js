import LandingScreen from "../components/HomeScreen/LandingSection/LandingSection";
import AboutScreen from "../components/HomeScreen/AboutSection/AboutSection";
import FeatureScreen from "../components/HomeScreen/FeatureSection/FeatureSection";
import ProductSection from "../components/HomeScreen/ProductSection/ProductSection";
import ReviewSection from "../components/HomeScreen/ReviewSection/ReviewSection";
import ContactSection from "../components/HomeScreen/ContactSection/ContactSection";
import FooterSection from "../components/HomeScreen/FooterSection/FooterSection";
import Navigation from "../components/navigation/Navigation";

const HomePage = () => {
  return (
    <>
      <Navigation />
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
