import React from "react";

function OpenAccount (){
    return(
      <div className="Container" style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
         <div className="title">
        <h2 style={{marginLeft:"10rem", marginTop:"10rem"}}>Open a Zerodha account</h2>
        <p style={{fontSize:"1rem"}}>
         Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button style={{marginLeft:"12rem"}}>Sign up for free</button>
      </div>
      </div>
    );
}

export default OpenAccount;