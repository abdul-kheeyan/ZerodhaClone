import React from "react";

function Education() {
  return (
    <div className="container" style={{ padding: "2rem 1rem" }}>
      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Image Column */}
        <div
          className="col-img"
          style={{
            flex: "1 1 300px",
            minWidth: "280px",
            maxWidth: "500px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="media/images/education.svg"
            alt=""
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Content Column */}
        <div
          className="col-content"
          style={{
            flex: "1 1 300px",
            minWidth: "280px",
            maxWidth: "600px",
          }}
        >
          <h2
            style={{
              marginBottom: "2rem",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: 500,
              lineHeight: "1.3",
            }}
          >
            Free and open market education
          </h2>

          <p
            style={{
              marginBottom: "2rem",
              color: "#666",
              lineHeight: "1.8",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
            }}
          >
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href=""
            style={{
              display: "inline-block",
              marginBottom: "2rem",
              color: "#387ed1",
              textDecoration: "none",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              fontWeight: 500,
            }}
          >
            Varsity <span>→</span>
          </a>

          <p
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#666",
              lineHeight: "1.8",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
            }}
          >
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href=""
            style={{
              display: "inline-block",
              marginTop: "1rem",
              color: "#387ed1",
              textDecoration: "none",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              fontWeight: 500,
            }}
          >
            TradingQ&A <span>→</span>
          </a>
        </div>
      </div>

      {/* Responsive CSS using media queries */}
      <style>{`
        @media (max-width: 768px) {
          .container {
            padding: 1rem 0.5rem !important;
          }
          
          .row {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          
          .col-img {
            max-width: 100% !important;
            padding: 0 1rem;
          }
          
          .col-content {
            max-width: 100% !important;
            padding: 0 1rem;
            text-align: left;
          }
        }
        
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Education;