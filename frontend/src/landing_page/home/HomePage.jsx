import React from "react";
import Horo from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Pricing from "./Pricing";

function HomePage (){
    return(
        <>
            
            <Horo/>
            <Stats/>
            <Pricing/>
            <Awards/>
            <Education/>
            <OpenAccount/>
            
        </>
    );
}

export default HomePage;