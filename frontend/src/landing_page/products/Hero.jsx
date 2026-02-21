import React from "react";

function Hero() {
  return (
    <div className="container" style={{ padding: "3rem 1rem" }}>
      <div
        className="row"
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2rem 1rem",
        }}
      >
        <h1
          style={{
            marginBottom: "1rem",
            fontSize: "clamp(2rem, 6vw, 3rem)",
            fontWeight: 500,
            lineHeight: "1.2",
          }}
        >
          Zerodha Products
        </h1>
        <h3
          style={{
            marginBottom: "2rem",
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            fontWeight: 400,
            color: "#666",
            lineHeight: "1.4",
          }}
        >
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "#666",
          }}
        >
          Check out our{" "}
          <a
            href=""
            style={{
              color: "#387ed1",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            investment offerings →
          </a>
        </p>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .container {
            padding: 2rem 0.5rem !important;
          }

          .row {
            padding: 1rem 0.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 0.5rem !important;
          }

          .row {
            padding: 0.5rem !important;
          }
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Hero;