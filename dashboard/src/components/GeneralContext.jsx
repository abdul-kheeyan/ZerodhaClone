import React, { useState } from "react";
import BuyActionWindow from "../components/BuyActionWindow";

const GeneralContext = React.createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [uid, setUid] = useState(null);

  const openBuyWindow = (stockId) => {
    console.log("OPEN BUY:", stockId);
    setUid(stockId);
    setIsBuyOpen(true);
  };

  const closeBuyWindow = () => {
    setIsBuyOpen(false);
    setUid(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
      }}
    >
      {children}
      {isBuyOpen && <BuyActionWindow uid={uid} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
