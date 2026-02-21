import React from "react";

function Footer() {
  return (
    <>
      {/* ---------------- TOP MAIN FOOTER ---------------- */}
      <div className="footercontainer" style={{ padding: "3rem 1rem 1rem" }}>
        <footer
          className="footer"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          {/* -------- LEFT SECTION (LOGO + SOCIALS) -------- */}
          <div
            className="footer-left"
            style={{
              flex: "1 1 250px",
              minWidth: "200px",
              maxWidth: "300px",
            }}
          >
            <img
              src="media/images/logo.svg"
              className="footer-logo"
              alt="Zerodha Logo"
              style={{
                height: "1.2rem",
                width: "auto",
                marginBottom: "1.5rem",
              }}
            />

            <p
              className="footer-copy"
              style={{
                fontSize: "0.85rem",
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "1.5rem",
              }}
            >
              © 2010 - 2025, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>

            <div
              className="footer-social"
              style={{
                display: "flex",
                gap: "0.8rem",
                marginBottom: "1.5rem",
              }}
            >
              <img
                src="media/images/x4.jpg"
                alt="Twitter"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
              <img
                src="media/images/facebook2.jpg"
                alt="Facebook"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
              <img
                src="media/images/instagram3.jpg"
                alt="Instagram"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
              <img
                src="media/images/linkdin.png"
                alt="LinkedIn"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
            </div>

            <hr
              className="footer-line"
              style={{
                border: "none",
                borderTop: "1px solid #ddd",
                marginBottom: "1.5rem",
              }}
            />

            <div
              className="footer-social bottom"
              style={{
                display: "flex",
                gap: "0.8rem",
              }}
            >
              <img
                src="media/images/youtube.png"
                alt="YouTube"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
              <img
                src="media/images/whatsapp.png"
                alt="WhatsApp"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
              <img
                src="media/images/telegram.png"
                alt="Telegram"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* -------- COLUMNS -------- */}
          <div
            className="footer-col"
            style={{
              flex: "1 1 150px",
              minWidth: "150px",
            }}
          >
            <h4 style={{ marginBottom: "1rem", fontSize: "1rem", fontWeight: 500 }}>
              Account
            </h4>
            <a href="#" style={linkStyle}>Open demat account</a>
            <a href="#" style={linkStyle}>Minor demat account</a>
            <a href="#" style={linkStyle}>NRI demat account</a>
            <a href="#" style={linkStyle}>Commodity</a>
            <a href="#" style={linkStyle}>Dematerialisation</a>
            <a href="#" style={linkStyle}>Fund transfer</a>
            <a href="#" style={linkStyle}>MTF</a>
            <a href="#" style={linkStyle}>Referral program</a>
          </div>

          <div
            className="footer-col"
            style={{
              flex: "1 1 150px",
              minWidth: "150px",
            }}
          >
            <h4 style={{ marginBottom: "1rem", fontSize: "1rem", fontWeight: 500 }}>
              Support
            </h4>
            <a href="#" style={linkStyle}>Contact us</a>
            <a href="#" style={linkStyle}>Support portal</a>
            <a href="#" style={linkStyle}>How to file a complaint?</a>
            <a href="#" style={linkStyle}>Status of your complaints</a>
            <a href="#" style={linkStyle}>Bulletin</a>
            <a href="#" style={linkStyle}>Circular</a>
            <a href="#" style={linkStyle}>Z-Connect blog</a>
            <a href="#" style={linkStyle}>Downloads</a>
          </div>

          <div
            className="footer-col"
            style={{
              flex: "1 1 150px",
              minWidth: "150px",
            }}
          >
            <h4 style={{ marginBottom: "1rem", fontSize: "1rem", fontWeight: 500 }}>
              Company
            </h4>
            <a href="#" style={linkStyle}>About</a>
            <a href="#" style={linkStyle}>Philosophy</a>
            <a href="#" style={linkStyle}>Press & media</a>
            <a href="#" style={linkStyle}>Careers</a>
            <a href="#" style={linkStyle}>Zerodha Cares (CSR)</a>
            <a href="#" style={linkStyle}>Zerodha.tech</a>
            <a href="#" style={linkStyle}>Open source</a>
          </div>

          <div
            className="footer-col"
            style={{
              flex: "1 1 150px",
              minWidth: "150px",
            }}
          >
            <h4 style={{ marginBottom: "1rem", fontSize: "1rem", fontWeight: 500 }}>
              Quick links
            </h4>
            <a href="#" style={linkStyle}>Upcoming IPOs</a>
            <a href="#" style={linkStyle}>Brokerage charges</a>
            <a href="#" style={linkStyle}>Market holidays</a>
            <a href="#" style={linkStyle}>Economic calendar</a>
            <a href="#" style={linkStyle}>Calculators</a>
            <a href="#" style={linkStyle}>Markets</a>
            <a href="#" style={linkStyle}>Sectors</a>
          </div>
        </footer>

        {/* ---------------- BOTTOM LARGE TEXT SECTION ---------------- */}
        <section
          className="footer-info"
          style={{
            maxWidth: "1400px",
            margin: "3rem auto 0",
            padding: "0 1rem",
          }}
        >
          <p style={paraStyle}>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
            Karnataka, India. For any complaints pertaining to securities broking
            please write to
            <a href="mailto:complaints@zerodha.com" style={inlineLinkStyle}>
              {" "}
              complaints@zerodha.com
            </a>
            , for DP related to
            <a href="mailto:dp@zerodha.com" style={inlineLinkStyle}>
              {" "}
              dp@zerodha.com
            </a>
            .
          </p>

          <p style={paraStyle}>
            Procedure to file a complaint on{" "}
            <a href="#" style={inlineLinkStyle}>
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
          </p>

          <p style={paraStyle}>
            <a href="#" style={inlineLinkStyle}>
              Smart Online Dispute Resolution
            </a>{" "}
            |
            <a href="#" style={inlineLinkStyle}>
              {" "}
              Grievances Redressal Mechanism
            </a>
          </p>

          <p style={paraStyle}>
            Investments in securities market are subject to market risks; read all
            the related documents carefully before investing.
          </p>

          <p style={paraStyle}>
            Attention investors: 1) Stock brokers can accept securities as margins
            from clients only by way of pledge in the depository system w.e.f
            September 01, 2020. 2) Update your e-mail and phone number with your
            stock broker / depository participant and receive OTP directly from
            depository on your e-mail and/or mobile number to create pledge. 3)
            Check your securities / MF / bonds in the consolidated account
            statement issued by NSDL/CDSL every month.
          </p>

          <p style={paraStyle}>
            India's largest broker based on networth as per NSE.{" "}
            <a href="#" style={inlineLinkStyle}>
              NSE broker factsheet
            </a>
          </p>

          <p style={paraStyle}>
            "Prevent unauthorised transactions in your account. Update your mobile
            numbers/email IDs with your stock brokers. Receive information of your
            transactions directly from Exchange on your mobile/email at the end of
            the day." — Issued in the interest of investors.
          </p>

          <p style={paraStyle}>
            *Customers availing insurance advisory services offered by Ditto
            Insurance Broking Pvt. Ltd. are not clients of Zerodha and such
            services are regulated by IRDAI.
          </p>

          {/* ---------- Bottom Navigation Links ---------- */}
          <div
            className="footer-bottom-links"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid #ddd",
            }}
          >
            <a href="#" style={bottomLinkStyle}>NSE</a>
            <a href="#" style={bottomLinkStyle}>BSE</a>
            <a href="#" style={bottomLinkStyle}>MCX</a>
            <a href="#" style={bottomLinkStyle}>Terms & conditions</a>
            <a href="#" style={bottomLinkStyle}>Policies & procedures</a>
            <a href="#" style={bottomLinkStyle}>Privacy policy</a>
            <a href="#" style={bottomLinkStyle}>Disclosure</a>
            <a href="#" style={bottomLinkStyle}>For investor's attention</a>
            <a href="#" style={bottomLinkStyle}>Investor charter</a>
          </div>
        </section>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .footercontainer {
            padding: 2rem 0.5rem 1rem !important;
          }
          
          .footer {
            flex-direction: column !important;
          }
          
          .footer-left {
            max-width: 100% !important;
            margin-bottom: 1rem;
          }
          
          .footer-col {
            width: 100% !important;
            max-width: 100% !important;
          }
          
          .footer-info {
            padding: 0 1rem !important;
          }
        }
        
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

// Styles
const linkStyle = {
  display: "block",
  color: "#666",
  textDecoration: "none",
  fontSize: "0.85rem",
  marginBottom: "0.6rem",
  lineHeight: "1.5",
};

const paraStyle = {
  fontSize: "0.75rem",
  color: "#666",
  lineHeight: "1.8",
  marginBottom: "1.5rem",
};

const inlineLinkStyle = {
  color: "#387ed1",
  textDecoration: "none",
};

const bottomLinkStyle = {
  color: "#666",
  textDecoration: "none",
  fontSize: "0.8rem",
};

export default Footer;