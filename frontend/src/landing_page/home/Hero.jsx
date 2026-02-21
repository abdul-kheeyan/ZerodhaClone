import React from "react";
import './hero.css';

function Hero (){
   return(
     <div className="hero-container" >
      <div className="hero-row">
         <img src="media/images/homeHero.png" alt="HeroImg" style={{}}/>
      </div>

      <div className="title">
        <h1 style={{marginBottom:"1rem"}}>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
        <button>Sign up for free</button>
      </div>
    </div>
   );
}

export default Hero;
