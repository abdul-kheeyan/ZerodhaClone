import React from "react";

export default function AccountCharges() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        .container {
          max-width: 900px;
          margin: 60px auto;
          color: #333;
        }

        h2 {
          font-size: 18px;
          font-weight: 500;
          margin: 40px 0 15px;
        }

        .table-box {
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          overflow: hidden;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 14px 16px;
          font-size: 14px;
          text-align: left;
          border-bottom: 1px solid #eee;
          vertical-align: middle;
        }

        th {
          background: #fafafa;
          font-weight: 500;
          color: #444;
        }

        tr:last-child td {
          border-bottom: none;
        }

        .free {
          background: #2ecc71;
          color: #fff;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 3px;
          font-weight: 600;
          display: inline-block;
        }

        .note {
          font-size: 12px;
          color: #666;
          margin-top: 10px;
          line-height: 1.6;
        }

        .note a {
          color: #387ed1;
          text-decoration: none;
        }

        .note a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="container">
        {/* Charges for account opening */}
        <h2>Charges for account opening</h2>
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Type of account</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td><span className="free">FREE</span></td>
              </tr>
              <tr>
                <td>Offline account</td>
                <td><span className="free">FREE</span></td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Demat AMC */}
        <h2>Demat AMC (Annual Maintenance Charge)</h2>
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Value of holdings</th>
                <th>AMC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to ₹4 lakh</td>
                <td><span className="free">FREE</span></td>
              </tr>
              <tr>
                <td>₹4 lakh - ₹10 lakh</td>
                <td>₹100 per year, charged quarterly*</td>
              </tr>
              <tr>
                <td>Above ₹10 lakh</td>
                <td>₹300 per year, charged quarterly</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          * Lower AMC is applicable only if the account qualifies as a Basic Services
          Demat Account (BSDA). BSDA account holders cannot hold more than one demat
          account. To learn more about BSDA, <a href="#">click here</a>.
        </div>

        {/* Optional services */}
        <h2>Charges for optional value added services</h2>
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Billing Frequency</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy &amp; Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: 500 | Personal: Free</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
