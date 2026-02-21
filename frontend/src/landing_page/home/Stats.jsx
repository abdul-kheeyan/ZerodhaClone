import React from "react";

function Stats() {
  return (
    <div className="container" style={{ padding: "4rem 1rem 2rem" }}>
      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Text Content Column */}
        <div
          className="col-text"
          style={{
            flex: "1 1 400px",
            minWidth: "280px",
            maxWidth: "550px",
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
            Trust with confidence
          </h2>

          <h3
            style={{
              marginBottom: "2rem",
              fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              fontWeight: 500,
            }}
          >
            Customer-first always
          </h3>
          <p
            style={{
              marginBottom: "2rem",
              color: "#666",
              lineHeight: "1.8",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
            }}
          >
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India's largest broker; contributing
            to 15% of daily retail exchange volumes in India.
          </p>

          <h3
            style={{
              marginBottom: "2rem",
              fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              fontWeight: 500,
            }}
          >
            No spam or gimmicks
          </h3>
          <p
            style={{
              marginBottom: "2rem",
              color: "#666",
              lineHeight: "1.8",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
            }}
          >
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.{" "}
            <a
              href=""
              style={{
                color: "#387ed1",
                textDecoration: "none",
              }}
            >
              Our philosophies.
            </a>
          </p>

          <h2
            style={{
              marginBottom: "2rem",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: 500,
              lineHeight: "1.3",
            }}
          >
            The Zerodha universe
          </h2>
          <p
            style={{
              marginBottom: "2rem",
              color: "#666",
              lineHeight: "1.8",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
            }}
          >
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2
            style={{
              marginBottom: "2rem",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: 500,
              lineHeight: "1.3",
            }}
          >
            Do better with money
          </h2>
          <p
            style={{
              marginBottom: "2rem",
              color: "#666",
              lineHeight: "1.8",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
            }}
          >
            With initiatives like{" "}
            <a
              href=""
              style={{
                color: "#387ed1",
                textDecoration: "none",
              }}
            >
              Nudge
            </a>{" "}
            and{" "}
            <a
              href=""
              style={{
                color: "#387ed1",
                textDecoration: "none",
              }}
            >
              Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>

        {/* Image and Links Column */}
        <div
          className="col-image"
          style={{
            flex: "1 1 350px",
            minWidth: "280px",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="media/images/ecosystem.png"
            alt="Eco"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              marginBottom: "2rem",
              objectFit: "contain",
            }}
          />
          <div
            className="links-container"
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a
              href=""
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                fontWeight: 500,
              }}
            >
              Explore our products <span>→</span>
            </a>
            <a
              href=""
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                fontWeight: 500,
              }}
            >
              Try Kite demo <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Responsive CSS using media queries */}
      <style>{`
        @media (max-width: 768px) {
          .container {
            padding: 2rem 0.5rem !important;
          }
          
          .row {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          
          .col-text {
            max-width: 100% !important;
            padding: 0 1rem;
          }
          
          .col-image {
            max-width: 100% !important;
            padding: 0 1rem;
          }
          
          .links-container {
            gap: 1rem !important;
            flex-direction: column !important;
            align-items: center !important;
          }
        }
        
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Stats;