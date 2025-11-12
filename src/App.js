import DescriptionSection from "./components/DescriptionSection";
import FeatureSection from "./components/FeatureSection";
import FooterSection from "./components/FooterSection";
import GetStartedSection from "./components/GetStartedSection";
import HeroSection from "./components/HeroSection";
import MultiStackScroll from "./components/MultiStackScroll";
import NavbarComponent from "./components/NavbarComponent";
import TeamSection from "./components/TeamSection";
import TestimonySection from "./components/TestimonySection";

const App = () => {
  return (
    <>
      <div className="top-bg">
        <NavbarComponent />
        <HeroSection />
      </div>
      {/* <FeatureSection /> */}
      <MultiStackScroll />
      <TeamSection/>
      <DescriptionSection/>
      <TestimonySection/>
      <GetStartedSection/>
      <FooterSection/>

    </>
  );
};

export default App;
