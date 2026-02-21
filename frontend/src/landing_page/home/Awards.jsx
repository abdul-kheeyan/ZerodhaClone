import React from "react";

function Awards() {
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
            src="media/images/largestBroker.svg"
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
            fontFamily: "Inter, sans-serif",
          }}
        >
          <h1
            style={{
              marginBottom: "1.2rem",
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 500,
              lineHeight: "1.3",
            }}
          >
            Largest stock broker in India
          </h1>

          <p
            style={{
              marginBottom: "0.5rem",
              color: "#666",
              lineHeight: "1.6",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
            }}
          >
            2+ million Zerodha clients contribute to over 15% of all
          </p>

          <p
            style={{
              marginBottom: "1.2rem",
              color: "#666",
              lineHeight: "1.6",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
            }}
          >
            order volumes in India daily by trading and investing in:
          </p>

          <div
            className="items"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <ul
              style={{
                paddingLeft: "1.2rem",
                lineHeight: "2rem",
                flex: "1 1 150px",
                minWidth: "150px",
                fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
              }}
            >
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>

            <ul
              style={{
                paddingLeft: "1.2rem",
                lineHeight: "2rem",
                flex: "1 1 150px",
                minWidth: "150px",
                fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
              }}
            >
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>

          <img
            src="media/images/pressLogos.png"
            alt="logo"
            style={{
              width: "100%",
              maxWidth: "30rem",
              height: "auto",
              marginTop: "1rem",
              objectFit: "contain",
            }}
          />
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
          
          .items {
            gap: 1rem !important;
          }
          
          .items ul {
            min-width: 120px !important;
          }
        }
        
        @media (max-width: 480px) {
          .items {
            flex-direction: column !important;
            gap: 0.5rem !important;
          }
          
          .items ul {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Awards;