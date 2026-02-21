import React from "react";
import "./support.css"
function Hero() {
    return ( 
        <div className="support-container">

      {/* Top Section */}

        

      <div className="support-top">
        <h1>Support Portal</h1>
        <div className="top-right">
          <button className="tickets-btn">My tickets</button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />
     

      </div>

      <div className="content-wrapper">
        
        {/* LEFT SECTION */}
        <div className="left-section">
          
          {/* Category Card */}
          <div className="category-card">
            <div className="icon">+</div>
            <p>Account Opening</p>
            <span>▾</span>
          </div>

          <div className="category-card">
            <div className="icon">👤</div>
            <p>Your Zerodha Account</p>
            <span>▾</span>
          </div>

          <div className="category-card">
            <div className="icon">🎯</div>
            <p>Kite</p>
            <span>▾</span>
          </div>

          <div className="category-card">
            <div className="icon">₹</div>
            <p>Funds</p>
            <span>▾</span>
          </div>

          <div className="category-card">
            <div className="icon">⚙️</div>
            <p>Console</p>
            <span>▾</span>
          </div>

          <div className="category-card">
            <div className="icon">💰</div>
            <p>Coin</p>
            <span>▾</span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="right-section">

          {/* Notices */}
          <div className="notice-box">
            <ul>
              <li>
                <a href="#">Exchange issue with order placement <br /> on BSE F&O (Resolved)</a>
              </li>
              <li>
                <a href="#">Offer for sale (OFS) – December <br /> 2025</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h3>Quick links</h3>
            <ul>
              <li>1. Track account opening</li>
              <li>2. Track segment activation</li>
              <li>3. Intraday margins</li>
              <li>4. Kite user manual</li>
              <li>5. Learn how to create a ticket</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
     );
}

export default Hero;