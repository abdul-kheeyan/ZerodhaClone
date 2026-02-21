import React from "react";

function Hero() {
  return (
    <div className="charges-container">
      {/* Header */}
      <div className="charges-header">
        <h2>Charges</h2>
        <p>List of all charges and taxes</p>
      </div>

      {/* Cards */}
      <div className="charges-cards">
        {/* Card 1 */}
        <div className="charge-card">
          <img src="media/images/pricingMF.svg" alt="Free equity delivery" />
          <h3>Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="charge-card">
          <img src="media/images/intradayTrades.svg" alt="Intraday and F&O" />
          <h3>Intraday and F&O trades</h3>
          <p>
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday
            trades across equity, currency, and commodity trades. Flat ₹20 on
            all option trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="charge-card">
          <img src="media/images/pricingMF.svg" alt="Free direct MF" />
          <h3>Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>

      {/* CSS (same file) */}
      <style>{`
        .charges-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 1rem;
        }

        .charges-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .charges-header h2 {
          font-size: 2.4rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .charges-header p {
          color: #666;
          font-size: 1.1rem;
        }

        /* GRID FIX */
        .charges-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          align-items: start;
        }

        .charge-card {
          text-align: center;
          padding: 1rem;
        }

        .charge-card img {
          width: 180px;
          margin-bottom: 1.5rem;
        }

        .charge-card h3 {
          font-size: 1.3rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .charge-card p {
          color: #666;
          font-size: 1rem;
          line-height: 1.8;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .charges-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
