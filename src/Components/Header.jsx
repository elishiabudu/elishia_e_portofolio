/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import PropTypes from "prop-types";

const Header = ({ currentPage, onNavigate }) => {
  const navItems = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Portfolio", page: "portfolio" },
    { label: "Work Experience", page: "experience" },
    { label: "Skills", page: "skills" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      {navItems.map((item) => (
        <button
          key={item.page}
          type="button"
          onClick={() => onNavigate(item.page)}
          style={{
            background: currentPage === item.page ? "rgba(78, 86, 126, 0.12)" : "transparent",
            border: currentPage === item.page ? "1px solid #4E567E" : "1px solid transparent",
            borderRadius: "999px",
            cursor: "pointer",
            fontWeight: currentPage === item.page ? "700" : "400",
            color: currentPage === item.page ? "#4E567E" : "#000",
            padding: "0.5rem 0.85rem",
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

Header.defaultProps = {
  currentPage: "home",
  onNavigate: () => {},
};

Header.propTypes = {
  currentPage: PropTypes.string,
  onNavigate: PropTypes.func,
};

export default Header;
