import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        position: "relative",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            className="nav-logo"
            style={{
              height: "1.2rem",
              width: "auto",
              cursor: "pointer",
            }}
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div
        className="nav-links-desktop"
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <Link className="nav-link" to="/signup" style={linkStyle}>
          Signup
        </Link>
        <Link className="nav-link" to="/about" style={linkStyle}>
          About
        </Link>
        <Link className="nav-link" to="/product" style={linkStyle}>
          Products
        </Link>
        <Link className="nav-link" to="/pricing" style={linkStyle}>
          Pricing
        </Link>
        <Link className="nav-link" to="/support" style={linkStyle}>
          Support
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="menu-icon"
        onClick={toggleMenu}
        style={{
          fontSize: "1.5rem",
          cursor: "pointer",
          display: "none",
          padding: "0.5rem",
        }}
      >
        {isMenuOpen ? "✕" : "☰"}
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          className="nav-links-mobile"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "0",
            zIndex: 1000,
            borderTop: "1px solid #eee",
          }}
        >
          <Link
            className="nav-link"
            to="/signup"
            style={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Signup
          </Link>
          <Link
            className="nav-link"
            to="/about"
            style={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className="nav-link"
            to="/product"
            style={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            className="nav-link"
            to="/pricing"
            style={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            className="nav-link"
            to="/support"
            style={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Support
          </Link>
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        .nav-link {
          text-decoration: none;
          color: #666;
          font-size: clamp(0.9rem, 2vw, 1rem);
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #387ed1;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 1rem !important;
          }
          
          .nav-links-desktop {
            display: none !important;
          }
          
          .menu-icon {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .menu-icon {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

// Styles
const linkStyle = {
  textDecoration: "none",
  color: "#666",
  fontSize: "1rem",
  fontWeight: 400,
};

const mobileLinkStyle = {
  textDecoration: "none",
  color: "#666",
  fontSize: "1rem",
  fontWeight: 400,
  padding: "1rem 2rem",
  borderBottom: "1px solid #eee",
  display: "block",
};

export default Navbar;