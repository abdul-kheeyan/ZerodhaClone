import React from "react";

export default function ChargesExplained() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        .charges-explained {
          max-width: 1000px;
          margin: 70px auto;
          color: #333;
        }

        .charges-explained h1 {
          font-size: 20px;
          font-weight: 500;
          text-align: center;
          margin-bottom: 40px;
        }

        .columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        h3 {
          font-size: 15px;
          font-weight: 600;
          margin: 25px 0 8px;
          color: #222;
        }

        p, li {
          font-size: 13px;
          line-height: 1.7;
          color: #555;
        }

        ul {
          padding-left: 18px;
          margin: 6px 0 0;
        }

        li {
          margin-bottom: 6px;
        }

        a {
          color: #387ed1;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        .section {
          margin-bottom: 20px;
        }

        .small {
          font-size: 12px;
          color: #666;
          margin-top: 8px;
        }

        @media (max-width: 768px) {
          .columns {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="charges-explained">
        <h1>Charges explained</h1>

        <div className="columns">
          {/* LEFT COLUMN */}
          <div>
            <div className="section">
              <h3>Securities/Commodities transaction tax</h3>
              <p>
                Tax by the government when transacting on the exchanges. Charged as
                above on both buy and sell sides when trading equity delivery.
                Charged only on selling side when trading intraday or on F&O.
              </p>
              <p>
                When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.
                Important to keep this in mind.
              </p>
            </div>

            <div className="section">
              <h3>Transaction/Turnover Charges</h3>
              <p>
                Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
              </p>
              <p>
                BSE has revised transaction charges in XC, XT, ZT and ZP groups to ₹10,000 per crore of gross turnover.
              </p>
              <p>
                NSE has revised transaction charges in SS and ST groups to ₹10,000 per crore of gross turnover.
              </p>
              <p>
                NSE has revised transaction charges for group A and other non-exclusive scrips to ₹3.25 per crore of turnover.
              </p>
              <p>
                NSE has revised transaction charges in MT, TT and MS groups to ₹275 per crore of gross turnover.
              </p>
            </div>

            <div className="section">
              <h3>Call & trade</h3>
              <p>
                Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
              </p>
            </div>

            <div className="section">
              <h3>Stamp charges</h3>
              <p>
                Stamp charges by the Government of India as per the Indian Stamp Act of 1899
                for transacting in instruments on the stock exchanges and depositories.
              </p>
            </div>

            <div className="section">
              <h3>NRI brokerage charges</h3>
              <ul>
                <li>For non-PIS account, 0.5% or ₹100 per executed order for equity and F&O (whichever is lower).</li>
                <li>For PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>₹500 + GST yearly account maintenance (AMC) charges.</li>
              </ul>
            </div>

            <div className="section">
              <h3>Account with debit balance</h3>
              <p>
                If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.
              </p>
            </div>

            <div className="section">
              <h3>Charges for Investor’s Protection Fund Trust (IPFT) by NSE</h3>
              <ul>
                <li>Equity & Futures – ₹10 per crore + GST of traded value.</li>
                <li>Options – ₹50 per crore + GST of traded premium value.</li>
                <li>Currency – ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
              </ul>
            </div>

            <div className="section">
              <h3>Margin Trading Facility (MTF)</h3>
              <ul>
                <li>MTF interest: 0.04% per day (₹40 per lakh).</li>
                <li>MTF brokerage: 0.5% or ₹20 per executed order, whichever is lower.</li>
                <li>MTF pledge charges: ₹15 + GST per pledge request per ISIN.</li>
              </ul>
            </div>

        
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="section">
              <h3>GST</h3>
              <p>
                Tax levied by the government on the services rendered. 18% of (Brokerage + SEBI charges + transaction charges).
              </p>
            </div>

            <div className="section">
              <h3>SEBI Charges</h3>
              <p>
                Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
              </p>
            </div>

            <div className="section">
              <h3>DP (Depository participant) charges</h3>
              <p>
                ₹13.5 per scrip (₹5.5 CDSL + ₹3.5 GST) charged on the trading account when stocks are sold, irrespective of quantity.
              </p>
              <p>
                Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL.
              </p>
            </div>

            <div className="section">
              <h3>Pledging charges</h3>
              <p>₹20 + GST per pledge request per ISIN.</p>
            </div>

            <div className="section">
              <h3>AMC (Account maintenance charges)</h3>
              <p>
                For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000.
              </p>
              <p>
                For non-BSDA demat account: ₹300/year + 18% GST charged quarterly.
                <a href="#"> Learn more</a>
              </p>
            </div>

            <div className="section">
              <h3>Corporate action order charges</h3>
              <p>₹20 per order + GST for OFS / buyback / takeover / delisting orders placed through Zerodha.</p>
            </div>

            <div className="section">
              <h3>Off-market transfer charges</h3>
              <p>₹25 per transaction.</p>
            </div>

            <div className="section">
              <h3>Physical CMR request</h3>
              <p>
                First CMR request is free. ₹20 + ₹100 (courier charges) + 18% GST for subsequent requests.
              </p>
            </div>

            <div className="section">
              <h3>Payment gateway charges</h3>
              <p>₹9 + GST (not levied on transfers done via UPI).</p>
            </div>

            <div className="section">
              <h3>Delayed Payment Charges</h3>
              <p>
                Interest levied at 18% a year or 0.05% per day on the debit balance in your trading account.
              </p>
            </div>

            <div className="section">
              <h3>Trading using 3-in-1 account with block functionality</h3>
              <ul>
                <li>Delivery MTF brokerage: 0.5% per executed order.</li>
                <li>Intraday brokerage: 0.05% per executed order.</li>
              </ul>
            </div>
          </div>
        </div>
         <div className="section">
              <h3>Disclaimer</h3>
              <p className="small">
                For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
              </p>
            </div>
      </div>
    </>
  );
}
