import React from "react";

function LefSection({
  imgURL,
  productName,
  productDicription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
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
        {/* Image Column */}
        <div
          className="col-image"
          style={{
            flex: "1 1 350px",
            minWidth: "280px",
            maxWidth: "500px",
            display: "flex",
            justifyContent: "center",
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

        {/* Content Column */}
        <div
          className="col-content"
          style={{
            flex: "1 1 350px",
            minWidth: "280px",
            maxWidth: "500px",
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

          {/* Links Section */}
          <div
            className="links-section"
            style={{
              display: "flex",
              gap: "2rem",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href={tryDemo}
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                fontWeight: 500,
              }}
            >
              Try Demo →
            </a>
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

          {/* App Store Badges */}
          <div
            className="badges-section"
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {googlePlay && (
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  style={{
                    height: "auto",
                    width: "150px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="App Store"
                  style={{
                    height: "auto",
                    width: "150px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </a>
            )}
          </div>
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

          .col-image,
          .col-content {
            max-width: 100% !important;
            padding: 0 1rem;
          }

          .links-section {
            justify-content: flex-start !important;
          }

          .badges-section {
            justify-content: flex-start !important;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 0.5rem !important;
          }

          .badges-section img {
            width: 130px !important;
          }
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default LefSection;