import React, { useState } from "react";

export default function EquityPricingTable() {
  const [activeTab, setActiveTab] = useState("Equity");

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        .charges-container {
          max-width: 1100px;
          margin: 50px auto;
        }

        /* Tabs */
        .tabs {
          display: flex;
          gap: 40px;
          border-bottom: 1px solid #e5e5e5;
          margin-bottom: 25px;
        }

        .tab {
          padding: 12px 0;
          cursor: pointer;
          font-size: 18px;
          color: #555;
          position: relative;
        }

        .tab.active {
          color: #387ed1;
          font-weight: 500;
        }

        .tab.active::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 2px;
          background: #387ed1;
        }

        /* Table */
        .table-wrapper {
          border: 1px solid #eee;
          border-radius: 6px;
          overflow: hidden;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        thead {
          background: #fafafa;
        }

        th, td {
          padding: 14px 16px;
          text-align: left;
          font-size: 14px;
          vertical-align: top;
          border-bottom: 1px solid #eee;
        }

        th {
          font-weight: 600;
          color: #333;
        }

        td {
          color: #555;
        }

        tr:last-child td {
          border-bottom: none;
        }

        ul {
          padding-left: 18px;
          margin: 0;
        }

        li {
          margin-bottom: 6px;
        }

        .calculator {
          margin: 30px 0;
          text-align: center;
          font-size: 16px;
        }

        .calculator a {
          color: #387ed1;
          text-decoration: none;
          font-weight: 500;
        }

        .calculator a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="charges-container">
        {/* Tabs */}
        <div className="tabs">
          {["Equity", "Currency", "Commodity"].map(tab => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* ================= EQUITY ================= */}
        {activeTab === "Equity" && (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Equity delivery</th>
                  <th>Equity intraday</th>
                  <th>F&amp;O - Futures</th>
                  <th>F&amp;O - Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>Zero Brokerage</td>
                  <td>0.03% or ₹20/executed order whichever is lower</td>
                  <td>0.03% or ₹20/executed order whichever is lower</td>
                  <td>Flat ₹20 per executed order</td>
                </tr>

                <tr>
                  <td>STT/CTT</td>
                  <td>0.1% on buy & sell</td>
                  <td>0.025% on sell side</td>
                  <td>0.02% on sell side</td>
                  <td>
                    <ul>
                      <li>0.125% on intrinsic value (exercised)</li>
                      <li>0.1% on sell side (premium)</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>Transaction charges</td>
                  <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                  <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                  <td>NSE: 0.00173% <br /> BSE: 0</td>
                  <td>NSE: 0.03503% <br /> BSE: 0.0325%</td>
                </tr>

                <tr>
                  <td>GST</td>
                  <td colSpan="4">18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>

                <tr>
                  <td>SEBI charges</td>
                  <td colSpan="4">₹10 / crore</td>
                </tr>

                <tr>
                  <td>Stamp charges</td>
                  <td>0.015% or ₹1500 / crore</td>
                  <td>0.003% or ₹300 / crore</td>
                  <td>0.002% or ₹200 / crore</td>
                  <td>0.003% or ₹300 / crore</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* ================= CURRENCY ================= */}
        {activeTab === "Currency" && (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Currency futures</th>
                  <th>Currency options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>0.03% or ₹20/executed order</td>
                  <td>₹20/executed order</td>
                </tr>

                <tr>
                  <td>STT/CTT</td>
                  <td>No STT</td>
                  <td>No STT</td>
                </tr>

                <tr>
                  <td>Transaction charges</td>
                  <td>NSE: 0.00035% <br /> BSE: 0.00045%</td>
                  <td>NSE: 0.0311% <br /> BSE: 0.001%</td>
                </tr>

                <tr>
                  <td>GST</td>
                  <td colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>

                <tr>
                  <td>SEBI charges</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                </tr>

                <tr>
                  <td>Stamp charges</td>
                  <td>0.0001% or ₹10 / crore</td>
                  <td>0.0001% or ₹10 / crore</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* ================= COMMODITY ================= */}
        {activeTab === "Commodity" && (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Commodity futures</th>
                  <th>Commodity options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>0.03% or ₹20/executed order</td>
                  <td>₹20/executed order</td>
                </tr>

                <tr>
                  <td>STT/CTT</td>
                  <td>0.01% on sell side (Non-Agri)</td>
                  <td>0.05% on sell side</td>
                </tr>

                <tr>
                  <td>Transaction charges</td>
                  <td>MCX: 0.0021% <br /> NSE: 0.0001%</td>
                  <td>MCX: 0.0418% <br /> NSE: 0.001%</td>
                </tr>

                <tr>
                  <td>GST</td>
                  <td colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>

                <tr>
                  <td>SEBI charges</td>
                  <td>Agri: ₹1 / crore <br /> Non-Agri: ₹10 / crore</td>
                  <td>₹10 / crore</td>
                </tr>

                <tr>
                  <td>Stamp charges</td>
                  <td>0.002% or ₹200 / crore</td>
                  <td>0.003% or ₹300 / crore</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Footer */}
        <div className="calculator">
          <a href="#">Calculate your costs upfront</a> using our brokerage calculator
        </div>
      </div>
    </>
  );
}
