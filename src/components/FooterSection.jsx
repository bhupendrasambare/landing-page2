import "../style/FooterSection.css";
import { FaArrowUp } from "react-icons/fa";
import logo from "../assets/logo-dark.png";
import bannerImg from "../assets/MPRAR.png";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="footer-section">
        <div className="container footer-content">
          {/* Top Footer Layout */}
          <div className="footer-top">
            <div className="footer-left">
              <img src={logo} alt="MPRAR Logo" className="footer-logo" />
              <p className="footer-tagline">
                Simplifying workforce management for modern organizations.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#">Feature</a>
                <a href="#">Price</a>
                <a href="#">Integrations</a>
                <a href="#">Security</a>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
                <a href="#">Partner</a>
              </div>

              <div className="footer-column">
                <h4>Support</h4>
                <a href="#">Health Center</a>
                <a href="#">Contact</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>

          {/* Bottom Footer Layout */}
          <div className="footer-bottom">
            <p>© 2025 MPRAR. All rights reserved.</p>
            <button className="back-to-top" onClick={scrollToTop}>
              Back to top <FaArrowUp className="arrow-icon" />
            </button>
          </div>
        </div>
        <div className="mt-5 container">
          <img src={bannerImg} alt="Footer Banner" className="footer-banner" />
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
