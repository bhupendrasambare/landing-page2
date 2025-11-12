import { Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState } from "react";
import LOGO_IMAGE from "../assets/logo.png";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", tag: "features" },
    { name: "Why Us", tag: "why-us" },
    { name: "Goal", tag: "goal" },
    { name: "Testimonials", tag: "testimonials" },
  ];

  const handleGetStarted = () => {
    window.open("https://mprar.vercel.app", "_blank");
  };

  return (
    <Navbar expand="lg" sticky className="custom-navbar" expanded={isOpen}>
      <div className="container d-flex align-items-center justify-content-between nabar-bg">
        {/* Logo */}
        <Navbar.Brand
          as={motion.a}
          href="#"
          className="navbar-logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={LOGO_IMAGE} alt="logo" />
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle
          as={motion.button}
          onClick={() => setIsOpen(!isOpen)}
          className="custom-toggle"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 + navLinks.length * 0.1 }}
        >
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        {/* Nav Links + Button */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto gap-3 align-items-center nav-container">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.tag}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              >
                <Nav.Link href={`#${link.tag}`} className="nav-link-item">
                  {link.name}
                </Nav.Link>
              </motion.div>
            ))}

            {/* Single unified Get Started button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + navLinks.length * 0.1 }}
              className="getstarted-wrapper me-3"
            >
              <button className="getstarted-btn-nav" onClick={handleGetStarted}>
                Get Started
              </button>
            </motion.div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
