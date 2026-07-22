/**
 * Contact component
 *
 * Displays contact details on a separate page.
 */

import React from "react";

const Contact = ({ email, phone, location }) => {
  const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(location)}`;
  const cleanPhone = phone.replace(/[^0-9+]/g, "");

  return (
    <section className="padding" id="contact">
      <h2 style={{ textAlign: "left" }}>Contact</h2>
      <div
        className="container"
        style={{
          gridTemplateColumns: "repeat(3, minmax(220px, 1fr))",
          gap: "16px",
          margin: "1rem auto",
          maxWidth: "900px",
        }}
      >
        <div
          className="box"
          style={{ textAlign: "left", padding: "18px 16px", minHeight: "auto" }}
        >
          <h3>Email</h3>
          <a href={`mailto:${email}`} style={{ color: "#4E567E", textDecoration: "none" }}>
            {email}
          </a>
        </div>
        <div
          className="box"
          style={{ textAlign: "left", padding: "18px 16px", minHeight: "auto" }}
        >
          <h3>Phone</h3>
          <a href={`tel:${cleanPhone}`} style={{ color: "#4E567E", textDecoration: "none" }}>
            {phone}
          </a>
        </div>
        <div
          className="box"
          style={{ textAlign: "left", padding: "18px 16px", minHeight: "auto" }}
        >
          <h3>Location</h3>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#4E567E", textDecoration: "none" }}>
            {location}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
