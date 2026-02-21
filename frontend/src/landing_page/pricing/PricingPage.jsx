import React from "react";
import Hero from "./Hero";
import EquityPricingTable from "./EquityPricingTable";
import AccountCharges from "./AccountCharges";
import ChargesExplained from "./ChargesExplained";


function PricingPage() {
    return ( 
        <>
         <Hero/>
         <EquityPricingTable/>
         <AccountCharges/>
         <ChargesExplained/>
        </>   
     );
}

export default PricingPage;