import { Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState } from "react";
import LOGO_IMAGE from "../assets/logo.png";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {"name":"Features", tag:"features"},
    {"name":"Demo", tag:"demo"},
    {"name":"Why Us", tag:"why-us"},
    {"name":"Testimonials", tag:"testimonials"}
  ];

  return (
    <Navbar expand="lg" className="custom-navbar" expanded={isOpen}>
      <div className="container">
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

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.tag}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              >
                <Nav.Link
                  href={`#${link.tag.toLowerCase()}`}
                  className="nav-link-item"
                >
                  {link.name}
                </Nav.Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + navLinks.length * 0.1 }}
            >
              <div className="getstarted-btn btn btn-sm">Get Started</div>
            </motion.div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
