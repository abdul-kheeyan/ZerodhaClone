import React from "react";

function Pricing() {
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
          minHeight: "auto",
        }}
      >
        {/* Text Content Column */}
        <div
          className="col-text"
          style={{
            flex: "1 1 300px",
            minWidth: "280px",
            maxWidth: "400px",
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
            Unbeatable pricing
          </h2>
          <p
            style={{
              marginBottom: "2rem",
              color: "#666",
              lineHeight: "1.8",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
            }}
          >
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href=""
            style={{
              display: "inline-block",
              color: "#387ed1",
              textDecoration: "none",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              fontWeight: 500,
            }}
          >
            See pricing <span>→</span>
          </a>
        </div>

        {/* Pricing Cards Column */}
        <div
          className="col-cards"
          style={{
            flex: "1 1 400px",
            minWidth: "280px",
            maxWidth: "600px",
          }}
        >
          <div
            className="cards-row"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* Card 1 */}
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                flex: "1 1 120px",
                minWidth: "120px",
                maxWidth: "150px",
              }}
            >
              <img
                src="media/images/pricingMF.svg"
                alt=""
                style={{
                  height: "5rem",
                  width: "auto",
                  marginBottom: "1rem",
                }}
              />
              <p
                style={{
                  fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
                  color: "#666",
                  lineHeight: "1.5",
                }}
              >
                Free account opening
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                flex: "1 1 120px",
                minWidth: "120px",
                maxWidth: "150px",
              }}
            >
              <img
                src="media/images/pricingMF.svg"
                alt=""
                style={{
                  height: "5rem",
                  width: "auto",
                  marginBottom: "1rem",
                }}
              />
              <p
                style={{
                  fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
                  color: "#666",
                  lineHeight: "1.5",
                }}
              >
                Free equity delivery and direct mutual funds
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                flex: "1 1 120px",
                minWidth: "120px",
                maxWidth: "150px",
              }}
            >
              <img
                src="media/images/intradayTrades.svg"
                alt=""
                style={{
                  height: "5rem",
                  width: "auto",
                  marginBottom: "1rem",
                }}
              />
              <p
                style={{
                  fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
                  color: "#666",
                  lineHeight: "1.5",
                }}
              >
                Intraday and F&O
              </p>
            </div>
          </div>
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
            gap: 2rem !important;
          }
          
          .col-text {
            max-width: 100% !important;
            padding: 0 1rem;
            text-align: left;
          }
          
          .col-cards {
            max-width: 100% !important;
            padding: 0 1rem;
          }
          
          .cards-row {
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .cards-row {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .card {
            max-width: 200px !important;
          }
        }
        
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Pricing;