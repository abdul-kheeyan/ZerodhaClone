import React from "react";
// import OTPLogin from "./OTPLogin"
import Investment from "./Investment";
import SteptoOpen from "./SteptoOpen";
import Benefit from "./Benefit";
import Explore from "./Explore";
import Faqs from "./Faqs";
import Openzerodha from "./Openzerodha";
import SingTop from "./singTop";
import Signin from "./Singin";


function Login() {
    return ( 

        <>
            <SingTop/>
            <Signin/>
            <Investment/>
            <SteptoOpen/>
            <Benefit/>
            <Explore/>
            <Faqs/>
            <Openzerodha/>
        </>
        
     );
}

export default Login;