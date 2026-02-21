import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{
      width: "100%",
      height: "90vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#fff"
    }}>
      
      <img 
        src="/media/images/Notfound.jpg"
        alt="404 Not Found"
        style={{ width: "340px", marginBottom: "20px" }}
      />

      <h1 style={{ fontSize: "2rem", marginBottom: "10px", color: "#424242" }}>
        Page not found
      </h1>

      <h3 style={{ fontSize: "1rem", color: "#616161", marginBottom: "20px" }}>
        Sorry, the page you are looking for does not exist.
      </h3>

      <Link 
        to="/" 
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          border: "1px solid #387ed1",
          color: "#387ed1",
          fontWeight: "500"
        }}
      >
        Go to Homepage
      </Link>

    </div>
  );
}

export default NotFound;
