import React, { useState } from "react";

function Team() {
  const team = [
    {
      name: "Nithin Kamath",
      role: "Founder & CEO",
      img: "/media/images/Nikhil.jpg",
      bio: "Nithin bootstrapped and founded Zerodha in 2010. He has changed the landscape of the Indian broking industry.",
    },
    {
      name: "Dr. Kailash Nadh",
      role: "CTO",
      img: "/media/images/Kailash.jpg",
      bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.",
    },
    {
      name: "Venu Madhav",
      role: "COO",
      img: "/media/images/Venu.jpg",
      bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.",
    },
    {
      name: "Hanan Delvi",
      role: "CCO",
      img: "/media/images/Hanan.jpg",
      bio: "We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.",
    },
    {
      name: "Seema Patil",
      role: "Director",
      img: "/media/images/Seema.jpg",
      bio: "Seema who has led the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.",
    },
    {
      name: "Karthik Rangappa",
      role: "Chief of Education",
      img: "/media/images/karthik.jpg",
      bio: "Karthik single handedly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.",
    },
    {
      name: "Austin Prakesh",
      role: "Director Strategy",
      img: "/media/images/Austin.jpg",
      bio: "Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.",
    },
  ];

  const [openBioIndex, setOpenBioIndex] = useState(null);

  const toggleBio = (index) => {
    if (openBioIndex === index) {
      setOpenBioIndex(null);
    } else {
      setOpenBioIndex(index);
    }
  };

  return (
    <div className="container" style={{ padding: "2rem 1rem" }}>
      {/* ---- Hero Section ---- */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          marginTop: "3rem",
          fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
          fontWeight: 500,
        }}
      >
        People
      </h2>

      <div
        className="hero-section"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "3rem",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto 5rem",
          padding: "0 1rem",
        }}
      >
        {/* Founder Image */}
        <div
          className="founder-img-container"
          style={{
            flex: "0 1 300px",
            minWidth: "250px",
            textAlign: "center",
          }}
        >
          <img
            src="/media/images/nithinKamath.jpg"
            alt="founder"
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              borderRadius: "50%",
              objectFit: "cover",
              aspectRatio: "1/1",
            }}
          />

          <div style={{ marginTop: "1.5rem" }}>
            <p style={{ fontWeight: "600", fontSize: "1.1rem", marginBottom: "0.3rem" }}>
              Nithin Kamath
            </p>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>Founder, CEO</p>
          </div>
        </div>

        {/* Founder Bio */}
        <div
          className="founder-bio"
          style={{
            flex: "1 1 400px",
            minWidth: "280px",
            maxWidth: "600px",
            lineHeight: "1.8",
          }}
        >
          <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "#666" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "#666",
              marginTop: "1.5rem",
            }}
          >
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>

          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "#666",
              marginTop: "1.5rem",
            }}
          >
            Playing basketball is his zen.
          </p>

          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "#666",
              marginTop: "1.5rem",
            }}
          >
            Connect on{" "}
            <a href="" style={linkStyle}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={linkStyle}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={linkStyle}>
              Twitter
            </a>
          </p>
        </div>
      </div>

      {/* ---- Grid Section ---- */}
      <div
        className="team-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div
          className="team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            justifyItems: "center",
          }}
        >
          {team.map((person, i) => (
            <div
              className="team-card"
              key={i}
              style={{
                textAlign: "center",
                width: "100%",
                maxWidth: "300px",
              }}
            >
              <img
                src={person.img}
                alt={person.name}
                className="team-img"
                style={{
                  width: "100%",
                  maxWidth: "180px",
                  height: "auto",
                  borderRadius: "50%",
                  objectFit: "cover",
                  aspectRatio: "1/1",
                }}
              />

              <p
                className="team-name"
                style={{
                  marginTop: "1rem",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                {person.name}
              </p>

              <p
                className="team-role"
                style={{
                  color: "gray",
                  fontSize: "0.9rem",
                  marginTop: "0.3rem",
                }}
              >
                {person.role}
              </p>

              <p
                className="team-bio-toggle"
                style={{
                  marginTop: "0.8rem",
                  color: "#387ed1",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                }}
                onClick={() => toggleBio(i)}
              >
                Bio{" "}
                <span
                  style={{
                    display: "inline-block",
                    transform:
                      openBioIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                >
                  ⌄
                </span>
              </p>

              {openBioIndex === i && (
                <p
                  style={{
                    marginTop: "1rem",
                    color: "#555",
                    textAlign: "left",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    padding: "0 1rem",
                  }}
                >
                  {person.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .container {
            padding: 1.5rem 0.5rem !important;
          }

          .hero-section {
            flex-direction: column !important;
            align-items: center !important;
            margin-bottom: 3rem !important;
          }

          .founder-img-container {
            max-width: 250px !important;
          }

          .founder-bio {
            max-width: 100% !important;
            text-align: left;
          }

          .team-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            gap: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }

          .team-card {
            max-width: 100% !important;
          }
        }

        a:hover {
          text-decoration: underline;
        }

        .team-bio-toggle:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

const linkStyle = {
  color: "#387ed1",
  textDecoration: "none",
  fontWeight: "500",
};

export default Team;