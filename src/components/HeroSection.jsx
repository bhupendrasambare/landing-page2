import HERO_SECTION_IMAGE from "../assets/herosection.png";
import "../style/HeroStyle.css";

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="container hero-content">
        <div className="trusted-pill mb-3 mx-auto">
          Trusted by 10,000+ Companies Worldwide
        </div>

        <h1 className="hero-title mb-3">
          Complete Employee Management Ecosystem
        </h1>

        <p className="hero-subtitle mx-auto mb-1 fs-6">
          From clocking in to performance reviews, manage every aspect of your
          workforce with one powerful platform. Designed for employees,
          managers, and administrators.
        </p>

        <div className="getstarted-btn btn hero-btn btn-sm">Get Started</div>

        <div className="hero-image mt-5">
          <img
            src={HERO_SECTION_IMAGE}
            alt="Hero"
            className="img-fluid hero-image-file"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
