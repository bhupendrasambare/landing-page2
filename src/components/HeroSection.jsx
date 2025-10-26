import HERO_SECTION_IMAGE from "../assets/herosection.png";
import "../style/HeroStyle.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.8, ease: "easeOut" } },
  };

  const handleGetStarted = () => {
    window.open("https://mprar.vercel.app", "_blank");
  };

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="container hero-content">
        <motion.div
          className="trusted-pill mb-3 mx-auto"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          Trusted by 10,000+ Companies Worldwide
        </motion.div>

        <motion.h1
          className="hero-title mb-3"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          Complete Employee Management Ecosystem
        </motion.h1>

        <motion.p
          className="hero-subtitle mx-auto mb-1 fs-6"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          From clocking in to performance reviews, manage every aspect of your
          workforce with one powerful platform. Designed for employees,
          managers, and administrators.
        </motion.p>

        <motion.div
          className="getstarted-btn btn hero-btn btn-sm"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          onClick={handleGetStarted}
        >
          Get Started
        </motion.div>

        <motion.div
          className="hero-image mt-5"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <img
            src={HERO_SECTION_IMAGE}
            alt="Hero"
            className="img-fluid hero-image-file"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
