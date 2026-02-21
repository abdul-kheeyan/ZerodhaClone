import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Order";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";

import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  // const navigate = useNavigate();

  // // 🔐 Token check
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/"); // agar token nahi → signup page
  //   }
  // }, [navigate]);

  return (
    <GeneralContextProvider>
      <div className="dashboard-container" style={{ display: "flex" }}>
        <WatchList />

        <div className="content" style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </GeneralContextProvider>
  );
};

export default Dashboard;
