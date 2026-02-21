import React from "react";
import Hero from "./Hero";
import LefSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import "./btn.css";

function ProductPage() {

  const data = [
    { imgURL: "media/images/zerodhaFundhouse.png", imgDescription: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals" },
    { imgURL: "media/images/sensibullLogo.svg", imgDescription: "Options trading platform that lets youcreate strategies, analyze positions, and examine data points like open interest, FII/DII, and more" },
    { imgURL: "media/images/tijori.svg", imgDescription: "Investment research platform   that offers detailed insights on stocks, sectors, supply chains, and more." },
    { imgURL: "media/images/streakLogo.png", imgDescription: "Systematic trading platform      that allows you to create and backtest     strategies without coding." },
    { imgURL: "media/images/smallcaseLogo.png", imgDescription: "Thematic investing platform      that helps you invest in diversified      baskets of stocks on ETFs." },
    { imgURL: "media/images/dittoLogo.png", imgDescription: "Personalized advice on life     and health insurance. No spam  and no mis-selling." },
  ];

  return (
    <>
      <Hero />

      <LefSection
        imgURL="media/images/kite.png"
        productName="Kite"
        productDicription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
      />

      <RightSection
        imgURL="media/images/console.png"
        productName="Console"
        productDicription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      />

      <LefSection
        imgURL="media/images/coin.png"
        productName="Coin"
        productDicription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
      />

      <RightSection
        imgURL="media/images/landing.svg"
        productName="Kite Connect API"
        productDicription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      />

      <LefSection
        imgURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDicription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations."
      />

      <h3 style={{ marginLeft: "27rem" }}>
        Want to know more about our technology stack? Check out the{" "}
        <a href="">Zerodha.tech</a> blog.
      </h3>

      <div style={{ marginLeft: "27rem", marginBottom:"2rem" }}>
        <h2 style={{ paddingLeft: "14rem", marginTop: "7rem" , marginBottom:"2rem" }}>
          The Zerodha Universe
        </h2>
        <p style={{ paddingLeft: "3rem", fontSize: "1rem" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Grid for 6 Universe Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "25px",
          padding: "20px"
        }}
      >
        {data.map((item, index) => (
          <Universe
            key={index}
            imgURL={item.imgURL}
            imgDescription={item.imgDescription}
          />
        ))}
      </div>
         <div style={{ textAlign: "center", marginTop: "2rem", marginBottom: "3rem" }}>
         <button>Sign up for free</button>
      </div>
    </>
  );
}

export default ProductPage;
