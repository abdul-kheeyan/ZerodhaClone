import React from "react";

function RightSection({ imgURL, productName, productDicription, learnMore }) {
  return (
    <div className="container" style={{ padding: "3rem 1rem" }}>
      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Content Column */}
        <div
          className="col-content"
          style={{
            flex: "1 1 350px",
            minWidth: "280px",
            maxWidth: "500px",
            order: 1,
          }}
        >
          <h1
            style={{
              marginBottom: "2rem",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 500,
              lineHeight: "1.2",
            }}
          >
            {productName}
          </h1>

          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: "1.8",
              color: "#666",
              marginBottom: "2rem",
            }}
          >
            {productDicription}
          </p>

          {/* Learn More Link */}
          <div>
            <a
              href={learnMore}
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                fontWeight: 500,
              }}
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div
          className="col-image"
          style={{
            flex: "1 1 350px",
            minWidth: "280px",
            maxWidth: "500px",
            display: "flex",
            justifyContent: "center",
            order: 2,
          }}
        >
          <img
            src={imgURL}
            alt="product"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .container {
            padding: 2rem 0.5rem !important;
          }

          .row {
            flex-direction: column !important;
            gap: 2rem !important;
          }

          .col-content {
            order: 1 !important;
            max-width: 100% !important;
            padding: 0 1rem;
          }

          .col-image {
            order: 2 !important;
            max-width: 100% !important;
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 0.5rem !important;
          }
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default RightSection;