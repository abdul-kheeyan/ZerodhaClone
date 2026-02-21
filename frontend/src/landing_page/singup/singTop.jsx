import React from "react";

function SingTop() {
  return (
    <div
      className="signup-left"
      style={{
        textAlign: "center",
        padding: "2rem 1rem",
        marginTop: "3rem",
        maxWidth: "1200px",
        margin: "3rem auto 0",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(1.5rem, 5vw, 2rem)",
          margin: "0 auto",
          marginBottom: "1.5rem",
          maxWidth: "800px",
          padding: "0 1rem",
          lineHeight: "1.3",
          fontWeight: 500,
        }}
      >
        Open a free demat and trading account
      </h2>
      <p
        style={{
          fontSize: "clamp(1rem, 3vw, 1.5rem)",
          margin: "0 auto",
          maxWidth: "900px",
          padding: "0 1rem",
          lineHeight: "1.6",
          color: "#666",
        }}
      >
        Start investing brokerage-free and join a community of{" "}
        <strong style={{ color: "#333" }}>1.6+ crore investors</strong>.
      </p>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .signup-left {
            padding: 1.5rem 0.5rem !important;
            margin-top: 2rem !important;
          }
          
          .signup-left h2 {
            margin-bottom: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .signup-left {
            padding: 1rem 0.5rem !important;
            margin-top: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default SingTop;