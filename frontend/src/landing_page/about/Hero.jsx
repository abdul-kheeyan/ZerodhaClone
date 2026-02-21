import React from "react";

function Hero() {
  return (
    <div className="container" style={{ padding: "2rem 1rem" }}>
      <div className="row" style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header Section */}
        <h2
          style={{
            textAlign: "center",
            margin: "3rem auto",
            padding: "0 1rem",
            fontSize: "clamp(1.3rem, 4vw, 2rem)",
            fontWeight: 500,
            lineHeight: "1.5",
            maxWidth: "900px",
          }}
        >
          We pioneered the discount broking model in India. Now, we are breaking
          ground with our technology.
        </h2>

        {/* Content Section */}
        <div
          className="row-content"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "3rem",
            flexWrap: "wrap",
            padding: "0 1rem",
            marginBottom: "3rem",
          }}
        >
          {/* Column 1 */}
          <div
            className="col-content"
            style={{
              flex: "1 1 400px",
              minWidth: "280px",
              maxWidth: "550px",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                lineHeight: "1.8",
                color: "#666",
              }}
            >
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>

            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                lineHeight: "1.8",
                color: "#666",
                marginTop: "1.5rem",
              }}
            >
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>

            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                lineHeight: "1.8",
                color: "#666",
                marginTop: "1.5rem",
              }}
            >
              Over 1.6+ crore clients place billions of orders every year through
              our powerful ecosystem of investment platforms, contributing over
              15% of all Indian retail trading volumes.
            </p>
          </div>

          {/* Column 2 */}
          <div
            className="col-content"
            style={{
              flex: "1 1 400px",
              minWidth: "280px",
              maxWidth: "550px",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                lineHeight: "1.8",
                color: "#666",
              }}
            >
              In addition, we run a number of popular open online educational and
              community initiatives to empower retail traders and investors.
            </p>

            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                lineHeight: "1.8",
                color: "#666",
                marginTop: "1.5rem",
              }}
            >
              <a
                href="#"
                style={{
                  color: "#387ed1",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>

            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                lineHeight: "1.8",
                color: "#666",
                marginTop: "1.5rem",
              }}
            >
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our{" "}
              <a
                href="#"
                style={{
                  color: "#387ed1",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                blog
              </a>{" "}
              or see what the media is{" "}
              <a
                href="#"
                style={{
                  color: "#387ed1",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                saying about us
              </a>{" "}
              or learn more about our business and product{" "}
              <a
                href="#"
                style={{
                  color: "#387ed1",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                philosophies
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .container {
            padding: 1.5rem 0.5rem !important;
          }
          
          h2 {
            margin: 2rem auto !important;
          }
          
          .row-content {
            flex-direction: column !important;
            gap: 2rem !important;
            margin-bottom: 2rem !important;
          }
          
          .col-content {
            max-width: 100% !important;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1rem 0.5rem !important;
          }
          
          h2 {
            margin: 1.5rem auto !important;
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